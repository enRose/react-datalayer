import React from "react"
import { Nav } from '../components/nav'
import { useHistory, } from 'react-router-dom'

const Home = () => {
	return <>
		<h2>Home</h2>
		<Nav currentPageName='home' 
			render={(onClick:any) => <button onClick={onClick}>next</button>}
		/>
	</>
}

export default Home