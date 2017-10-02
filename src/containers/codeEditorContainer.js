import React from 'react';
import InputDisplay from '../components/inputDisplay.js';
import CodeEditor from '../components/codeEditor.js';
import SubmitButton from '../components/submitButton.js';

class CodeEditorContainer extends React.Component {
  render() {
    return (
      <div className="display" style={{ backgroundColor: "black",  display: "inline-block", padding: "1em", margin: "1em" }}>
        <InputDisplay class="code-display"/>
        <CodeEditor class="code-input" editor='Ruby'/>
        <SubmitButton />
      </div>
    );
  }
}

export default CodeEditorContainer;
