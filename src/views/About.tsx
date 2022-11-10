import '../assets/css/sidebar.css';
import React from 'react';
import AboutMenu from '../components/about/AboutMenu'
import Background from '../components/shared/Background';
import { Container, Row, Col } from 'react-bootstrap';
import { AboutRouter } from '../routes'


class About extends React.Component {
  render() {
    return (
      <Background>
        <Container className="ps-5 pe-5 h-100" style={{height: "92vh", paddingLeft: '70px', paddingRight:'70px'}} fluid>
          <Row className='h-100'>
            <Col xl={2} lg={3} md={12} className='my-auto h-100'>
              <AboutMenu/>
            </Col>
            <Col xl={10} lg={9} md={12} className='mt-5 mt-lg-0 pb-5 pb-lg-0 my-lg-auto ps-0 pe-0'>
              <AboutRouter/>
            </Col>
          </Row>
        </Container>
      </Background>
    )
  }
}
export default About;

