import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { coreContent } from '../../content/About';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import '../../assets/css/about.css';

export const Core = (): React.JSX.Element => {
  return (
    <Row style={{ height: '92vh' }}>
      <Col className="my-auto about_core_style">
        <Row>
          <Col md={12}>
            <p className="paragraph" style={{ fontSize: '20px' }}>
              {coreContent.coreText}
            </p>
          </Col>
          <Col md={12} className="">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rk_nobre/">
              <FaInstagram
                color="#60D7F9"
                className="d-inline-block float-end ms-2"
                size="40"
              ></FaInstagram>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rk-nobre/"
            >
              <FaLinkedin
                color="#60D7F9"
                className="d-inline-block float-end ms-2"
                size="40"
              ></FaLinkedin>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Skalwalker">
              <FaGithub
                color="#60D7F9"
                className="d-inline-block float-end ms-2"
                size="40"
              ></FaGithub>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto: rekanobre@gmail.com">
              <GrMail color="#60D7F9" className="d-inline-block float-end ms-2" size="40"></GrMail>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
