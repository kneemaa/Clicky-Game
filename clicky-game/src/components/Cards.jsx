import React from 'react'
import '../css/cards.css'

const Cards = props => (
	<div className="playAreaWrapper">
		<div className="playArea">
			<div className="characterCards" key={props.id}>
				<img className="characterImages" alt={props.alt} src={`../images/${props.img}`}></img>
			</div>
		</div>
	</div>
)

export default Cards;