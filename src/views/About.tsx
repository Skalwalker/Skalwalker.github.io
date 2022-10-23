import '../assets/css/sidebar.css';
import React from 'react';
import AboutMenu from '../components/AboutMenu'
import {
  Switch,
  Route
} from "react-router-dom";
import Background from '../components/Background';
import { Container, Row, Col } from 'react-bootstrap';
import { aboutRoutes } from '../routes'



class About extends React.Component {
  render() {
    return (
      <Background>
        <Container style={{height: "92vh"}} fluid>
          <Row className='h-100'>
            <Col lg={2}  className='my-auto'>
              <AboutMenu/>
            </Col>
            <Col lg={10} >
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

