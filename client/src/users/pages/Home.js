import React, { Component } from 'react';
import { socketConnect } from 'socket.io-react';
import autoBind from 'react-autobind';

import Header from '../../components/Header';

import logo from '../../images/logo.svg';
import '../../stylesheets/App.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    //binding functions
    autoBind(this);
  }

  handleClick() {
    const {name, pass} = this.state;
    const { socket } = this.props;
    const data = {
      name,
      pass,
    };

    socket.emit('PAGE', data);
    socket.on('USER_RESPONSE', (data) => alert(data))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Users</h1>
        </header>
        <Header />
        <div className="User-form">
          <input
            type='text'
            onChange={(e) => this.setState({name: e.target.value})}
          />
         <input
            type='text'
            onChange={(e) => this.setState({pass: e.target.value})}
         />
        </div>
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    );
  }
}

export default socketConnect(Home);
/**
 * Created by asveloper on 10/1/17.
 */
