import React from 'react';

class CodeEditor extends React.Component {
  // event handler functions
    // Editor(textarea) - enbale tab to add 2 spaces
    // TestEditor Button onClick event
    // CodeEditor Button onClick event
    
  render(){
    return(
      <div className={ this.props.class } style={{ backgroundColor: "orange", margin: "1em" }}>
        <p>{ this.props.editor }</p>
        <textarea>
        </textarea>
      </div>
    )
  }
}

export default CodeEditor;
