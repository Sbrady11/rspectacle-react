import React from 'react';
import TestEditorContainer from './testEditorContainer.js';
import CodeEditorContainer from './codeEditorContainer.js';
import RunButton from '../components/runButton.js';

class TextEditorContainer extends React.Component {
  render() {
    return (
      <div id="textEditor-container">
        <TestEditorContainer />
        <RunButton />
        <CodeEditorContainer />
      </div>
    );
  }
}

export default TextEditorContainer;
