import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const BlogScreen = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		axios.get('/api/blogs').then((response) => setBlogs(response.data))
	}, [])

	return (
		<div>
			<h1>All Blogs</h1>
			{blogs.map((blog) => (
				<Card
					className='mb-5'
					bg='light'
					text='dark'
					border='secondary'
					key={blog._id}
				>
					<Card.Header as='h3'>{blog.title}</Card.Header>
					<Card.Body>
						<Card.Title>Written by '{blog.author}'</Card.Title>
						<Card.Text>{blog.description}</Card.Text>
						<LinkContainer to={`/blog/${blog._id}`}>
							<Button variant='primary' className='btn-md'>
								READ MORE
							</Button>
						</LinkContainer>
					</Card.Body>
				</Card>
			))}
		</div>
	)
}

export default BlogScreen
