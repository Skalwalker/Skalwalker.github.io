import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

class AchievDesc extends React.Component {
  render () {
    return (
      <Container style={{margin:'10px', position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -40%)', color: '#FFFFFF'}}>
      <Row>
        <Col md={9}>
          <h1 className="text-left">Title</h1>
        </Col>
        <Col md={3}>
          <h5 className="text-right">Date</h5>
        </Col>
      </Row>
      <Row className="text-left" style={{margin:'10px'}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium nunc at eros tincidunt maximus. Proin lacinia felis lobortis, mollis ex et, efficitur ante. Aenean efficitur nisl et justo blandit eleifend. Aliquam convallis egestas dolor, et semper tortor vestibulum eget. Donec tempus nisl ullamcorper, gravida leo eget, condimentum mi. Nulla eu condimentum dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Row>
      <Row>
        <Image></Image>
      </Row>
      </Container>
    )
  }
}
export default AchievDesc;
