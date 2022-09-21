import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://faizalam:alamfaiz9883@cluster0.7luhm.mongodb.net/proshop?retryWrites=true&w=majority", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})

		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold)
		process.exit(1)
	}
}

export default connectDB
