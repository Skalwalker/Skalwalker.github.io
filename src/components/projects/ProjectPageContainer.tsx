import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { ProjectHeader } from './ProjectHeader';
import { TableOfContents } from './TableofContents';
import { ProjectInfo, FooterSectionType } from './types';
import { ProjectFooter } from '../../components';
import { ScrollButton } from '../shared';

import '../../assets/css/font.css';
import '../../assets/css/stickytable.css';
import '../../assets/css/projects.css';

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
  <Container fluid className="project_page">
    <Row className="ms-0 me-0" style={{ marginTop: '80px', marginBottom: '80px' }}>
      <ProjectHeader project={project} />
    </Row>
    <Row className="ms-0 me-0">
      <Col lg={3} md={3} className="d-none d-md-flex">
        <TableOfContents />
      </Col>
      <Col lg={7} md={9} style={{ paddingLeft: '0px' }}>
        {children}
      </Col>
      <Col lg={2} md={0} className="d-none d-lg-flex"></Col>
    </Row>
    <ProjectFooter footer={footer} />
    <ScrollButton />
  </Container>
);
