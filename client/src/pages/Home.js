import React, { Component } from 'react';
import { socketConnect } from 'socket.io-react';
import autoBind from 'react-autobind';

import Header from '../components/Header';

import logo from '../images/logo.svg';
import '../stylesheets/App.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //binding functions
    autoBind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Home</h1>
        </header>
        <Header />
      </div>
    );
  }
}

export default socketConnect(Home);
/**
 * Created by asveloper on 10/1/17.
 */
