import React from 'react';

class SubmitButton extends React.Component {

  render () {
    return (
      <div>
      <button onClick={ this.props.handleClick }> SUBMIT </button>
      <button
        onClick={ this.props.handleRspecCodeSubmit }
        className='send'>
        Send
      </button>
    </div>
    )
  }
}

export default SubmitButton;
