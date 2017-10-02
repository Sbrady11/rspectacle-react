import React from 'react';
import SubmitButton from '../components/submitButton.js';

class CodeEditorContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }
  // event handler functions
    // onKeyDown
  onKeyDown(event) {
    const updateRubyCode = this.props.updateRubyCode;
    updateRubyCode(event);
  }
  render() {
    const { rubyCode, createRubyCode } = this.props;
    return (
      <div className="display" style={{ display: "inline-block", padding: "1em", margin: "1em" }}>
        <p>{ rubyCode }</p>
        <textarea id='code-input' onKeyDown={this.onKeyDown}></textarea>
        <SubmitButton onSubmit={ createRubyCode } content={ rubyCode }/>
      </div>
    );
  }
}

export default CodeEditorContainer;
