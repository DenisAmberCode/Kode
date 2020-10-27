import Query from './Query';
const $ = window.$;

export default function updateCards(type, subType, paginationPage, limitCards, setCards, setError, setIsLoaded, setCardsCountAll){
	let params = {
		page: paginationPage,
		pageSize: limitCards
	  };
	if (type) { params = { ...params, types: type } };
	if (subType) { params = { ...params, subtype: subType } };

	$('#sidebar').removeClass('active');
	$('.overlay').removeClass('active');
	$('html, body').animate({scrollTop:0}, 300);

	Query(`cards`, params)
		.then(response => {
			const cardsCountAll = response.headers.get('Total-Count');
			response.json()
				.then(result => {
					if (result.cards) {
						if (result.cards.length !== 0) {
							setCards( result.cards );
							setError( null );
							setIsLoaded( true );
							setCardsCountAll( cardsCountAll );
						}
					}					
				})
		})
		.catch(error => {
			setError(error.statusText);
			setIsLoaded(true);
		})

}