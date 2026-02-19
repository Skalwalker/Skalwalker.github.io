import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { AboutMenu } from '../components';
import { AboutRouter } from '../routes';
import '../assets/css/about.css';

export const About = (): React.JSX.Element => {
  return (
    <Container className="h-100 about_view" style={{ height: '92vh' }} fluid>
      <Row>
        <Col xl={2} lg={3} md={12} className="my-auto h-100 border-lg-end">
          <AboutMenu />
        </Col>
        <Col
          xl={8}
          lg={9}
          md={12}
          className="mx-auto mt-5 mt-lg-0 pb-5 pb-lg-0 my-lg-auto ps-0 pe-0"
        >
          <AboutRouter />
        </Col>
      </Row>
    </Container>
  );
};
