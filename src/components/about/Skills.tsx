import type { JSX } from 'react';
import { Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

import { useSkillsChart } from '../../hooks';

export const Skills = (): JSX.Element => {
  const containerRef = useSkillsChart();

  return (
    <Container>
      <AboutSkillsCol>
        <SkillsChartContainer ref={containerRef} />
      </AboutSkillsCol>
    </Container>
  );
};

const AboutSkillsCol = styled(Col)`
  padding: 0;
  margin: -48px;

  @media (min-width: 992px) {
    margin: 0;
    margin-left: -16px;
    margin-right: -48px;
  }
`;

const SkillsChartContainer = styled.div`
  margin: 10px;
  height: 60vh;
  width: 100%;

  @media (min-width: 992px) {
    height: 90vh;
  }
`;
