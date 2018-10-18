import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import reducers from './reducers';
import CoinDetail from './containers/coin_detail';
import News from './containers/news'
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store=createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/news" component={News} />
      <Route path="coindetail" component={CoinDetail}/>
    </Router>
  </Provider>
  , document.getElementById('root'));
