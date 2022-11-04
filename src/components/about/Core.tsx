import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { core } from "../../content/About";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import '../../assets/css/about.css'

class Core extends React.Component {
  render() {
    return (
      <Container className='h-100'>
        <Row className='h-100'>
          <Col className='my-auto about_core_style'>
            <Row>
              <Col md={12}>
                <p className='paragraph' style={{fontSize: '20px'}}>
                  {core.text}
                </p>
              </Col>
              <Col md={12} className=''>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rk_nobre/">
                  <FaInstagram color="#60D7F9" className='d-inline-block float-right ml-2' size="40"></FaInstagram>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rk-nobre/">
                  <FaLinkedin color="#60D7F9" className='d-inline-block float-right ml-2' size="40"></FaLinkedin>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Skalwalker">
                  <FaGithub color="#60D7F9" className='d-inline-block float-right ml-2' size="40"></FaGithub>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="mailto: rekanobre@gmail.com">
                  <GrMail color="#60D7F9" className='d-inline-block float-right ml-2' size="40"></GrMail>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Core;

