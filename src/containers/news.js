import React, { Component } from 'react';
import { connect } from 'react-redux';


class News extends Component {
	// componentDidMount() {
	// 	this.props.fetchNews();
	// }

	renderNews(newz) {
				return (
					<a href={newz.url} target="_blank" className='anchor'>
					<li className='list-group-item' key={newz.id}>
						<p>Source: {newz.source.name}</p>
						<p className='title'>Title: {newz.title}</p>
					</li>
					</a>
				)
	}
// <nav className="navbar navbar-light">
// 					<Link to="/news" className=" navbar-brand">News</Link>
// 					<Link to="/" className=" navbar-brand">Home</Link>		
// 				</nav>			
	render() {
		console.log(this.props.news)
		return(
			<div>
				<p className = 'test' id='scroll'> Latest News</p>	
				<ul className='list-group'>
					{this.props.news.length != 0 && this.props.news.map(this.renderNews)}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return  state.news
}
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchNews }, dispatch);
// }

export default connect(mapStateToProps)(News);