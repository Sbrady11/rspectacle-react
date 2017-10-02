import React from 'react';

class SubmitButton extends React.Component {

  render () {
    return (
      <div>
      <button onClick={ this.props.handleClick }> SUBMIT </button>
      <button
        handleRspecCodeSubmit={ this.props.handleRspecCodeSubmit }
        onClick={ (e) => this.props.handleRspecCodeSubmit(e) }
        className='send'>
        Send
      </button>
    </div>
    )
  }
}

export default SubmitButton;
