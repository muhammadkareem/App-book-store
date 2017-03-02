import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import {provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory,hashHistory ,IndexRoute,
  Link,
  IndexLink} from 'react-router';

import Signupform from './form/signup/Signupform';
import LoginForm from './form/signin/LoginForm';



// const store = createStore(
//     (state={}) => state,
//     applyMiddleware(thunk)
// );

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Signupform}/>
      <Route path="/LoginPages" component={LoginForm}>
      </Route>
      </Route>
   
  </Router > 
 
  ,
    document.getElementById('app')
)