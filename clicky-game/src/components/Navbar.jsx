import React from 'react'
import '../css/navbar.css'

const Navbar = props => {
	return <div className="navbar">
				<p className="scoreboard">Current Score: {props.score || 0} | High Score: {props.highscore || 0}</p>
			</div>
}

export default Navbar