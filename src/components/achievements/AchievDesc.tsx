import React from 'react';
import { Row, Image } from 'react-bootstrap';

interface MyProps { desc: string; title: string; date: string }
interface MyState {}

class AchievDesc extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div className="my-auto">
        <Row>
          <h1 className="text-start subtitle_bold mb-3" style={{ fontSize: '32px' }}>
            {this.props.title}
          </h1>
        </Row>
        <Row className="text-start">
          <p className="paragraph">{this.props.desc}</p>
        </Row>
        <Row>
          <Image></Image>
        </Row>
      </div>
    );
  }
}
export default AchievDesc;
