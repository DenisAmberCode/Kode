import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Card (props) {

	const [card, setCard] = useState({
		id: props.card.id,
		name: props.card.name,
		artist: props.card.artist,
		image: props.card.imageUrl,
	});
	
	return (
		<div className="card">
			<div className="card__image">
				<Link to={ `/cards/${ card.id }` } >
					<img src={ card.image } alt={card.image }></img>
				</Link>
			</div>
			<div className="card__info">
				<Link to={ `/cards/${ card.id }` } title={ card.name } className="card__title">
					{ card.name }
				</Link>

				<p title={ card.artist }>
					{ card.artist }
				</p>
			</div>
		</div>
	);
}