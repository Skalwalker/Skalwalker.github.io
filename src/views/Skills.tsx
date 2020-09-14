import React from 'react';
import Background from '../components/Background'
import { Col, Row, Container } from 'react-bootstrap';
import Canvas from '../components/CanvasTest';
//  Nav, Container, Row,

class Skill extends React.Component {
  render() {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <Canvas />
      </div>
    )
  }
}

export default Skill;
