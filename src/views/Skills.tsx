import React from 'react';
import Canvas from '../components/CanvasTest';
import Background from '../components/Background'

class Skill extends React.Component {
  render() {
    return (
      <Background>
        <div id="canvas" style={{height: '100%', width: '100%'}}>
          <Canvas />
        </div>
      </Background>
    )
  }
}

export default Skill;
