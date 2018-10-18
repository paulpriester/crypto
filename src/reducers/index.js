import { combineReducers } from 'redux';
import CoinReducer  from './reducer_coin';
import NewsReducer from './reducer_news';

const rootReducer = combineReducers({
	coin: CoinReducer,
	news: NewsReducer
});

export default rootReducer;
