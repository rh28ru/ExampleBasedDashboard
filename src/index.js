import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';
// content added by RH
import Admin from './layout/Admin';
import Normal from './layout/Normal';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link,
  Redirect
 } from "react-router-dom"

ReactDOM.render(
  <Router>
    <Switch>
        <Route path = "/admin" component = {Admin} />
        <Route path = '/normal' component = {Normal} />
        <Route path = '/test' render = {()=>( <div> This is test ...</div>)} />
        <Redirect from = "/" to = "/admin" />
      </Switch>
  </Router>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
