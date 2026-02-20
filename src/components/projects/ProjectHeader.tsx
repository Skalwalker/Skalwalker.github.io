import React from 'react';
import { Col, Row, Button, Image } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import styled from 'styled-components';

import { ProjectInfo } from './types';
import {
  BottomProjectText,
  TopProjectText,
  FontText,
  FontText2,
  Paragraph,
} from '../../styles/primitives';

interface ProjectHeaderProps {
  project: ProjectInfo;
}

export const ProjectHeader = ({ project }: ProjectHeaderProps): React.JSX.Element => (
  <>
    <Col xl={8} md={7} className="my-auto ps-0">
      <Row className="ms-0 ps-0">
        <BottomProjectText>
          <ProjectTitleText as="h1">{project.title}</ProjectTitleText>
          <TopProjectText>
            <ProjectTitleText2 as="h1">{project.title}</ProjectTitleText2>
          </TopProjectText>
        </BottomProjectText>
      </Row>
      <Row className="ms-0 ps-0 my-auto">
        <ProjectAbstract>{project.abstract}</ProjectAbstract>
      </Row>
      <Row className="ms-0 ps-0">
        <p>
          <SkillsLabel>Skills: </SkillsLabel>
          {project.skills}
        </p>
      </Row>
      <Row className="ms-0 ps-0 mt-3">
        <div>
          {project.codeUrl && (
            <a target="_blank" rel="noopener noreferrer" href={project.codeUrl}>
              <Button size="sm" className="me-3" variant="outline-primary">
                View Code
                <FaGithub color="#60D7F9" className="float-start me-2" size="25"></FaGithub>
              </Button>
            </a>
          )}
          {project.paperUrl && (
            <a target="_blank" rel="noopener noreferrer" href={project.paperUrl}>
              <Button size="sm" className="me-3" variant="outline-primary">
                Read Paper
                <IoIosPaper color="#60D7F9" className="float-start me-2" size="25"></IoIosPaper>
              </Button>
            </a>
          )}
        </div>
      </Row>
    </Col>
    <Col className="ps-2 pe-2 ps-md-5 pe-md-0 my-auto mt-5 mt-xl-0" xl={4} md={5}>
      <ProjectBannerImage className="w-100" src={project.banner} />
    </Col>
  </>
);

const ProjectTitleText = styled(FontText)`
  color: var(--bs-primary);
  font-size: 50px;
`;

const ProjectTitleText2 = styled(FontText2)`
  color: var(--bs-primary);
  font-size: 50px;
`;

const ProjectAbstract = styled(Paragraph)`
  font-size: 16px;
  color: white;
  height: 100%;
  line-height: 1.6;
`;

const SkillsLabel = styled.b`
  color: var(--bs-primary);
`;

const ProjectBannerImage = styled(Image)`
  border-radius: 20px;
  border-width: 5px;
  border: solid;
  border-color: var(--bs-primary);
`;
