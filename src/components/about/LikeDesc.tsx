import React from 'react';
import { Col } from 'react-bootstrap';

type myState = { }
type myProps = { text: any }

class LikeDesc extends React.Component<myProps, myState> {
  render () {
    return (
      <Col md={12} className='text-center subtitle'><h1>{this.props.text}</h1></Col>
    )
  }
}
export default LikeDesc;
