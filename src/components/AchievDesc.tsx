import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

type MyProps = { desc: string, title: string, date:string };
type MyState = { };

class AchievDesc extends React.Component<MyProps, MyState> {
  render () {
    return (
      <Container fluid style={{color: '#FFFFFF'}}>
      <Row>
        <Col md={8}>
          <h1 className="text-left">{this.props.title}</h1>
        </Col>
        <Col md={4} className='my-auto'>
          <h5 className="text-right">{this.props.date}</h5>
        </Col>
      </Row>
      <Row className="text-left">
        <Col md={12}>
          <p>{this.props.desc}</p>
        </Col>
      </Row>
      <Row>
        <Image></Image>
      </Row>
      </Container>
    )
  }
}
export default AchievDesc;
