import '../assets/css/sidebar.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Backgroud from '../components/Backgroud';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { aboutRoutes } from '../routes'

class About extends React.Component {
  render() {
    return (
      <Backgroud>
        <Container fluid>
          <Row>
            <Col xs={3} id="sidebar-wrapper">
              <Nav className="d-none d-md-block bg-light sidebar">
                <div className="vertical">
                  <Nav.Item className = 'nav-item-custom'>
                      <Nav.Link href="/about/core">Core</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className = 'nav-item-custom'>
                      <Nav.Link href="/about/work">Work</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className = 'nav-item-custom'>
                      <Nav.Link href="/about/likes">Likes</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className = 'nav-item-custom'>
                      <Nav.Link href="/about/description">Description</Nav.Link>
                  </Nav.Item>
                </div>
              </Nav>
            </Col>
            <Col xs={9} id="page-content-wrapper">
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
      </Backgroud>
    )
  }
}
export default About;

