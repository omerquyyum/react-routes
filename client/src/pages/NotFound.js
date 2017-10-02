import React, { Component } from 'react';
import autoBind from 'react-autobind';

class NotFound extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //binding functions
    autoBind(this);
  }

  render() {
    return <h1>Page not found!</h1>;
  }
}

export default NotFound;
/**
 * Created by asveloper on 10/1/17.
 */
