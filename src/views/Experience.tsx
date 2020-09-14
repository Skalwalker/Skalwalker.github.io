import React from 'react';
import Background from '../components/Background'
import { Col, Container, Row } from 'react-bootstrap';
import { extra_activ, prof_educ } from '../content/Experience'
import ExtraActivity from '../components/ExtraActivity'
import ProfEdu from '../components/ProfEdu'

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
            {extra_activ.map((extra, index) => {
              if (index+1) {
                return (
                  <ExtraActivity title={extra.title}
                                year={extra.start_year}
                                span={1}
                                offset={0}/>)
              } else {
                return (null)
              }
            })}
          </Row>
          <Row style={{height: '2vh', backgroundColor: 'white'}}>
            <Col xs={12}>
            </Col>
          </Row>
          <Row style={{height: '30vh'}}>
            {prof_educ.map((prof, index) => {
              if (index+1) {
              return (
                <ProfEdu title={prof.title}
                         year={prof.start_year}
                         span={1}
                         offset={0}/>
              )} else {
                return (null)
              }
            })}
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
