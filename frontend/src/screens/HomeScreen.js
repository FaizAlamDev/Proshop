import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import FilterBar from '../components/FilterBar'

const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword

	const pageNumber = match.params.pageNumber || 1

	const dispatch = useDispatch()

	const productList = useSelector((state) => state.productList)
	const { loading, error, products, page, pages } = productList

	const [mp, setMP] = useState([])
	const [fp, setFP] = useState([])

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber))
	}, [dispatch, keyword, pageNumber])

	return (
		<>
			<Meta />
			{!keyword ? (
				<ProductCarousel />
			) : (
				<Link to='/' className='btn btn-light'>
					Go Back
				</Link>
			)}
			<FilterBar
				products={products}
				mp={mp}
				fp={fp}
				setMP={setMP}
				setFP={setFP}
			/>
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<Row>
						{mp.length === 0 &&
							fp.length === 0 &&
							products.map((product) => (
								<Col
									key={product._id}
									sm={12}
									md={6}
									lg={4}
									xl={3}
								>
									<Product product={product} />
								</Col>
							))}
						{mp.length !== 0 &&
							mp.map((product) => (
								<Col
									key={product._id}
									sm={12}
									md={6}
									lg={4}
									xl={3}
								>
									<Product product={product} />
								</Col>
							))}
						{fp.length !== 0 &&
							fp.map((product) => (
								<Col
									key={product._id}
									sm={12}
									md={6}
									lg={4}
									xl={3}
								>
									<Product product={product} />
								</Col>
							))}
					</Row>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					/>
				</>
			)}
		</>
	)
}

export default HomeScreen
