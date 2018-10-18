import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import News from './news'

var NumberFormat = require('react-number-format');


class CoinList extends Component {
	renderCoin(coinData) {
		console.log(coinData)

		// const rank = coinData.map(coin => coin.rank)
		// const name = coinData.map(coin => coin.name)
		// const price = coinData.map(coin => <NumberFormat value ={coin.price_usd} displayType={'text'}  thousandSeparator={true} prefix={'$ '} />)
		// const TMC = coinData.map(coin => <NumberFormat value ={coin.market_cap_usd} displayType={'text'}  thousandSeparator={true} prefix={'$ '} />)
		// const aSupply = coinData.map(coin => <NumberFormat value ={coin.available_supply} displayType={'text'}  thousandSeparator={true} />)
		// // const volume = coinData.map(coin => coin.24h_volume_usd)
		// // const supply = coinData.map(coin => coin.max_supply)
		// const percentChange = coinData.map(coin => coin.percent_change_24h)
		
		return (
		  <tr key={coinData.name}>
		  	<td>{coinData.rank}</td>
			<td><Link className='detail' to='/coindetail'>{coinData.name}</Link></td>
		  	<td><NumberFormat value={coinData.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$ '} /></td>
		  	<td><NumberFormat value={coinData['24h_volume_usd']} displayType={'text'} thousandSeparator={true} prefix={'$ '} /></td>
		  	<td><NumberFormat value={coinData.market_cap_usd} displayType={'text'} thousandSeparator={true} prefix={'$ '} /></td>
		  	<td><NumberFormat value={coinData.available_supply} displayType={'text'} thousandSeparator={true} /></td>
     	  	<td style={ coinData.percent_change_24h < 0 ?{color:"#f40e0e"} :{color:"#68f442"} } >{coinData.percent_change_24h}%</td>
      	  </tr>
		)
	}

	render() {
		// console.log(this.props.coin)
		return (
			<div>
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>Rank</th>
						<th>Name</th>
						<th>Price (USD)</th>
						<th>Volume (24h)</th>
						<th>Market Cap</th>
						<th>Circulating Supply</th>
						<th>Change %(24h)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.coin.length != 0 && this.props.coin.map(this.renderCoin)}
				</tbody>
			</table>
			<News />
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state)
	return state.coin;
}

export default connect (mapStateToProps)(CoinList);