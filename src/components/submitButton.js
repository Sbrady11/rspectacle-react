import React from 'react';

class SubmitButton extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        submissionStatus: 'SUMBIT'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    }
        // event handler function
        // Button onClick event
    handleSubmit(event) {
        debugger;
        event.preventDefault();
        this.changeButtonValue();
        // const { onSubmit, content, buttonStatus } = this.props;
        // onSubmit(content);
    }

    changeButtonValue() {
        const { runStatus } = this.props;
        if (runStatus){
            this.setState({
                submissionStatus: 'SUBMIT'
            });
        } else {
            this.setState({
                submissionStatus: 'SUBMITTED'
            });
        }
    }
    render() {
        let submissionStatus;
        if (!runStatus){
            submissionStatus = 'SUBMIT';
        } else {
            submissionStatus = 'SUBMIT';
        }
        const { runStatus } = this.props
        return ( 
         <button onClick = {this.handleSubmit}> { this.state.submissionStatus } < /button>
        )
    }
}

export default SubmitButton;