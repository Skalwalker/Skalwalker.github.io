import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Background from '../../components/Background';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { aboutRoutes } from '../../routes'
import image from "../../assets/images/300x300.png"

class Work extends React.Component {
  render() {
    return (
      <Container className='h-100'>
        <Row className='h-100'>
          <Col md={12} className='my-auto'>
            <Row>
              <Col md={2} className='text-center'>
                <Row>
                  <Col md={12} className='p-2'><div className='m-auto' style={{width:'60px', height:'60px', backgroundColor: 'gray', borderRadius: '60px'}}></div></Col>
                  <Col md={12} className='p-2'><div className='m-auto' style={{width:'60px', height:'60px', backgroundColor: 'gray', borderRadius: '60px'}}></div></Col>
                  <Col md={12} className='p-2'><div className='m-auto' style={{width:'60px', height:'60px', backgroundColor: 'gray', borderRadius: '60px'}}></div></Col>
                  <Col md={12} className='p-2'><div className='m-auto' style={{width:'60px', height:'60px', backgroundColor: 'gray', borderRadius: '60px'}}></div></Col>
                  <Col md={12} className='p-2'><div className='m-auto' style={{width:'60px', height:'60px', backgroundColor: 'gray', borderRadius: '60px'}}></div></Col>
                </Row>
              </Col>
              <Col md={{span:8, offset:1}}>
                <Row className='h-100'>
                  <Col md={12} className='text-center'>
                    <h1 style={{color: 'white'}}>
                      Focus Orb
                    </h1>
                  </Col>
                  <Row  className='my-auto'>
                    <Col md={12}>
                      <p style={{color: 'white', fontSize: '20px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, quam vitae dapibus commodo, nisl sapien ornare leo, vel finibus urna est eget ipsum. In hac habitasse platea dictumst. Quisque mauris elit, imperdiet a euismod non, faucibus consectetur est. Ut ac justo mauris. Aliquam erat volutpat.
                      </p>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Work;

