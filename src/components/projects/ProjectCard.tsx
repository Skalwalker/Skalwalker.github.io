import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router';

import { ProjectCardInfo } from './types';
import { StyledCard } from '../../components/shared/StyledCard';

const ProjectCardContent = ({ project }: { project: ProjectCardInfo }): React.JSX.Element => (
  <StyledCard
    className="ms-auto me-auto click_cards"
    style={{ minWidth: '15rem', maxWidth: '18rem', height: '100%' }}
  >
    <Card.Img variant="top" src={project.banner} style={{ borderRadius: '15px 15px 0 0' }} />
    <Card.Body>
      <Card.Title className="subtitle-bold mb-1">{project.title}</Card.Title>
      <Card.Text className="paragraph">{project.headline}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Row>
        <Col>
          <p className="subtitle" style={{ textAlign: 'left', margin: '0' }}>
            {project.language}
          </p>
        </Col>
        <Col>
          <p className="subtitle" style={{ textAlign: 'right', margin: '0' }}>
            {project.year}
          </p>
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
