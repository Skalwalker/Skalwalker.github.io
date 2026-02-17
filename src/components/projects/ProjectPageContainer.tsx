import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import TableofContents from './TableofContents';
import { Background } from '../shared/Background';
import { ProjectHeader } from './ProjectHeader';
import { ProjectFooter } from '../../components/projects/ProjectFooter';
import { ProjectInfo, FooterSectionType } from './types';
import { ScrollButton } from '../shared/ScrollButton';

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
  <Background>
    <Container fluid className="project_page">
      <Row className="ms-0 me-0" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <ProjectHeader project={project} />
      </Row>
      <Row className="ms-0 me-0">
        <Col lg={3} md={3} className="d-none d-md-flex">
          <TableofContents />
        </Col>
        <Col lg={7} md={9} style={{ paddingLeft: '0px' }}>
          {children}
        </Col>
        <Col lg={2} md={0} className="d-none d-lg-flex"></Col>
      </Row>
      <ProjectFooter footer={footer} />
      <ScrollButton />
    </Container>
  </Background>
);
