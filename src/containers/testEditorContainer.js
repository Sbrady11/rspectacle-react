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
    const { rspecCode, 
            createRspecCode, 
               } = this.props;
    return (
      <div className="display" style={{ border: 'medium', display: "inline-block", padding: "1em", margin: "1em" }}>
        <h2 className="editor">Test</h2>
        <div>
          <textarea
            onKeyDown={this.handleTab}
            id='spec-input'
            onChange={this.onChange}
            placeholder={ rspecCode }>{ rspecCode }</textarea>
        </div>
        <SubmitButton 
          onSubmit={ createRspecCode } 
          content={ rspecCode } />
      </div>
    );
  }
}

export default TestEditorContainer;
