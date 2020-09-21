import React from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { desc } from '../../content/About' 

class Description extends React.Component {
  render() {
    return (
      <Container className='h-100'>
        <Row className='h-100'>
          <Col md={{span: 11, offset: 1}} className='my-auto'>
            <Row>
              <Col md={4} className='text-center'>
                <div style={{height: '250px', width: '250px', backgroundColor: 'white', borderRadius:'125px'}}></div>
              </Col>
              <Col md={8} className='my-auto pr-5'>
                <Row>
                  <Col md={12}>
                    <p style={{color: 'white', fontSize: '20px'}}>
                      <b>Char Name: </b>{desc.char_name}<br/>
                      <b>Alignment: </b>{desc.alignment}<br/>
                      <b>Birthday: </b>{desc.birthday}<br/>
                      <b>Homeland: </b>{desc.homeland}<br/>
                      <b>Class: </b>{desc.class}<br/>
                      <b>Race: </b>{desc.race}<br/>
                      <b>Gender: </b>{desc.gender}<br/>
                      <b>Hair: </b>{desc.hair}<br/>
                      <b>Eyes: </b>{desc.eyes}<br/>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={12} className='mt-5'>
                <p style={{color: 'white', fontSize: '20px'}}>
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

