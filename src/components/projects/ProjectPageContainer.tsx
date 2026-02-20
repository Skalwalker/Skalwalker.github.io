import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

import { ProjectHeader } from './ProjectHeader';
import { TableOfContents } from './TableofContents';
import { ProjectInfo, FooterSectionType } from './types';
import { ProjectFooter } from '../../components';
import { ScrollButton } from '../shared';

interface ProjectPageContainerProps {
  project: ProjectInfo;
  children: React.ReactNode;
  footer: FooterSectionType[];
}

export const ProjectPageContainer = ({
  project,
  children,
  footer,
}: ProjectPageContainerProps): React.JSX.Element => (
  <ProjectPageWrapper fluid>
    <HeaderRow className="ms-0 me-0">
      <ProjectHeader project={project} />
    </HeaderRow>
    <Row className="ms-0 me-0">
      <Col lg={3} md={3} className="d-none d-md-flex">
        <TableOfContents />
      </Col>
      <Col lg={7} md={9} className="ps-0">
        {children}
      </Col>
      <Col lg={2} md={0} className="d-none d-lg-flex"></Col>
    </Row>
    <ProjectFooter footer={footer} />
    <ScrollButton />
  </ProjectPageWrapper>
);

const HeaderRow = styled(Row)`
  margin-top: 80px;
  margin-bottom: 80px;
`;

const ProjectPageWrapper = styled(Container)`
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 576px) {
    padding-left: 70px;
    padding-right: 70px;
  }

  h2,
  h3 {
    scroll-margin-top: 16px;
    font-family: filson-pro, sans-serif;
    font-weight: 100;
    font-style: normal;
  }

  p {
    font-family: objektiv-mk1, sans-serif;
    font-weight: 200;
    font-style: normal;
  }
`;
