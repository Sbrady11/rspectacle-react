import React from 'react';
import TestEditorContainer from './testEditorContainer.js';
import CodeEditorContainer from './codeEditorContainer.js';
import RunButton from '../components/runButton.js';

class TextEditorContainer extends React.Component {
  render() {
    const { rspecCode,
            rubyCode,
            createRspecCode,
            createRubyCode,
            updateRspecCode, 
            updateRubyCode,
            updateTestResult } = this.props;
    return (
      <div id="textEditor-container">
        <TestEditorContainer
          rspecCode={ rspecCode }
          createRspecCode={ createRspecCode }
          updateRspecCode={ updateRspecCode } />
        <RunButton onClick={ updateTestResult }/>
        <CodeEditorContainer
          rubyCode={ rubyCode }
          createRubyCode={ createRubyCode }
          updateRubyCode={ updateRubyCode } />
      </div>
    );
  }
}

export default TextEditorContainer;
