import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'

// @desc	Get All Blogs
// @route	GET /api/blogs
// @access	Private/Admin

const getBlogs = asyncHandler(async (req, res) => {
	const blogs = await Blog.find({})
	res.json(blogs)
})

// @desc    Get blog by ID
// @route   GET /api/blogs/:id
// @access  Private
const getBlogsById = asyncHandler(async (req, res) => {
	const blog = await Blog.findById(req.params.id)

	if (blog) {
		res.json(blog)
	} else {
		res.status(404)
		throw new Error('Blog not found')
	}
})

// @desc    Create new blog
// @route   POST /api/blogs
// @access  Private
const addBlog = asyncHandler(async (req, res) => {
	const { title, author, description, paraOne, paraTwo, paraThree, image } =
		req.body

	const blog = new Blog({
		title,
		author,
		description,
		paraOne,
		paraTwo,
		paraThree,
		image,
	})

	const createdBlog = await blog.save()

	res.status(201).json(createdBlog)
})

export { getBlogs, getBlogsById, addBlog }
