import React from 'react';
import { Col } from 'react-bootstrap';

type myState = { }
type myProps = { }

class ILike extends React.Component<myProps, myState> {
  render () {
    return (
      <Col md={1} {...this.props} className='mr-5'>
        <div className='m-auto' style={{height: '70px', width: '70px', backgroundColor: 'gray'}}>
        </div>
      </Col>
    )
  }
}
export default ILike;