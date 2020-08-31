import React from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import Popover from 'react-tiny-popover'

type MyProps = { };
type MyState = { isPopoverOpen: boolean };

class Likes extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isPopoverOpen: false
    };
  }

  setIsPopoverOpen = (value: any) => {
    this.setState({ isPopoverOpen: value})
  }

  render() {
    const squareRows = [];
    const numbRows = 4;

    for (var i = 0; i < numbRows; i++) {
      squareRows.push(<Row className='mb-5'>
        <Col md={1} className='mr-5 ml-5'>
          <Popover
            isOpen={this.state.isPopoverOpen}
            position={'top'} // preferred position
            content={<div>Hi! I'm popover content.</div>}
          >
            <div onMouseEnter={() => this.setIsPopoverOpen(1)} className='m-auto' style={{height: '70px', width: '70px', backgroundColor: 'gray'}}></div>
          </Popover>
        </Col>
        <Col md={1} className='mr-5'>
          <div className='m-auto' style={{height: '70px', width: '70px', backgroundColor: 'gray'}}></div>
        </Col>
        <Col md={1} className='mr-5'>
          <div className='m-auto' style={{height: '70px', width: '70px', backgroundColor: 'gray'}}></div>
        </Col>
        <Col md={1} className='mr-5'>
          <div className='m-auto' style={{height: '70px', width: '70px', backgroundColor: 'gray'}}></div>
        </Col>
        <Col md={1} className='mr-5'>
          <div className='m-auto' style={{height: '70px', width: '70px', backgroundColor: 'gray'}}></div>
        </Col>
        <Col md={1} className='mr-5'>
          <div className='m-auto' style={{height: '70px', width: '70px', backgroundColor: 'gray'}}></div>
        </Col>
      </Row>)
    }

    return (
      <Container className='h-100'>
        <Row className='h-100'>
          <Col md={12} className='my-auto'>
            <Row className=''>
              <Col md={{span:11, offset:1}}>
                {squareRows}
              </Col>
              <Col md={12} className='text-center'><h1 style={{color: 'white'}}>I Like ...</h1></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Likes;

