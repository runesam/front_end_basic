import React from 'react';
import {
  // Router,
  // Route,
  Link,
  // browserHistory
} from 'react-router';

class users extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
         href: ['user/10', 'user/20', 'user/30', 'user/40', 'user/50', 'user/60']
     };
  }
  componentDidMount() {

  }
  usersRender() {
    return (
      <div>
        <h1>Users Page</h1>
        {this.state.href.map((single, i) =>
          (
            <div>
              <Link key={i} to={single}>{single}</Link>
              <br />
            </div>
          )
        )}
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

export { users };
