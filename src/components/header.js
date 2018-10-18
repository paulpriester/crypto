import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component	{
	renderLinks()	{
		
			return	(	
			<div>		
				<li className="nav-item">
					<Link className="nav-link" to="/news">News</Link>
				</li>	
				<li className="nav-item">
					<Link className="nav-link" to="/list">Home</Link>
				</li>	
			</div>				
			);

		} 

	render() {
		return (
			<nav className="navbar navbar-light">
				<Link to="/news" className=" navbar-brand">News</Link>
				<ul className="nav navbar-nav">
					{this.renderLinks()}			
				</ul>
			</nav>
		);
	}
}
// function mapStateToProps(state){
// 	return{
// 		authenticated: state.auth.authenticated
// 	};
// }
export default Header;