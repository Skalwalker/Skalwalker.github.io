import React from 'react';
import { Container } from 'react-bootstrap';

import ExperienceTimeline from '../components/resume/VerticalTimeLine';
import { ScrollButton } from '../components/shared/ScrollButton';

export const Experience = (): React.JSX.Element => {
  return (
    <Container>
      <h1 className="align-center text-center pb-3 pt-5 subtitle">
        Work Experience, Education,
        <br /> and Extra Activities
      </h1>
      <ExperienceTimeline />
      <ScrollButton />
    </Container>
  );
};
