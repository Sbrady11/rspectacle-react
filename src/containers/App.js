import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Cable from 'actioncable';
import TextEditorContainer from './textEditorContainer.js';

import ConsoleOutput from '../components/consoleOutput.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rspecCode: '',
      rubyCode: '',
      testResult: ''
    };
  }

  componentWillMount() {
    this.createSocket();
  }

  createSocket() {
    // Change url to heroku backend server
    let cable = Cable.createConsumer('ws://localhost:3001/cable');
    this.chats = cable.subscriptions.create({
      channel: 'PlaygroundChannel'
    }, {
      connected: () => {},
      received: (data) => {
        // Beware of data
        this.setState(data);
      },
      createRspecCode: function(rspecCodeContent) {
        // perform create_rspec_code from PlaygroundChannel
        this.perform('create_rspec_code', {
          content: rspecCodeContent
        });
      },
      createRubyCode: function(rubyCodeContent) {
        // perform create_ruby_code from PlaygroundChannel
        this.perform('create_ruby_code', {
          content: rubyCodeContent
        });

      },
      runRspec: function() {
        // perform run_rspec from PlaygroundChannel
        this.perform('run_rspec')
      }
    });
  }

  // render functions
    // render rspecCode
    // render rubyCode
    // render testResult

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <div className="playground">
          <TextEditorContainer />
          <ConsoleOutput />
        </div>
      </div>
    );
  }

  // update functions
    // update current rspecCode
      // will display on test-display
    // update current rubyCode
      // will display on code-display
    // update current testResult
      // will display on console

  // event handler functions
    // Editor(textarea) - enbale tab to add 2 spaces
    // TestEditor Button onClick event
    // CodeEditor Button onClick event
    // RunButton onClick event

}

export default App;

