import React from 'react';

class InputDisplay extends React.Component {
  render() {
    return (
      <div className={ this.props.klass } style={{ backgroundColor: "pink", display: "inline-block", margin: "1em" }}>
        <p>{ this.props.klass }</p>
      </div>
    );
  }
}

export default InputDisplay;
