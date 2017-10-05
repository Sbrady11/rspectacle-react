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
  // tab??
  handleTab(event) {
    if(event.keyCode === 9) {
      event.preventDefault();
      event.target.value += '\t';
    }
  }
  // rubyCode has to be formatted
  render() {
    const { rubyCode, createRubyCode } = this.props;
    return (
      <div className="display" style={{ border: 'medium', display: "inline-block", padding: "1em", margin: "1em" }}>
        <h2 className="editor"> Code </h2>
        <div>
          <textarea
            id='code-input'
            onChange={this.onChange}
            onKeyDown={this.handleTab}
            placeholder={ rubyCode }>{ rubyCode }</textarea>
        </div>
        <SubmitButton onSubmit={ createRubyCode } content={ rubyCode } />
      </div>
    );
  }
}

export default CodeEditorContainer;
