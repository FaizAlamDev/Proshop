import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import nodemailer from 'nodemailer'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
	res.send(process.env.PAYPAL_CLIENT_ID)
)

app.post('/api/config/send_mail', async (req, res) => {
	let { cart, userInfo } = req.body
	if (cart && userInfo) {
		const transport = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		})
		let cartItems = cart.cartItems
		const info = cartItems.map((item) => {
			return `<li>${item.qty} ${item.name} for &#8377; ${item.price} each.</li>`
		})

		await transport.sendMail({
			from: process.env.GMAIL_USER,
			to: userInfo.email,
			subject: 'Your Order has been Placed.',
			html: `
			<h2>Thank you for ordering from FORTE</h2>
			<p>Your order has been placed</p>
			<h3>Shipping Address:</h3>
			<ul>
				<li>Address: ${cart.shippingAddress.address}</li>
				<li>City: ${cart.shippingAddress.city}</li>
				<li>Postal Code: ${cart.shippingAddress.postalCode}</li>
				<li>Country: ${cart.shippingAddress.country}</li>
			</ul>
			<h3>Order Details:</h3>
			<p>Your Payment Method: ${cart.paymentMethod}</p>
			<p>Your Final Price: &#8377; ${cart.totalPrice}</p>
			<p>You Ordered:</p>
			<ul>${info}</ul>
			<p>Your order will be delivered within 3 working days</p>
			<h3>THANK YOU</h3>
			<hr>
			<p>In case of any queries:</p>
			<p>You can contact <strong>7007965698</strong></p>
			<p>Or Email: <strong>faizalam9883@gmail.com</strong></p>
			`,
		})
		res.status(200).end()
	}
})

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')))

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	)
} else {
	app.get('/', (req, res) => {
		res.send('API is running....')
	})
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.bold
	)
)
