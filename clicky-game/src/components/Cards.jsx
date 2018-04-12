import React from 'react'
import '../css/cards.css'

const Cards = props => (
	<div className="playArea">
	{props.characters.map((character) => {
		return  <div className="characterCards" key={character.id}>
					<img className="characterImages" alt={character.name} src={`../images/${character.image}`}></img>
				</div>
	})}
		
	</div>
)

export default Cards;