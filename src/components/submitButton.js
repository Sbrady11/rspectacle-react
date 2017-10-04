import React from 'react';

class SubmitButton extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        label: 'SUBMIT'
        }      
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buttonName = this.buttonName.bind(this);
    }
        // event handler function
        // Button onClick event
    handleSubmit(event) {
        event.preventDefault();
        const { onSubmit, content } = this.props;
        onSubmit(content);
    }

    buttonName() {
        this.setState({label: 'SUBMITTED'});
    }

    render() {
        return ( 
            <button onClick = { this.handleSubmit, this.buttonName } > {this.state.label} < /button>
        )
    }
}

export default SubmitButton;