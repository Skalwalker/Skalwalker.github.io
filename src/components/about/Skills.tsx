import type { JSX } from 'react';
import { Col, Container } from 'react-bootstrap';

import { useSkillsChart } from '../../hooks';

import '../../assets/css/about.css';

export const Skills = (): JSX.Element => {
  const containerRef = useSkillsChart();

  return (
    <Container>
      <Col className="about_skills_style">
        <div ref={containerRef} className="skills_chart_container" />
      </Col>
    </Container>
  );
};
