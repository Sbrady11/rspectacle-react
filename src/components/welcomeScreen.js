import React from 'react';
import SkyLight from 'react-skylight';

class WelcomeScreen extends React.Component {
  render() {
    return (
      <div>
        <section>
          <button onClick={() => this.simpleDialog.show()}>ABOUT</button>
        </section>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Welcome to Rspectacle!">
          Using Rails` ActionCable and ReactJS, you can write and test Ruby Code between more than one user in real time!              

          Grab a pal, write some rspec tests, and learn to love TDD<br></br>
        </SkyLight>
      </div>
    );
  }
}


export default WelcomeScreen;