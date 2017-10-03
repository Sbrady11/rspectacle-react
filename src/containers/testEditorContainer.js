import React from 'react';
import SubmitButton from '../components/submitButton.js';

class TestEditorContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  // event handler functions
    // onChange
  onChange(event) {
    const updateRspecCode = this.props.updateRspecCode;
    updateRspecCode(event);
  }
  // tab??
  handleTab(event) {
    if(event.keyCode === 9) {
      event.preventDefault();
      event.target.value += '\t';
    }
  }

  // rspecCode has to be formatted
  render() {
    const { rspecCode, createRspecCode } = this.props;
    return (
      <div className="display" style={{ display: "inline-block", padding: "1em", margin: "1em" }}>
        <p>{ rspecCode }</p>
        <textarea
          onKeyDown={this.handleTab}
          id='code-input'
          onChange={this.onChange}>{ rspecCode }</textarea>
        <SubmitButton onSubmit={ createRspecCode } content={ rspecCode } />
      </div>
    );
  }
}

export default TestEditorContainer;
