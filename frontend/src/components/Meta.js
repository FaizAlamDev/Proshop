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
	title: 'yourWishBasket',
	description: 'Customize your gifting needs for all occasions',
	keywords:
		'Gift Baskets, Pinewood Trays, Money Cards, MDF Trays, Paper Bags, Ring Trays',
}

export default Meta
