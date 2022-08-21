import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Loader from '../components/Loader'

const SingleBlogScreen = ({ match }) => {
	const [blog, setBlog] = useState({})
	const blogId = match.params.id
	useEffect(() => {
		axios
			.get(`/api/blogs/${blogId}`)
			.then((response) => setBlog(response.data))
	}, [blogId])

	return (
		<div>
			{Object.keys(blog).length === 0 ? (
				<Loader />
			) : (
				<>
					<div className='article-section mt-4'>
						<div className='container'>
							<img
								src={blog.image}
								alt='blog'
								className='img-fluid'
							/>
						</div>
					</div>
					<div className='container mt-4'>
						<h1 className='font-weight-bold'>{blog.title}</h1>
						<div className='span'>
							<h6 className='font-weight-bold'>
								Written by {blog.author}
							</h6>
							<p className='text-secondary '>
								{blog.createdAt.substring(0, 10)}
							</p>
						</div>
						<hr />
						<ReactMarkdown className='blogContent'>
							{blog.paraOne}
						</ReactMarkdown>
						<hr />
						<ReactMarkdown className='blogContent'>
							{blog.paraTwo}
						</ReactMarkdown>
						<hr />
						<ReactMarkdown className='blogContent'>
							{blog.paraThree}
						</ReactMarkdown>
						<hr />
					</div>
				</>
			)}
		</div>
	)
}

export default SingleBlogScreen
