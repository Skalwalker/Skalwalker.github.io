import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from "../../assets/images/raskalkhan.png"
import { core } from "../../content/About"

class Core extends React.Component {
  render() {
    return (
      <Container className='h-100'>
        <Row className='h-100'>
          <Col md={12} className='my-auto'>
            <Row>
              <Col md={5} className='text-center'>
                <img src={image} className='img-fluid' style={{width: '350px', height:' 350px'}} />
              </Col>
              <Col md={7} className='my-auto pr-5'>
                <Row>
                  <Col md={12}>
                    <p style={{color: 'white', fontSize: '20px'}}>
                      {core.text}
                    </p>
                  </Col>
                  <Col md={12} className=''>
                    <a><div className='d-inline-block float-right ml-2' style={{height: '40px', width: '40px', background: 'gray'}}></div></a>
                    <a><div className='d-inline-block float-right ml-2' style={{height: '40px', width: '40px', background: 'gray'}}></div></a>
                    <a><div className='d-inline-block float-right ml-2' style={{height: '40px', width: '40px', background: 'gray'}}></div></a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Core;

