import ReactDOM from 'react-dom';
import Query from '../Query';
import { products } from '../../index'
const pokemon = require('pokemontcgsdk')
const $ = window.$;


// Обновление карточек товаров при переходе по категориям (первая страница товаров)
export default function updateProducts(event){
	event.preventDefault();
    let title = event.currentTarget.innerText;
	let categoryPath = event.currentTarget.pathname.slice(1);  // путь без / в начале

	pokemon.card.find('base1-4')
	.then(result => {
		console.log(result) // "Charizard"
	})


	let params = {
		'page': 1,
		'sort': 'popularity'
    }
    Query(`${ categoryPath }`, params)
		.then( (result) => {
			if (result.products) {
				if (result.products.length !== 0) {
                    ReactDOM.unmountComponentAtNode($("#carouselTop")[0]);
					ReactDOM.unmountComponentAtNode($("#carousel1")[0]);
					ReactDOM.unmountComponentAtNode($("#carousel2")[0]);
					ReactDOM.unmountComponentAtNode($("#carousel3")[0]); 
					products.setState({
				    	isLoaded: true,
				    	error: null,
				    	products: result.products,
				    	pages: 1,
						productsCountAll: result.productsCountAll,
				    	title: title,
				    	categoryPath: categoryPath,
				    	sortingCategory: 'popularity'
                    });
				}
			}
			$('html, body').animate({scrollTop:0}, 300);
		})
		.catch(error => {
		  	products.setState({
		        isLoaded: true,
		        error: error.statusText
		  	});
		})
}