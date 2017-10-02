import React from 'react';
import InputDisplay from '../components/inputDisplay.js';
import CodeEditor from '../components/codeEditor.js';
import SubmitButton from '../components/submitButton.js';

class TestEditorContainer extends React.Component {
  render() {
    return (
      <div className="display" style={{ backgroundColor: "black", display: "inline-block", padding: "1em", margin: "1em" }}>
        <InputDisplay testLogs={ this.props.testLogs } class="test-display"/>
        <CodeEditor class="test-input"/>
        <SubmitButton />
      </div>
    );
  }
}

export default TestEditorContainer;
