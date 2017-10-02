import React from 'react';

class ConsoleOutput extends React.Component {
  render() {
    const { testResult } = this.props
    return (
      <div style={{ backgroundColor: "pink", margin: "1em" }}>
        <p> CONSOLE OUTPUT </p>
        <p>{ testResult }</p>
      </div>
    );
  }
}

export default ConsoleOutput;
