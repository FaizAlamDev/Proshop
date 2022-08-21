import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	)
}

Meta.defaultProps = {
	title: 'FORTE',
	description: 'We sell the best products for cheapest prices',
	keywords: 'Leather shoes, Leather, Shoes, Ladies Shoes, Mens Shoes',
}

export default Meta
