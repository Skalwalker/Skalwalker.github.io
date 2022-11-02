import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

type MyProps = { desc: string, title: string, date:string };
type MyState = { };

class AchievDesc extends React.Component<MyProps, MyState> {
  render () {
    return (
      <Container>
      <Row>
        <Col>
          <h1 className="text-left subtitle_bold mb-3" style={{fontSize: '32px'}}>{this.props.title}</h1>
        </Col>
      </Row>
      <Row className="text-left">
        <Col md={12}>
          <p className="paragraph">{this.props.desc}</p>
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
