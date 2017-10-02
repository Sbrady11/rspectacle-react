import React from 'react';
import SubmitButton from '../components/submitButton.js';

class TestEditorContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }
  // event handler functions
    // onKeyDown
  onKeyDown(event) {
    const updateRspecCode = this.props.updateRspecCode;
    updateRspecCode(event);
  }
  render() {
    const { rspecCode, createRspecCode } = this.props;
    return (
      <div className="display" style={{ display: "inline-block", padding: "1em", margin: "1em" }}>
        <p>{ rspecCode }</p>
        <textarea id='code-input' onKeyDown={this.onKeyDown}></textarea>
        <SubmitButton onSubmit={ createRspecCode } content={ rspecCode } />
      </div>
    );
  }
}

export default TestEditorContainer;
