import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //binding functions
    autoBind(this);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Header);

/**
 * Created by asveloper on 10/1/17.
 */
