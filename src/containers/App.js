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
      testResult: '',
      chatLogs: [] // Not gonna use it
    };
  }

  componentWillMount() {
    this.createSocket();
  }

  createSocket() {
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
  renderChatLog() {
    return this.state.chatLogs.map((el) => {
      return (
        <li key={`chat_${el.id}`}>
          <span className='chat-message'>{ el.content }</span>
          <span className='chat-created-at'>{ el.created_at }</span>
        </li>
      );
    });
  }

  // handleSubmitButtonClick (string) {
  //   this.setState({
  //     inputDisplay: string
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <div className="playground">
          <TextEditorContainer />

          <div className="output" style={{ backgroundColor: "black", padding: "1em", margin: "1em 0em" }}>
            <ConsoleOutput />
          </div>

        </div> { /* end of className='playground' */ }
        <div className='playground'>
          <div className='code-display'>
            <h1>Code</h1>
            { /* <SubmitButton handleClick={ this.handleSubmitButtonClick } /> */}
            <ul className='chat-logs'>
              { this.renderChatLog() }
            </ul>
            <input
              onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
              value={ this.state.currentChatMessage }
              onChange={ (e) => this.updateCurrentChatMessage(e) }
              type='text'
              placeholder='Enter your code...'
              className='chat-input' />
            <button
              onClick={ (e) => this.handleSendEvent(e) }
              className='send'>
              Send
            </button>
          </div>
          <div className='rspec-display'>
            <h1>Rspec</h1>
            <ul className='chat-logs'>
              { this.renderChatLog() }
            </ul>
            <div>
              <textarea
              onKeyPress={ (e) => this.handleTestBlockInputKeyPress(e) }
              value={ this.state.currentTestBlock }
              onChange={ (e) => this.updateCurrentTestBlock(e) }
              type='text'
              placeholder='Enter your code...'
              className='test-code-input'></textarea>
              <button
                onClick={ (e) => this.handleTestSendEvent(e) }
                className='send'>
                Send
              </button>
            </div>
            <input
              onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
              value={ this.state.currentChatMessage }
              onChange={ (e) => this.updateCurrentChatMessage(e) }
              type='text'
              placeholder='Enter your code...'
              className='chat-input' />
            <button
              onClick={ (e) => this.handleSendEvent(e) }
              className='send'>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
  updateCurrentChatMessage(event) {
    this.setState({
      currentChatMessage: event.target.value
    });
  }

  handleChatInputKeyPress(event) {
    if(event.key === 'Enter') {
      this.handleSendEvent(event);
    }//end if
  }

  handleSendEvent(event) {
    event.preventDefault();
    this.chats.create(this.state.currentChatMessage);
    this.setState({
      currentChatMessage: ''
    });
  }
}

export default App;
