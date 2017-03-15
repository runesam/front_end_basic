import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

import {
  dashboard,
  home,
  about,
  users,
  user,
  noMatch
} from './pages/';

render((
  <Router history={hashHistory}>
    <Route path="/" component={dashboard}>
      <Route path="home" component={home} />
      <Route path="about" component={about} />
      <Route path="users" component={users}>
        <Route path="/user/:id" component={user} />
      </Route>
      <Route path="/*" component={noMatch} />
    </Route>
  </Router>
  // eslint-disable-next-line no-undef
), document.getElementById('app'));
