import { FETCH_COIN, FETCH_ALL_COINS, ERROR } from '../actions/index'

export default function (state = {coin:[]}, action) {
	switch (action.type) {
	case FETCH_COIN:
		return {...state,
			coin:[ action.payload.data[0] ].concat(state.coin),
			error: false }
		

	case FETCH_ALL_COINS:
		return {...state,
			coin:action.payload.data.concat(state),
			error: false }

	case ERROR:
		console.log(action)
		return {...state,
			error: "Invalid Input"}
	}
	return state;
}