import React from 'react';
import InputDisplay from '../components/inputDisplay.js';
import CodeInput from '../components/codeInput.js';
import SubmitButton from '../components/submitButton.js';

class ImplementationContainer extends React.Component {
  render() {
    return (
      <div className="display" style={{ backgroundColor: "black",  display: "inline-block", padding: "1em", margin: "1em" }}>
        <InputDisplay class="implementation-display"/>
        <CodeInput class="implementation-input"/>
        <SubmitButton />
      </div>
    );
  }
}

export default ImplementationContainer;
