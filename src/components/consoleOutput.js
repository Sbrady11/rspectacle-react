import React from 'react';

class ConsoleOutput extends React.Component {
  render() {
    const { testResult } = this.props
    debugger;
    return (
      <div className='consoleOutput' >
        <p>> CONSOLE OUTPUT </p>
        <p>{ testResult }</p>
      </div>
    );
  }
}

export default ConsoleOutput;
