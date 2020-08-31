import React, {useState} from 'react';
import '../assets/css/sidebar.css';
import Background from '../components/Background'
import AchievCard from '../components/AchievCard'
import AchievDesc from '../components/AchievDesc'
import { Col, Row, Container } from 'react-bootstrap';
// Nav, Container, Row,

// const [isShown, setIsShown] = useState(false);

class Acheiv extends React.Component {
  render() {
    return (
      <Background>
            <Row>
              <Col md={3} id="sidebar" className="text-center">
                {/* {isShown && (
                  <AchievDesc/>
                )}
                {isShown == false && (
                  <h2 style={{margin:'10px', position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -40%)', fontSize:'40px', color: '#FFFFFF'}}>Hover over an Achievement to show description</h2>
                )} */}
              </Col>
              <Col md={9} id="page-content-wrapper" className="rp-0">
                <Container style={{margin:'10px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                  <Row>
                    <Col xl={4}>
                      {/* onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}*/}
                      <AchievCard title="OIE" date="MATE"/>
                    </Col>
                    <Col xl={4}><AchievCard/></Col>
                    <Col xl={4}><AchievCard/></Col>
                  </Row>
                  <Row>
                    <Col xl={4}><AchievCard/></Col>
                    <Col xl={4}><AchievCard/></Col>
                    <Col xl={4}><AchievCard/></Col>
                  </Row>
                  <Row>
                    <Col xl={4}><AchievCard/></Col>
                    <Col xl={4}><AchievCard/></Col>
                    <Col xl={4}><AchievCard/></Col>
                  </Row>
                  <Row>
                    <Col xl={4}><AchievCard/></Col>
                    <Col xl={4}><AchievCard/></Col>
                    <Col xl={4}><AchievCard/></Col>
                  </Row>
                  <Row>
                    <Col xl={4}><AchievCard/></Col>
                    <Col xl={4}><AchievCard/></Col>
                    <Col xl={4}><AchievCard/></Col>
                  </Row>
                  <Row>
                    <Col xl={4}><AchievCard/></Col>
                    <Col xl={4}><AchievCard/></Col>
                    <Col xl={4}><AchievCard/></Col>
                  </Row>
                </Container>
              </Col>
            </Row>
      </Background>
    )
  }
}

export default Acheiv;
