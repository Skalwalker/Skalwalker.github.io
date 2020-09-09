import React from 'react';
import Background from '../components/Background'
import { Col, Row, Container } from 'react-bootstrap';
import Canvas from '../components/Canvas';
//  Nav, Container, Row,

class Skill extends React.Component {
  render() {
    return (
      <Container className='h-100'>
        <Row className='h-100'>
          <Col xs={12}>
            <Canvas />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Skill;
