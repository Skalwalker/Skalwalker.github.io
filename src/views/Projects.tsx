import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { ProjectCard, ProjectData, ScrollButton } from '../components';
import { projectContent } from '../content';
import { useTagFilter } from '../hooks';
import { PageFluidContainer, SectionDivider, Subtitle } from '../styles/primitives';

const FeaturedProjects: React.FC<{ projects: ProjectData[] }> = ({ projects }) => (
  <Row>
    {projects.map((project) => (
      <FeaturedProjectCol key={project.title} xl={3} lg={6} sm={6}>
        <ProjectCard project={project} />
      </FeaturedProjectCol>
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
      <Subtitle as="h1">Newest</Subtitle>
    </Col>
    {tags.map((name) => (
      <TagFilterCol xl={2} key={name} className="d-grid mb-2">
        <Button
          onClick={() => {
            onToggle(name);
          }}
          variant={isTagActive(name) ? 'light' : 'outline-light'}
          size="sm"
        >
          {name}
        </Button>
      </TagFilterCol>
    ))}
    <SectionDivider className="w-100 mt-2 mb-2" />
  </Row>
);

const ProjectGrid: React.FC<{ projects: ProjectData[] }> = ({ projects }) => (
  <Row>
    {projects.map((p) => (
      <ProjectGridCol key={p.title} xl={3} lg={6} sm={6}>
        <ProjectCard project={p} />
      </ProjectGridCol>
    ))}
  </Row>
);

export const Projects: React.FC = () => {
  const { toggleTag, isTagActive, matchesTags } = useTagFilter();

  const projectList = Object.values(projectContent.projects);
  const featured = projectList.filter((p) => p.highlight);
  const filtered = projectList.filter((p) => !p.highlight && matchesTags(p.tags));

  return (
    <PageFluidContainer fluid>
      <Row>
        <Subtitle as="h1">
          Featured <b>Projects</b>
        </Subtitle>
        <SectionDivider className="w-100 mt-2 mb-2" />
      </Row>
      <FeaturedProjects projects={featured} />
      <Row className="pt-5">
        <Col>
          <TagFilterBar tags={projectContent.tags} isTagActive={isTagActive} onToggle={toggleTag} />
          <ProjectGrid projects={filtered} />
        </Col>
      </Row>
      <ScrollButton />
    </PageFluidContainer>
  );
};

const FeaturedProjectCol = styled(Col)`
  padding: 10px;
`;

const TagFilterCol = styled(Col)`
  padding-top: 12px;
`;

const ProjectGridCol = styled(Col)`
  padding-top: 15px;
  padding-bottom: 15px;
`;
