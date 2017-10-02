import React from 'react';

class SubmitButton extends React.Component {
  // event handler functions
    // Button onClick event
  render () {
    return (
      <button onClick={ this.props.handleClick }> SUBMIT </button>
    )
  }
}

export default SubmitButton;
