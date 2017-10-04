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
            updateTestResult,
            buttonStatus,
            runStatus
              } = this.props;
    return (
      <div id="textEditor-container">
        <TestEditorContainer
          rspecCode={ rspecCode }
          createRspecCode={ createRspecCode }
          updateRspecCode={ updateRspecCode }
          buttonStatus={ buttonStatus }
          runStatus={ runStatus } />
        <RunButton 
          onClick={ updateTestResult }
          runStatus= { runStatus }
          buttonStatus={ buttonStatus } />
        <CodeEditorContainer
          rubyCode={ rubyCode }
          createRubyCode={ createRubyCode }
          updateRubyCode={ updateRubyCode }
          buttonStatus={ buttonStatus }
          runStatus={ runStatus } />
      </div>
    );
  }
}

export default TextEditorContainer;
