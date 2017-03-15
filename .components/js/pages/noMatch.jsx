import React from 'react';

class noMatch extends React.Component {
  componentDidMount() {
    console.log('NoMatch Page');
  }
  render() {
    return (
      <div>
        <h1>Not Found Page 404</h1>
      </div>
    );
  }
}

export { noMatch };
