import React, { useState } from 'react';

export default function Product (props) {

	const [card, setCard] = useState({
		id: props.card.id,
		name: props.card.name,
		artist: props.card.artist,
		image: props.card.imageUrl,
	});
	return (
		<div className={"card"}>
			<div className="card__image">
				<a href="">
					<img src={ card.image } alt={card.image }></img>
				</a>
			</div>
			<div className="card__info">
				<a href="" title={ card.name } className="card__title">
					{ card.name }
				</a>

				<p title={ card.artist }>
					{ card.artist }
				</p>
			</div>
		</div>
	);
}