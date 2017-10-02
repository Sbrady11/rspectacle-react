import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Cable from 'actioncable';
import UserContainer from './userContainer.js';

import ConsoleOutput from '../components/consoleOutput.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rubyCode: '',
      rspecCode: '',
      testResult: ''
    };
  }

  componentWillMount() {
    this.createSocket();
  }

  createSocket() {
    let playgroundCable = Cable.createConsumer('ws://localhost:3001/cable');
    const { rubyCode, rspecCode, testResult } = this.state;
    this.playground = playgroundCable.subscriptions.create({
      channel: 'PlaygroundChannel'
    }, {
      connected: () => {},
      received: (data) => {
        this.setState({ rspecCode: data.rspec.content });
      },
      createRspecCode: function(rspecCode) {
        this.perform('create_rspec_code', {
          rspecCode: rspecCode
        });
      },
      createRubyCode: function(rubyCode){
        this.perform('create_ruby_code', {
          rubyCode: rubyCode
        });
      },
      runSpec: function(testResult){

      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <div className="playground">
          <UserContainer
            rspecCode={ this.state.rspecCode }
            handleRspecCodeSubmit={ this.handleRspecCodeSendEvent }/>

          <div className="output" style={{ backgroundColor: "black", padding: "1em", margin: "1em 0em" }}>
            <ConsoleOutput />
          </div>
        </div> { /* end of className='playground' */ }
      </div>
    );
  }

  handleRspecCodeSendEvent = (event) => {
    event.preventDefault();
    // query DOM just once and use value twice
    const entered_code = document.querySelector('.rspec-input > textarea').value;
    this.setState({
      rspecCode: entered_code
    });

    // using variable saved instead of state as state isn't updated immediately
    // within the function
    this.playground.createRspecCode(entered_code);
  }

  handleRubyCodeSendEvent = (event) => {
    event.preventDefault();
    const entered_code = document.querySelector('.implementation-input > textarea').value;
    this.setState({
      rubyCode: entered_code
    });
    this.playground.createRubyCode(entered_code);
  }
}

export default App;
