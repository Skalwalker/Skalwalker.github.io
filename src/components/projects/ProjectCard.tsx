import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router';

import { ProjectCardInfo } from './types';
import { StyledCard } from '../../components';
import { SubtitleBold, Subtitle, Paragraph } from '../../styles/primitives';

const ProjectCardContent = ({ project }: { project: ProjectCardInfo }): React.JSX.Element => (
  <StyledCard
    className="ms-auto me-auto click_cards"
    style={{ minWidth: '15rem', maxWidth: '18rem', height: '100%' }}
  >
    <Card.Img variant="top" src={project.banner} style={{ borderRadius: '15px 15px 0 0' }} />
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
          <Subtitle as="p" style={{ textAlign: 'left', margin: '0' }}>
            {project.language}
          </Subtitle>
        </Col>
        <Col>
          <Subtitle as="p" style={{ textAlign: 'right', margin: '0' }}>
            {project.year}
          </Subtitle>
        </Col>
      </Row>
    </Card.Footer>
  </StyledCard>
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
