import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		number: '9598060515',
		password: bcrypt.hashSync('123456789', 10),
		isAdmin: true,
	},
]

export default users
