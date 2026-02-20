import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router';
import styled from 'styled-components';

import { ProjectCardInfo } from './types';
import { SubtitleBold, Subtitle, Paragraph, StyledCard } from '../../styles';

const ProjectCardContent = ({ project }: { project: ProjectCardInfo }): React.JSX.Element => (
  <ProjectCardContainer className="ms-auto me-auto click_cards">
    <ProjectCardImage variant="top" src={project.banner} />
    <Card.Body>
      <Card.Title className="mb-1">
        <SubtitleBold as="span">{project.title}</SubtitleBold>
      </Card.Title>
      <Card.Text>
        <Paragraph as="span">{project.headline}</Paragraph>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Row>
        <Col>
          <LeftSubtitle as="p">{project.language}</LeftSubtitle>
        </Col>
        <Col>
          <RightSubtitle as="p">{project.year}</RightSubtitle>
        </Col>
      </Row>
    </Card.Footer>
  </ProjectCardContainer>
);

export const ProjectCard = ({ project }: { project: ProjectCardInfo }): React.JSX.Element => {
  return (
    <>
      {project.target ? (
        <a target={project.target} rel="noopener noreferrer" href={project.url}>
          <ProjectCardContent project={project} />
        </a>
      ) : (
        <Link to={{ pathname: project.url }} target={project.target}>
          <ProjectCardContent project={project} />
        </Link>
      )}
    </>
  );
};

const ProjectCardContainer = styled(StyledCard)`
  min-width: 15rem;
  max-width: 18rem;
  height: 100%;
`;

const ProjectCardImage = styled(Card.Img)`
  border-radius: 15px 15px 0 0;
`;

const LeftSubtitle = styled(Subtitle)`
  text-align: left;
  margin: 0;
`;

const RightSubtitle = styled(Subtitle)`
  text-align: right;
  margin: 0;
`;
