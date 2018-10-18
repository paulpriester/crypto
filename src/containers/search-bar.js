import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoin, fetchNews } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();

		// We need to go and fetch api data.
		this.props.fetchCoin(this.state.term);
		this.props.fetchNews(this.state.term)
		this.setState({ term: '' });
	}

	
	render () {
		console.log(this.props)
		return (
			<form onSubmit={this.onFormSubmit}className = "input-group">
				<input
					placeholder={this.props.error? this.props.error:'Search for Coin'}
					className='form-control'
					value={this.state.term}
					onChange={this.onInputChange}
					style={this.props.error? {border:"2px solid red"}:{}}
				/>

				<span className='input-group-btn'>
					<button type="submit" className='btn btn-secondary'>Submit</button>
				</span>

			</form>

		);
	}
}

function mapStateToProps(state) {
	console.log(state)
	return state.coin
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCoin, fetchNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);