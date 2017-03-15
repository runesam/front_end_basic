import React from 'react';
import {
  // Router,
  // Route,
  Link,
  // hashHistory
} from 'react-router';

class homePage extends React.Component {
  componentDidMount() {
    console.log('Home Page');
  }
  render() {
    return (
      <div>
        {'Main Page'}
      </div>
    );
  }
}

export { homePage };
