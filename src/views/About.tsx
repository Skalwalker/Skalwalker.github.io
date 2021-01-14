import '../assets/css/sidebar.css';
import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Background from '../components/Background';
import { Container, Row, Col } from 'react-bootstrap';
import { aboutRoutes } from '../routes'
import { FaVuejs } from 'react-icons/fa';

class About extends React.Component {
  render() {
    return (
      <Background>
        <Container style={{height: "92vh"}} fluid>
          <Row className='h-100'>
            <Col md={3} className='my-auto'>
              <Row>
                  <Col md={12} style={{ height: '5rem', borderRight: '3px solid white'}}/>
                  <Col md={12} className='nav-item-custom pb-3' style={{borderRight: '3px solid white'}}>
                    <Link className='subtitle text-center ml-5' to="/about/core">
                      <FaVuejs className='mr-3' size={35} />Core
                    </Link>
                  </Col>
                  <Col md={12} className='nav-item-custom pb-3' style={{borderRight: '3px solid white'}}>
                    <Link className='subtitle text-center ml-5' to="/about/work">
                      <FaVuejs className='mr-3' size={35} />Work
                    </Link>
                  </Col>
                  <Col md={12} className='nav-item-custom pb-3' style={{borderRight: '3px solid white'}}>
                    <Link className='subtitle text-center ml-5' to="/about/likes">
                      <FaVuejs className='mr-3' size={35} />Likes
                    </Link>
                  </Col>
                  <Col md={12} className='nav-item-custom pb-3' style={{borderRight: '3px solid white', width: '25%'}}>
                    <Link className='subtitle text-center ml-5' to="/about/description">
                      <FaVuejs className='mr-3' size={35} />Description
                    </Link>
                  </Col>
                  <Col md={12} style={{ height: '5rem', borderRight: '3px solid white'}}/>
              </Row>
            </Col>
            <Col xs={9} >
              <Switch>
                {aboutRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </Col>
          </Row>
        </Container>
      </Background>
    )
  }
}
export default About;

