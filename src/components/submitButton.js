import React from 'react';

class SubmitButton extends React.Component {

  render () {
    return (
      <div>
      <button
        onClick={ this.props.handleRspecCodeSubmit }
        className='send'>
        SUBMIT
      </button>
    </div>
    )
  }
}

export default SubmitButton;
