import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import styled from 'styled-components';

import { coreContent } from '../../content';
import { Paragraph } from '../../styles/primitives';

export const Core = (): React.JSX.Element => {
  return (
    <CoreRow>
      <AboutCoreCol className="my-auto">
        <Row>
          <Col md={12}>
            <CoreParagraph>{coreContent.coreText}</CoreParagraph>
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
      </AboutCoreCol>
    </CoreRow>
  );
};

const CoreRow = styled(Row)`
  height: 92vh;
`;

const CoreParagraph = styled(Paragraph)`
  font-size: 20px;
`;

const AboutCoreCol = styled(Col)`
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 768px) {
    padding-left: 10vw;
    padding-right: 10vw;
  }
`;
