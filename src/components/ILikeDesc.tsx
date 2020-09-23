import React from 'react';
import { Col } from 'react-bootstrap';

type myState = { }
type myProps = { text: any }

class ILikeDesc extends React.Component<myProps, myState> {
  render () {
    return (
      <Col md={12} className='text-center'><h1 style={{color: 'white'}}>{this.props.text}</h1></Col>
    )
  }
}
export default ILikeDesc;