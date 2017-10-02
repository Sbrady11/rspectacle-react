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
      rubyCode: '',
      rspecCode: '',
      testResult: ''
    };
    // this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
  }

  componentWillMount() {
    this.createSocket();
  }

  createSocket() {
    let cable = Cable.createConsumer('ws://localhost:3002/cable');
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

    let testCable = Cable.createConsumer('ws://localhost:3002/cable');
    this.testLogs = testCable.subscriptions.create({
      channel: 'TestBlockChannel'
    }, {
      connected: () => {},
      received: (data) => {
        let testLogs = this.state.testLogs;
        testLogs.push(data);
        this.setState({ testLogs: testLogs });
      },
      create: function(testContent) {
        this.perform('create', {
          content: testContent
        });
      }
    });

    let playgroundCable = Cable.createConsumer('ws://localhost:3001/cable');
    const { rubyCode, rspecCode, testResult } = this.state;
    this.playground = playgroundCable.subscriptions.create({
      channel: 'PlaygroundChannel'
    }, {
      connected: () => {},
      received: (data) => {
        debugger

        this.setState({ rspecCode: data.rspec.content });
        this.renderRspecCode();
      },
      createRspecCode: function(rspecCode) {
        this.perform('create_rspec_code', {
          rspecCode: rspecCode
        });
      },
      createRubyCode: function(rubyCode){

      },
      runSpec: function(testResult){

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

  renderTestLog() {
    return this.state.testLogs.map((block) => {
      return (
        <li key={`testContent_${block.id}`}>
          <span className='test-block'>{ block.content }</span>
        </li>
      );
    });
  }

  renderRspecCode() {
      return (
          <span className='test-block'>{ this.state.rspecCode }</span>
      );
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
          <UserContainer
            rspecCode={ this.state.rspecCode }
            testLogs={ this.renderTestLog() }
            handleRspecCodeSubmit={ this.handleRspecCodeSendEvent }/>

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
              onKeyPress={ this.handleTestBlockInputKeyPress }
              value={ this.state.currentTestBlock }
              onChange={ (e) => this.updateCurrentTestBlock(e) }
              type='text'
              placeholder='Enter your code...'
              className='test-code-input'></textarea>
              <button
                onClick={ this.handleTestSendEvent }
                className='send'>
                Send
              </button>
            </div>
            <div>
              <textarea
              type='text'
              id='rspec-code-input'
              placeholder='Enter your Rspec code...'
              className='test-code-input'></textarea>
              <button
                onClick={ (e) => this.handleRspecCodeSendEvent(e) }
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
    this.setState({
      currentTestBlock: event.target.value
    });
  }

  // updateRspecCode(event) {
  //   const intermediateRspecCode = event.target.value;
  //   // this.setState({
  //   //   rspecCode: event.target.value
  //   // });
  // }

  handleChatInputKeyPress(event) {
    if(event.key === 'Enter') {
      this.handleSendEvent(event);
    }//end if
  }

  handleTestBlockInputKeyPress(event) {
    if(event.key === 'Enter') {
      this.handleTestSendEvent(event);
    }//end if
  }

  handleRspecCodeInputKeyPress = (event) => {
    if(event.key === 'Enter') {
      this.handleRspecCodeSendEvent(event);
    }//end if
  }

  handleSendEvent(event) {
    event.preventDefault();
    this.chats.create(this.state.currentChatMessage);
    this.setState({
      currentChatMessage: ''
    });
  }

  handleTestSendEvent(event) {
    event.preventDefault();
    this.testLogs.create(this.state.currentTestBlock);
    this.setState({
      currentTestBlock: ''
    });
  }

  handleRspecCodeSendEvent = (event) => {
    event.preventDefault();
    this.setState({
      rspecCode: document.getElementById('rspec-code-input').value
    });
    // debugger
    this.playground.createRspecCode(document.getElementById('rspec-code-input').value);
    // where to change
    // this.setState({
    //   rspecCode: ''
    // });
  }
}

export default App;
