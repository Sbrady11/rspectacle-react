import React from 'react';

class CodeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeInput: '',
    }
  }
  handleCodeInputOnSubmit(event) {
    console.log(event)
    this.setState({
      codeInput: event.target.value;
    })
  }


  render(){
    return(
      <input
        onKeyPress={ (event) => this.handleCodeInputKeyPress(event) }
        value={ this.state.codeInput }
        onSubmit={ (event) => this.handleCodeInputOnSubmit(event) }
        type='text'
        placeholder='Enter your code...'
        className='code-input' />
    )
  }
}

export default CodeInput;