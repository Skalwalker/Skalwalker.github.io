import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { core } from "../../content/About";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ShowTesseract } from "../../components/Tesseract";

class Core extends React.Component {
  render() {
    return (
      <Container className='h-100'>
        <Row className='h-100'>
          <Col md={12} className='my-auto'>
            <Row>
              <Col md={5} className='text-center'>
                <ShowTesseract/>
              </Col>
              <Col md={7} className='my-auto pr-5'>
                <Row>
                  <Col md={12}>
                    <p className='paragraph' style={{color: 'white', fontSize: '20px'}}>
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

                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Core;

