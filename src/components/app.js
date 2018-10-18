import React from "react";
import { Component } from "react";
import SearchBar from '../containers/search-bar';
import CoinList from '../containers/coin_list';
import {Link} from 'react-router-dom';
import {News} from '../containers/news'


// import News from '../containers/news';
// import Header from './Header'

export default class App extends Component {
 
  render() {
    return (
    <div>
    <ul className='nav'>
      <p className='news'>News:</p>
     <div className='headline'><h3 className='example1'>Check Out Latest Crypto <strong><a href='#scroll'> News</a></strong></h3></div>
    </ul>
      <SearchBar />
      <p><strong>Click enter to see top 100 coins</strong></p>
      <CoinList />
    </div>
    );
  }
}

