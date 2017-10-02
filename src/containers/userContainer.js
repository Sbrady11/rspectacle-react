import React from 'react';
import TestContainer from './testContainer.js';
import ImplementationContainer from './implementationContainer.js';
import RunButton from '../components/runButton.js';

class UserContainer extends React.Component {
  render() {
    return (
      <div id="user-container">
        <TestContainer
          handleCodeSubmit={ this.props.handleRspecCodeSubmit }
          code={ this.props.rspecCode }/>
        <RunButton />
        <ImplementationContainer
          handleCodeSubmit={ this.props.handleRubyCodeSubmit }
          code={ this.props.rubyCode }/>
      </div>
    );
  }
}

export default UserContainer;
