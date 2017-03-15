import React from 'react';
import {
  // Router,
  // Route,
  Link,
  // hashHistory
} from 'react-router';

class dashboard extends React.Component {
  componentDidMount() {
    console.log('Home Page');
  }
  usersRender() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/users">Users</Link>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.children || this.usersRender()}
      </div>
    );
  }
}

export { dashboard };
