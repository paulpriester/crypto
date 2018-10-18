import {FETCH_NEWS} from '../actions/index';

export default function (state={news:[]}, action) {
	switch(action.type) {
		case FETCH_NEWS:
		 return {news: action.payload.data.articles}
	}
	return state;
}