import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

import { AboutMenu } from '../components';
import { AboutRouter } from '../routes';

export const About = (): React.JSX.Element => {
  return (
    <AboutViewContainer fluid>
      <Row>
        <BorderLgEndCol lg={3} md={12} className="my-auto h-100">
          <AboutMenu />
        </BorderLgEndCol>
        <Col lg={9} md={12} className="mx-auto mt-5 mt-lg-0 pb-5 pb-lg-0 my-lg-auto ps-0 pe-0">
          <AboutRouter />
        </Col>
      </Row>
    </AboutViewContainer>
  );
};

const AboutViewContainer = styled(Container)`
  height: 92vh;
  padding-left: 30px;
  padding-right: 30px;

  @media (min-width: 576px) {
    padding-left: 70px;
    padding-right: 70px;
  }
`;

const BorderLgEndCol = styled(Col)`
  @media (min-width: 992px) {
    border-right: 2px solid #fff;
  }

  @media (max-width: 991.98px) {
    border-bottom: 2px solid #fff;
    border-right: 0;
  }
`;
