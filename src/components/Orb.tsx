import React from 'react';
import { Col, Image } from 'react-bootstrap';

type myState = { border: boolean }
type myProps = { img: any, onClick: any }

class Orb extends React.Component<myProps, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      border: false
    }
  }

  render () {
    return (
      <Col md={12} {... this.props} className='p-2'>
        <div className='m-auto' style={{width:'60px', height:'60px'}}>
            <Image roundedCircle src={this.props.img} fluid/>
        </div>
      </Col>
    )
  }
}
export default Orb;
