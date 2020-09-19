import React from 'react';
import { Col } from 'react-bootstrap';

type myState = { }
type myProps = { year: any, title: any, span: any, offset: any }

class ExtraActivity extends React.Component<myProps, myState> {
  render () {
    return (
      <Col md={{span: this.props.span, offset: this.props.offset}} className="overflow-hidden">
        <div className='w-100 text-center'>
          <h6 style={{color: 'white'}}>{this.props.title}</h6>
        </div>
        <div className='d-flex' style={{height: '70px', width: '70px', borderRadius: '35px', backgroundColor: 'white', margin: 'auto', color: 'black', fontSize: '20px'}}>
          <div className='my-auto mx-auto'>
            {this.props.year}
          </div>
        </div>
        <div style={{height: '100%', width: '20%', backgroundColor: 'white',margin: 'auto', bottom: '0'}}></div>
      </Col>
    )
  }
}
export default ExtraActivity;
