import React from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import Popover from 'react-tiny-popover'

type MyProps = { };
type MyState = { isShown: boolean };

class Likes extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isShown: false
    };
  }

  setIsShown = (value: boolean) => {
    this.setState({isShown:value})
  }


  render() {
    const squareRows = [];
    const numbRows = 4;

    for (var i = 0; i < numbRows; i++) {
      squareRows.push(<Row className='mb-5'>
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

