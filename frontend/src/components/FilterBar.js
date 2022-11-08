// import axios from 'axios'
// import Button from 'react-bootstrap/Button'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'

// function FilterBar({ products, mp, fp, setMP, setFP }) {
// 	const getMaleProducts = () => {
// 		axios
// 			.get('/api/products/cat/mensPerfume')
// 			.then((res) => {
// 				setMP(res.data)
// 				setFP([])
// 			})
// 			.catch((err) => console.log(err))
// 	}
// 	const getFemaleProducts = () => {
// 		axios
// 			.get('/api/products/cat/womensPerfume')
// 			.then((res) => {
// 				setFP(res.data)
// 				setMP([])
// 			})
// 			.catch((err) => console.log(err))
// 	}
// 	const getAllProducts = () => {
// 		setMP([])
// 		setFP([])
// 	}
// 	const buttonStyle = {
// 		backgroundColor: '#dfd',
// 		color: '#000',
// 		borderBottomColor: '#4BFF73',
// 		borderWidth: 5,
// 		margin: 0,
// 	}
// 	return (
// 		<div>
// 			<ButtonGroup className='mb-2 mt-3'>
// 				<Button
// 					onClick={getAllProducts}
// 					style={
// 						mp.length === 0 && fp.length === 0 ? buttonStyle : {}
// 					}
// 				>
// 					Kannauj's Perfume
// 				</Button>
// 				<Button
// 					onClick={getMaleProducts}
// 					style={
// 						mp.length !== 0 && fp.length === 0 ? buttonStyle : {}
// 					}
// 				>
// 					Men's
// 				</Button>
// 				<Button
// 					onClick={getFemaleProducts}
// 					style={
// 						mp.length === 0 && fp.length !== 0 ? buttonStyle : {}
// 					}
// 				>
// 					Women's
// 				</Button>
// 			</ButtonGroup>
// 		</div>
// 	)
// }

// export default FilterBar
