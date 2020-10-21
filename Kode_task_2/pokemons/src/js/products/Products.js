import React, { useState, useEffect } from 'react';
import Product from './Product';
import NavbarLeft from '../NavbarLeft/NavbarLeft';
import Pagination from './Pagination';
import ButtonMoreProducts from './ButtonMoreProducts';
import updateProducts from './UpdateProducts';


export default function Products (props) {

	const [products, setProducts] = useState( [] );
	const [productsCountAll, setProductsCountAll] = useState( 0 );
	const [type, setType] = useState( undefined );
	const [subType, setSubType] = useState( undefined );
	const [paginationPage, setPaginationPage] = useState( 1 );
	const [error, setError] = useState( null );
	const [isLoaded, setIsLoaded] = useState( false );
	const limitProducts = 16; // Кол-во запрашиваемых/отображаемых карточек

	useEffect(() => {
		updateProducts(type, subType, paginationPage, limitProducts, setProducts, setError, setIsLoaded, setProductsCountAll);
	  }, 
	  [type, subType, paginationPage]
	);


	if ( error ) {
		return <div>Error: { error }</div>;
	} else if ( !isLoaded ) {
		return null;
	} else {
		console.log(products);
		let children = [];
		products.forEach((card) => {
			children.push(<Product key={ card.id } card={ card } />);
		});

		return (
			<article id="products" className="products">
				<NavbarLeft setType={ setType } setSubType={ setSubType } 
							setPaginationPage={ setPaginationPage } productsCountAll={ productsCountAll } />
				<h2 className="products__title"><a href={ "#" } className="products__title_text"> Pokemons </a></h2>				
				<div className={ "products__wrapper" }>
					{ children }
				</div>
				<Pagination paginationPage={ paginationPage } setPaginationPage={ setPaginationPage }
							productsCountAll={ productsCountAll } limitProducts={ limitProducts } />
				<ButtonMoreProducts productsCount={ products.length } productsCountAll={ productsCountAll } />
			</article>
		);
	}

}