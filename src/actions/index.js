import axios from 'axios';

let coin;
const ROOT_URL = `https://api.coinmarketcap.com/v1/ticker/`;
const NEWS = `&sortBy=publishedAt&domains=coindesk.com,cnbc.com,cointelegraph.com`;
const A = `https://newsapi.org/v2/everything?q=cryptocurrency,`

// const NEWS = `https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=publishedAt&domains=coindesk.com,cnbc.com,cointelegraph.com&`;
const API_KEY =`apiKey=109bd56deee7427e8c45dcc6c347f047`

export const FETCH_COIN= 'FETCH_COIN'
export const FETCH_ALL_COINS= 'FETCH_ALL_COINS'
export const FETCH_NEWS = 'FETCH_NEWS'
export const ERROR = 'ERROR'

export function fetchCoin(name) {
	const url = `${ROOT_URL}${name}/`;
	const request = axios.get(url);

	if(name == ""){
		return {
			type: FETCH_ALL_COINS,
			payload: request
		};
	}else if(name == name){
		return request
		.then(response=> 
			 {
			return {
				type: FETCH_COIN,
				payload: request
			}
		})
		.catch(err=>  {
			return {
				type: ERROR,
				payload: err
			}
		})
		
	} 
}

export function fetchNews(name) {
	
	const url = `${A}${name}${NEWS}&${API_KEY}`
	const request = axios.get(url)

	return {
		type: FETCH_NEWS,
		payload: request
	};
}
