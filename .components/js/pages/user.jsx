import React from 'react';

class user extends React.Component {
  componentDidMount() {
    console.log('User Page');
  }
  render() {
    return (
      <div>
        <h1>Single User Page</h1>
        <span>{this.props.params.id}</span>
      </div>
    );
  }
}

export { user };
