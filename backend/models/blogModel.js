import mongoose from 'mongoose'

const blogSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		paraOne: {
			type: String,
			required: true,
		},
		paraTwo: {
			type: String,
			required: true,
		},
		paraThree: {
			type: String,
		},
		image: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
)

const Blog = mongoose.model('Blog', blogSchema)
export default Blog
