import React from 'react';
import ExperienceTimeline from '../components/resume/VerticalTimeLine';
import { ScrollButton } from '../components/shared/ScrollButton';
import { Container } from 'react-bootstrap';

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
