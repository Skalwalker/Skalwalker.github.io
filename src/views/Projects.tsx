import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';

import { ProjectCard, ProjectData, ScrollButton } from '../components';
import { projectContent } from '../content';
import { useTagFilter } from '../hooks';

import '../assets/css/font.css';

const FeaturedProjects: React.FC<{ projects: ProjectData[] }> = ({ projects }) => (
  <Row>
    {projects.map((project) => (
      <Col key={project.title} xl={3} lg={6} sm={6} style={{ padding: '10px' }}>
        <ProjectCard project={project} />
      </Col>
    ))}
  </Row>
);

const TagFilterBar: React.FC<{
  tags: string[];
  isTagActive: (tag: string) => boolean;
  onToggle: (tag: string) => void;
}> = ({ tags, isTagActive, onToggle }) => (
  <Row>
    <Col xl={4}>
      <h1 className="subtitle">Newest</h1>
    </Col>
    {tags.map((name) => (
      <Col xl={2} key={name} style={{ paddingTop: '12px' }} className="d-grid mb-2">
        <Button
          onClick={() => {
            onToggle(name);
          }}
          className="paragraph"
          variant={isTagActive(name) ? 'light' : 'outline-light'}
          size="sm"
        >
          {name}
        </Button>
      </Col>
    ))}
    <div className="w-100 mt-2 mb-2" style={{ backgroundColor: 'white', height: '3px' }} />
  </Row>
);

const ProjectGrid: React.FC<{ projects: ProjectData[] }> = ({ projects }) => (
  <Row>
    {projects.map((p) => (
      <Col key={p.title} xl={3} lg={6} sm={6} style={{ paddingTop: '15px', paddingBottom: '15px' }}>
        <ProjectCard project={p} />
      </Col>
    ))}
  </Row>
);

export const Projects: React.FC = () => {
  const { toggleTag, isTagActive, matchesTags } = useTagFilter();

  const projectList = Object.values(projectContent.projects);
  const featured = projectList.filter((p) => p.highlight);
  const filtered = projectList.filter((p) => !p.highlight && matchesTags(p.tags));

  return (
    <Container className="p-5" style={{ padding: '90px', paddingTop: '50px' }} fluid>
      <Row>
        <h1 className="subtitle">
          Featured <b>Projects</b>
        </h1>
        <div className="w-100 mt-2 mb-2" style={{ backgroundColor: 'white', height: '3px' }} />
      </Row>
      <FeaturedProjects projects={featured} />
      <Row className="pt-5">
        <Col>
          <TagFilterBar tags={projectContent.tags} isTagActive={isTagActive} onToggle={toggleTag} />
          <ProjectGrid projects={filtered} />
        </Col>
      </Row>
      <ScrollButton />
    </Container>
  );
};
