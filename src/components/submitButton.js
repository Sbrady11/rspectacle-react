import React from 'react';

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // event handler function
    // Button onClick event
  handleSubmit(event) {
    event.preventDefault();
    const { onSubmit, content } = this.props;
    onSubmit(content);
  }
  render () {
    return (
      <button onClick={this.handleSubmit}> SUBMIT </button>
    )
  }
}

export default SubmitButton;
