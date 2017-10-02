import React from 'react';
import TestContainer from './testContainer.js';
import ImplementationContainer from './implementationContainer.js';
import RunButton from '../components/runButton.js';

class UserContainer extends React.Component {
  render() {
    return (
      <div id="user-container">
        <TestContainer />
        <RunButton />
        <ImplementationContainer />
      </div>
    );
  }
}

export default UserContainer;
