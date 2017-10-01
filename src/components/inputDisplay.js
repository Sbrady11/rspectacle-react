import React from 'react';

class InputDisplay extends React.Component {
  render() {
    return (
      <div className={ this.props.class } style={{ backgroundColor: "pink", display: "inline-block", margin: "1em" }}>
        <p>{ this.props.class }</p>
      </div>
    );
  }
}

export default InputDisplay;
