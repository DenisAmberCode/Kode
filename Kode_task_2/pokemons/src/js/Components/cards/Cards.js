import React, { useState, useEffect } from 'react';
import Card from './Card';
import NavbarLeft from '../NavbarLeft/NavbarLeft';
import Pagination from './Pagination';
import updateCards from '../../UpdateCards';


export default function Cards (props) {

	const [cards, setCards] = useState( [] );
	const [cardsCountAll, setCardsCountAll] = useState( 0 );
	const [type, setType] = useState( undefined );
	const [subType, setSubType] = useState( undefined );
	const [paginationPage, setPaginationPage] = useState( 1 );
	const [error, setError] = useState( null );
	const [isLoaded, setIsLoaded] = useState( false );
	const limitCards = 16; // Кол-во запрашиваемых/отображаемых карточек

	useEffect(() => {
		updateCards(type, subType, paginationPage, limitCards, setCards, setError, setIsLoaded, setCardsCountAll);
	  }, 
	  [type, subType, paginationPage]
	);


	if ( error ) {
		return <div>Error: { error }</div>;
	} else if ( !isLoaded ) {
		return null;
	} else {
		let children = [];
		cards.forEach((card) => {
			children.push(<Card key={ card.id } card={ card } />);
		});

		return (
			<article className="cards">
				<NavbarLeft setType={ setType } setSubType={ setSubType } 
							setPaginationPage={ setPaginationPage } cardsCountAll={ cardsCountAll } />
				<h2 className="cards__title"><span className="cards__title_text"> Pokemons </span></h2>				
				<div className={ "cards__wrapper" }>
					{ children }
				</div>
				<Pagination paginationPage={ paginationPage } setPaginationPage={ setPaginationPage }
							cardsCountAll={ cardsCountAll } limitCards={ limitCards } />
			</article>
		);
	}

}