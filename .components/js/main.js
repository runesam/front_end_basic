import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import {
  homePage,
  about,
  users,
  user,
  noMatch
} from './pages/';


render((
  <Router history={hashHistory}>
    <Route path="/" component={homePage} />
    <Route path="/about" component={about} />
    <Route path="/users" component={users} />
    <Route path="/user" component={user} />
    <Route path="/noMatch" component={noMatch} />
  </Router>
), document.getElementById('app'));
