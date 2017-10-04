import React from 'react';

class SubmitButton extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        buttonSubmitted: false
        }      
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buttonName = this.buttonName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }
        // event handler function
        // Button onClick event
    handleSubmit(event) {
        event.preventDefault();
        const { onSubmit, content } = this.props;
        onSubmit(content);
    }

    handleClick() {
    this.setState(prevState => ({
      buttonSubmitted: !prevState.buttonSubmitted
    }));
  }

    buttonName() {
        this.setState({label: 'SUBMITTED'});
    }

    render() {
        return ( 
            <button onClick = { this.handleSubmit, this.buttonName, this.handleClick } > {this.state.buttonSubmitted ? 'SUBMITTED' : 'SUBMIT'} < /button>
        )
    }
}

export default SubmitButton;