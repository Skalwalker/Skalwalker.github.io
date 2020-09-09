import React from 'react';
import Background from '../components/Background'
import { Col, Container, Row } from 'react-bootstrap';
// Nav, Container, Row,

class Experience extends React.Component {
  render() {
    return (
    <Background>
        <Container fluid style={{height: '92vh'}}>
          <Row style={{height: '15vh'}}>
            <Col md={3} className="my-auto">
              <h1 style={{color: 'white'}}>Extra <br />Activities</h1>
            </Col>
          </Row>
          <Row style={{height: '30vh'}}>
            <Col md={{span: 1, offset: 2}}>
              <div className='d-flex' style={{height: '70px', width: '70px', borderRadius: '35px', backgroundColor: 'white', margin: 'auto', marginTop: '70px', color: 'black', fontSize: '20px'}}>
                <div className='my-auto mx-auto'>
                  1650
                </div>
              </div>
              <div style={{height: '50%', width: '20%', backgroundColor: 'white',margin: 'auto'}}></div>
            </Col>
            <Col md={{span: 1, offset: 4}}>
              <div style={{height: '70px', width: '70px', borderRadius: '35px', backgroundColor: 'white', margin: 'auto', marginTop: '70px'}}>
                <div className='d-flex' style={{height: '70px', width: '70px', borderRadius: '35px', backgroundColor: 'white', margin: 'auto', marginTop: '70px', color: 'black', fontSize: '20px'}}>
                  <div className='my-auto mx-auto'>
                    1650
                  </div>
                </div>
              </div>
              <div style={{height: '50%', width: '20%', backgroundColor: 'white',margin: 'auto'}}></div>
            </Col>
          </Row>
          <Row style={{height: '2vh', backgroundColor: 'white'}}>
            <Col xs={12}>
            </Col>
          </Row>
          <Row style={{height: '30vh'}}>
            <Col md={{span: 1, offset: 4}}>
              <div style={{height: '50%', width: '20%', backgroundColor: 'white',margin: 'auto'}}></div>
              <div className='d-flex flex-column' style={{height: '70px', width: '70px', borderRadius: '35px', backgroundColor: 'white', margin: 'auto', color: 'black', fontSize: '20px'}}>
                <div className='my-auto mx-auto'>
                  1650
                </div>
              </div>
            </Col>
            <Col className='' md={{span: 1, offset: 5}}>
              <div style={{height: '50%', width: '20%', backgroundColor: 'white',margin: 'auto'}}></div>
              <div className='d-flex' style={{height: '70px', width: '70px', borderRadius: '35px', backgroundColor: 'white', margin: 'auto', color: 'black', fontSize: '20px'}}>
                <div className='my-auto mx-auto'>
                  1650
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{height: '15vh'}}>
            <Col md={3} className="my-auto">
              <h1 style={{color: 'white'}}>Professional <br /> & Education</h1>
            </Col>
          </Row>
        </Container>
    </Background>
    )
  }
}

export default Experience;
