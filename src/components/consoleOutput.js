import React from 'react';

class ConsoleOutput extends React.Component {
  render() {
    const { testResult } = this.props;
    const data = JSON.parse(testResult);
    const { examples, summary, summary_line } = data;
    return (
      <div className='consoleOutput' >
        <p> > CONSOLE OUTPUT </p>
        <p>{ summary_line }</p>
      </div>
    );
  }
}

export default ConsoleOutput;
