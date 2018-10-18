import React, { Component } from 'react';
import { connect } from 'react-redux';

var NumberFormat = require('react-number-format');

class CoinDetail extends Component {
	renderCoin(coinData) {
		return (
		 <ul key={coinData.name}>
				<p>Title <br />{coinData.name}</p>
				<p>Price <br /><NumberFormat value={coinData.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
				<p>Volume (24h) <br /><NumberFormat value={coinData['24h_volume_usd']} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
			  	<p>Total Market Cap <br /><NumberFormat value={coinData.market_cap_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
			  	<p>Circulating Supply <br /><NumberFormat value={coinData.available_supply} displayType={'text'} thousandSeparator={true} /></p>
			  	<p>Percent Change (24h)  <p style={ coinData.percent_change_24h < 0 ?{color:"#f40e0e"} :{color:"#68f442"} }>{coinData.percent_change_24h} % </p></p>
			  	<p>Percent Change (1h)  <p style={ coinData.percent_change_1h < 0 ?{color:"#f40e0e"} :{color:"#68f442"} }>{coinData.percent_change_1h} %</p></p>
			  	<p>Percent Change (7d) <p style={ coinData.percent_change_7d < 0 ?{color:"#f40e0e"} :{color:"#68f442"} }>{coinData.percent_change_7d} %</p></p>
	      	  </ul>
		)
	}

	render() {
		return (

			<div>
				{this.props.coin.length != 0 && this.props.coin.map(this.renderCoin)}
			</div>

		)
	}
}

function mapStateToProps(state) {
	console.log(state)
	return state.coin;
}

export default connect (mapStateToProps)(CoinDetail);