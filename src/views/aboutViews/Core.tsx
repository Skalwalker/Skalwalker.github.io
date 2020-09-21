import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from "../../assets/images/raskalkhan.png"
import { core } from "../../content/About"
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'


class Core extends React.Component {
  render() {
    return (
      <Container className='h-100'>
        <Row className='h-100'>
          <Col md={12} className='my-auto'>
            <Row>
              <Col md={5} className='text-center'>
                <Image src={image} className='img-fluid'/>
              </Col>
              <Col md={7} className='my-auto pr-5'>
                <Row>
                  <Col md={12}>
                    <p style={{color: 'white', fontSize: '20px'}}>
                      {core.text}
                    </p>
                  </Col>
                  <Col md={12} className=''>
                    <Link to="https://github.com/Skalwalker">
                        <Image src="" className='d-inline-block float-right ml-2' style={{height: '40px', width: '40px'}}/>
                    </Link>
                    <Link to="https://github.com/Skalwalker">
                        <Image src="" className='d-inline-block float-right ml-2' style={{height: '40px', width: '40px'}}/>
                    </Link>
                    <Link to="https://github.com/Skalwalker">
                        <Image src="" className='d-inline-block float-right ml-2' style={{height: '40px', width: '40px'}}/>
                    </Link>
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

