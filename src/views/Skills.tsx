import React from 'react';
import Canvas from '../components/CanvasTest';

class Skill extends React.Component {
  render() {
    return (
      <div id="canvas" style={{height: '100%', width: '100%'}}>
        <Canvas />
      </div>
    )
  }
}

export default Skill;
