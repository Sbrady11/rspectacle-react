import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Cable from 'actioncable';
import TextEditorContainer from './textEditorContainer.js';
import ConsoleOutput from '../components/consoleOutput.js';
import WelcomeScreen from '../components/welcomeScreen.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rspecCode: '',
      rubyCode: '',
      testResult: '{}'
    };
    // Bind 'this' to App
    this.createRspecCode = this.createRspecCode.bind(this);
    this.createRubyCode = this.createRubyCode.bind(this);
    this.updateRspecCode = this.updateRspecCode.bind(this);
    this.updateRubyCode = this.updateRubyCode.bind(this);
    this.updateTestResult = this.updateTestResult.bind(this);
  }

  componentWillMount() {
    this.createSocket();
  }

  createSocket() {
    // Change url to heroku backend server
    let cable = Cable.createConsumer('ws://localhost:3001/cable');
    this.codes = cable.subscriptions.create({
      channel: 'PlaygroundChannel'
    }, {
      connected: () => {},
      received: (data) => {
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
        this.perform('run_rspec');
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <WelcomeScreen />
        <div className="playground">
          <TextEditorContainer
            rspecCode={this.state.rspecCode}
            rubyCode={this.state.rubyCode}
            createRspecCode={this.createRspecCode}
            createRubyCode={this.createRubyCode}
            updateRspecCode={this.updateRspecCode}
            updateRubyCode={this.updateRubyCode}
            updateTestResult={this.updateTestResult} />
          <ConsoleOutput testResult={this.state.testResult} />
        </div>
      </div>
    );
  }
  // On Submit
  createRspecCode(content) {
    this.codes.createRspecCode(content);
  }
  createRubyCode(content) {
    this.codes.createRubyCode(content);
  }
  // update current rspecCode
  updateRspecCode(event) {
    event.preventDefault();
    const rspecCode = event.target.value;
    this.setState({rspecCode: rspecCode});
  }
  // update current rubyCode
  updateRubyCode(event) {
    event.preventDefault();
    const rubyCode = event.target.value;
    this.setState({rubyCode: rubyCode});
  }
  // update current testResult
  updateTestResult() {
    this.codes.runRspec();
  }
}

export default App;