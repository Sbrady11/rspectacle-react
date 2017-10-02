import React from 'react';

class CodeInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className={ this.props.class } style={{ backgroundColor: "orange", margin: "1em" }}>
        <p>{ this.props.class }</p>
        <textarea
          type='text'
          id='rspec-code-input'
          placeholder={ this.props.placholder }
          className='test-code-input'>
        </textarea>
      </div>
    )
  }
}

export default CodeInput;
