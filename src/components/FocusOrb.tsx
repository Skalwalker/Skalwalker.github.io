import React from 'react';

import '../assets/css/font.css'
import { Col, Row } from 'react-bootstrap';

type myState = { }
type myProps = { title: any, text: any }

class Orb extends React.Component<myProps, myState> {

  render () {
    return (
      <Row className='h-100'>
      <Col md={12} className='text-center'>
        <h1 className='subtitle_bold' style={{color: 'white'}}>
          {this.props.title}
        </h1>
      </Col>
        <Row  className='my-auto'>
          <Col md={12}>
            <p className='paragraph' style={{color: 'white', fontSize: '20px'}}>
              {this.props.text}
            </p>
          </Col>
        </Row>
      </Row>
    )
  }
}
export default Orb;
