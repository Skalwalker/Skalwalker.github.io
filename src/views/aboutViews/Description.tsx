import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { desc } from '../../content/About'

class Description extends React.Component {
  render() {
    return (
      <Container className='h-100'>
        <Row className='h-100'>
          <Col md={{span: 11, offset: 1}} className='my-auto'>
            <Row>
              <Col md={4} className='text-center'>
                <Image src={desc.profile_img} style={{height: '200px', width: '200px', backgroundColor: 'white'}} roundedCircle />
              </Col>
              <Col md={8} className='my-auto pr-5'>
                <Row>
                  <Col md={12} style={{color: 'white', fontSize: '20px'}}>
                    <Row className='mb-2'>
                      <Col className='subtitle'>
                        <b>Char Name:  </b>{desc.char_name}<br/>
                      </Col>
                    </Row>
                    <Row className='mb-2'>
                      <Col className='subtitle'>
                      <b >Class: </b>{desc.class}<br/>
                      </Col>
                      <Col className='subtitle'>
                        <b>Alignment:  </b>{desc.alignment}<br/>
                      </Col>
                    </Row>
                    <Row className='mb-2'>
                      <Col className='subtitle'>
                      <b>Birthday:  </b>{desc.birthday}<br/>
                      </Col>
                      <Col className='subtitle'>
                      <b>Homeland:  </b>{desc.homeland}<br/>
                      </Col>

                    </Row>
                    <Row className='mb-2'>
                      <Col className='subtitle'>
                        <b>Race: </b>{desc.race}<br/>
                      </Col>
                      <Col className='subtitle'>
                        <b>Gender: </b>{desc.gender}<br/>
                      </Col>
                      <Col className='subtitle'>
                        <b>Hair: </b>{desc.hair}<br/>
                      </Col>
                      <Col className='subtitle'>
                        <b>Eyes: </b>{desc.eyes}<br/>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={12} className='mt-5'>
                <p className='subtitle' style={{color: 'white', fontSize: '18px'}}>
                  {desc.text}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Description;

