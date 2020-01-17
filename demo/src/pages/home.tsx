import React from "react"
import { Nav } from '../components/nav'

const Home = () => {
	return <>
		<h2>Home</h2>
		<Nav currentPageName='home' 
			render={(onClick:any) => <button onClick={onClick}>next</button>}
		/>
	</>
}

export default Home