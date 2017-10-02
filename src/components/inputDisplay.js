import React from 'react';

class InputDisplay extends React.Component {
  render() {
    return (
      <div className={ this.props.class } style={{ backgroundColor: "pink", margin: "1em" }}>
        <p>{ this.props.class }</p>
        <div>{/* rspecCode */}</div>
      </div>
    );
  }
}

export default InputDisplay;
