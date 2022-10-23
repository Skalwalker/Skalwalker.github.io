import '../assets/css/sidebar.css';
import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Background from '../components/Background';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
import { desc } from '../content/About'
import { aboutRoutes } from '../routes'

import { HiCubeTransparent } from 'react-icons/hi';
import { GiBookmark, GiCutDiamond } from 'react-icons/gi';

class About extends React.Component {
  render() {
    return (
      <Background>
        <Container style={{height: "92vh"}} fluid>
          <Row className='h-100'>
            <Col md={3}  className='my-auto'>
              <Row>
                <Col lg={11} style={{marginTop: '20px', marginBottom: '20px'}}>
                  <Row>
                    <Image src={desc.profile_img} className="ml-auto mr-auto block" style={{height: '150px', width: '150px', backgroundColor: 'white'}} roundedCircle />
                  </Row>
                  <Row>
                    <p>M.Sc. Student at Università degli Studi di Milano</p>
                  </Row>
                  <Row>
                    <p>Volunteer at Tree-Nation</p>
                  </Row>
                  <Row md={12} className='nav-item-custom pb-3'>
                    <Link className='subtitle text-center ml-5' to="/about/core">
                      <HiCubeTransparent className='mr-3 mb-2' size={40} />Core
                    </Link>
                  </Row>
                  <Row md={12} className='nav-item-custom pb-3' >
                    <Link className='subtitle text-center ml-5' to="/about/description">
                      <GiBookmark className='mr-3 mb-2' size={40}/>Skills
                    </Link>
                  </Row>
                  <Row md={12} className='nav-item-custom pb-3' style={{alignSelf: 'right'}}>
                    <Link className='subtitle ml-5' style={{textAlign: 'right'}} to="/about/likes">
                      <GiCutDiamond className='mr-3 mb-2' size={40} />Likes
                    </Link>
                  </Row>
                </Col>
                <Col lg={1} style={{height: '35rem', borderRight: '2px solid white', maxWidth: '2px', padding: '0'}}></Col>
              </Row>
            </Col>
            <Col lg={9} >
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

