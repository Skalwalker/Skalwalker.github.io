import React from 'react';
import Background from '../components/Background'
import { Col } from 'react-bootstrap';
// Nav, Container, Row,

class Craft extends React.Component {
  render() {
    return (
      <Background>
        <Col xs={12} id="page-content-wrapper"></Col>
      </Background>
    )
  }
}

export default Craft;
