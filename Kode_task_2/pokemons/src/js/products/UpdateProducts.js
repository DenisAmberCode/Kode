import ReactDOM from 'react-dom';
import Query from '../Query';
const $ = window.$;


// Обновление карточек товаров при переходе по категориям (первая страница товаров)
export default function updateProducts(type, subType, paginationPage, limitProducts, setProducts, setError, setIsLoaded, setProductsCountAll){
	let params = {
		page: paginationPage,
		pageSize: limitProducts
	  };
	if (type) { params = { ...params, types: type } };
	if (subType) { params = { ...params, subtype: subType } };

	$('#sidebar').removeClass('active');
	$('.overlay').removeClass('active');
	$('html, body').animate({scrollTop:0}, 300);

	Query(`cards`, params)
		.then(response => {
			const productsCountAll = response.headers.get('Total-Count');
			response.json()
				.then(result => {
					if (result.cards) {
						if (result.cards.length !== 0) {
							setProducts( result.cards );
							setError( null );
							setIsLoaded( true );
							setProductsCountAll( productsCountAll );
						}
						}
						
				})
		})
		.catch(error => {
			setError(error.statusText);
			setIsLoaded(true);
		})

}