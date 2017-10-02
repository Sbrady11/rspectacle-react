import React from 'react';
import SubmitButton from '../components/submitButton.js';

class CodeEditorContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  // event handler functions
    // onChange
  onChange(event) {
    const updateRubyCode = this.props.updateRubyCode;
    updateRubyCode(event);
  }
  // rubyCode has to be formatted
  render() {
    const { rubyCode, createRubyCode } = this.props;
    return (
      <div className="display" style={{ display: "inline-block", padding: "1em", margin: "1em" }}>
        <p>{ rubyCode }</p>
        <textarea id='code-input' onChange={this.onChange}></textarea>
        <SubmitButton onSubmit={ createRubyCode } content={ rubyCode }/>
      </div>
    );
  }
}

export default CodeEditorContainer;
