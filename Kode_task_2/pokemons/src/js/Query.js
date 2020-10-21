export default function Query(path, params) {
	const url = new URL('https://api.pokemontcg.io/v1/');
	url.pathname += path;
	const options = {
    	method: 'GET'
    }
    for (let key in params) {
      url.searchParams.set(key, params[key]);
    }
    return fetch(url, options)
			.then((response) => {
			    if (response.ok) {
			        return response;
			    } else {
			        throw response;
			    }
			})
}