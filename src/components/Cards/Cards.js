import React from 'react'
import './cards.css'

const Cards = props => (
		<div>
			<div className="characterCards" key={props.id}>
				<img onClick={() => props.guessAction(props.id)} className="characterImages" alt={props.alt} src={`/Clicky-Game/images/${props.img}`}></img>
			</div>
		</div>
)

export default Cards;