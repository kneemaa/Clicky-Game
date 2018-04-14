import React from 'react'
import './navbar.css'

const Navbar = props => {
	return <div className="navbar">
				<h1 className="appTitle">Clicky Game</h1>
				<h3 className="prompt">{props.message || "Click an image to begin."}</h3>
				<p className="scoreboard">Current Score: {props.score || 0} | High Score: {props.highScore || 0}</p>
			</div>
}

export default Navbar