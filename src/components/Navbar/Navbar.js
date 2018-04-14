import React from 'react'
import './navbar.css'

const Navbar = props => {
	return <div className="navbar">
				<img className="southParkLogo" src="./images/southpark_logo.png" alt="South Park"></img>
				{/*<p className="prompt">{ props.message ? `You Guessed ${props.message}` : "Click an image to begin."}</p>*/}
				<p className="scoreboard">Current Score: {props.score || 0} | High Score: {props.highScore || 0}</p>
			</div>
}

export default Navbar