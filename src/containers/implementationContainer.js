import React from 'react';
import InputDisplay from '../components/inputDisplay.js';
import CodeInput from '../components/codeInput.js';
import SubmitButton from '../components/submitButton.js';

class ImplementationContainer extends React.Component {
  render() {
    return (
      <div className="display" style={{ backgroundColor: "black",  display: "inline-block", padding: "1em", margin: "1em" }}>
        <InputDisplay
          content={ this.props.code }
          class="implementation-display"/>
        <CodeInput
          class="implementation-input"
          placholder="Enter code that will pass the test"/>
        <SubmitButton handleCodeSubmit={ this.props.handleCodeSubmit }/>
      </div>
    );
  }
}

export default ImplementationContainer;
