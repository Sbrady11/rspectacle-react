import React from 'react';
import InputDisplay from '../components/inputDisplay.js';
import CodeInput from '../components/codeInput.js';
import SubmitButton from '../components/submitButton.js';

class TestContainer extends React.Component {
  render() {
    return (
      <div className="display" style={{ backgroundColor: "black", display: "inline-block", padding: "1em", margin: "1em" }}>
        <InputDisplay class="rspec-display"/>
        <CodeInput class="rspec-input"/>
        <SubmitButton />
      </div>
    );
  }
}

export default TestContainer;
