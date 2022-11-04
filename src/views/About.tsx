import '../assets/css/sidebar.css';
import React from 'react';
import AboutMenu from '../components/about/AboutMenu'
import {
  Switch,
  Route
} from "react-router-dom";
import Background from '../components/shared/Background';
import { Container, Row, Col } from 'react-bootstrap';
import { aboutRoutes } from '../routes'



class About extends React.Component {
  render() {
    return (
      <Background>
        <Container className="pl-5 pr-5" style={{height: "92vh", paddingLeft: '70px', paddingRight:'70px'}} fluid>
          <Row className='h-100'>
            <Col xl={2} lg={3} md={12} className='my-auto'>
              <AboutMenu/>
            </Col>
            <Col xl={10} lg={9} md={12} className='mt-5 pl-0 pr-0 pb-5'>
              <Switch>
                {aboutRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    children={<route.main/>}
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

