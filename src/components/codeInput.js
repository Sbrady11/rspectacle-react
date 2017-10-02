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
    // this.setState({
    //   // codeInput: event.target.value;
    // })
  }


  render(){
    return(
      <div className={ this.props.class } style={{ backgroundColor: "orange", margin: "1em" }}>
        <p>{ this.props.class }</p>
        <textarea
          type='text'
          id='rspec-code-input'
          placeholder='Enter your Rspec code...'
          className='test-code-input'>
        </textarea>
      </div>
    )
  }
}

export default CodeInput;

{/* <input
  onKeyPress={ (event) => this.handleCodeInputKeyPress(event) }
  value={ this.state.codeInput }
  onSubmit={ (event) => this.handleCodeInputOnSubmit(event) }
  type='text'
  placeholder='Enter your code...'
  className='code-input' /> */}
