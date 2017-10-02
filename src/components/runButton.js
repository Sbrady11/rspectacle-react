import React from 'react';

class RunButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }
  // event handler function
    // onClick event
  handleClickEvent(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick();
  }
  render() {
    return(
      <button
        style={{ display: "inline-block" }}
        onClick={this.handleClickEvent}
      > RUN </button>
    );
  }
}

export default RunButton;
