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
      currentChatMessage: '',
      chatLogs: [],
      currentTestBlock: '',
      testLogs: [],
      inputDisplay: '',
      testDisplay: '',
      implementationDisplay: '',
      test: 'test'
    };
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
  }

  componentWillMount() {
    this.createSocket();
  }

  createSocket() {
    let cable = Cable.createConsumer('ws://localhost:3001/cable');
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel'
    }, {
      connected: () => {},
      received: (data) => {
        let chatLogs = this.state.chatLogs;
        chatLogs.push(data);
        this.setState({ chatLogs: chatLogs });
      },
      create: function(chatContent) {
        this.perform('create', {
          content: chatContent
        });
      }
    });

    let testCable = Cable.createConsumer('ws://localhost:3001/cable');
    this.testLogs = cable.subscriptions.create({
      channel: 'TestBlockChannel'
    }, {
      connected: () => {},
      received: (data) => {
        let testLogs = this.state.testLogs;
        testLogs.push(data);
        this.setState({ testLogs: testLogs });
      },
      create: function(testContent) {
        debugger
        this.perform('create', {
          content: testContent
        });
      }
    });
  }

  renderTestLog() {
    return this.state.testLogs.map((block) => {
      return (
        <li key={`testContent_${block.id}`}>
          <span className='test-block'>{ block.content }</span>
        </li>
      );
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

  handleSubmitButtonClick (string) {
    this.setState({
      inputDisplay: string
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <div className="playground">
          <UserContainer text= { this.renderChatLog() }/>

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

  updateCurrentTestBlock(event) {
    debugger
    this.setState({
      currentTestBlock: event.target.value
    });
  }

  handleChatInputKeyPress(event) {
    if(event.key === 'Enter') {
      this.handleSendEvent(event);
    }//end if
  }

  handleTestBlockInputKeyPress(event) {
    if(event.key === 'Enter') {
      this.handleSendEvent(event);
    }//end if
  }

  handleTestSendEvent(event) {
    event.preventDefault();
    this.testLogs.create(this.state.currentTestBlock);
    this.setState({
      currentTestBlock: ''
    });
  }

  handleSendEvent(event) {
    debugger
    event.preventDefault();
    this.chats.create(this.state.currentChatMessage);
    this.setState({
      currentChatMessage: ''
    });
  }
}

export default App;
