import express from 'express'
const router = express.Router()

import {
	getBlogs,
	getBlogsById,
	addBlog,
} from '../controllers/blogController.js'

router.route('/').get(getBlogs).post(addBlog)
router.route('/:id').get(getBlogsById)

export default router
