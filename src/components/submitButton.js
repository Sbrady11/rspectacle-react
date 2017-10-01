import React from 'react';

class SubmitButton extends React.Component {

  render () {
    return (
      <button onClick={ this.props.handleClick }> SUBMIT </button>
    )
  }
}

export default SubmitButton;
