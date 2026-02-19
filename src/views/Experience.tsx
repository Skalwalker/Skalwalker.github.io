import React from 'react';
import { Container } from 'react-bootstrap';

import { ExperienceTimeline } from '../components';
import { ScrollButton } from '../components';
import { Subtitle } from '../styles/primitives';

export const Experience = (): React.JSX.Element => {
  return (
    <Container>
      <Subtitle as="h1" className="align-center text-center pb-3 pt-5">
        Work Experience, Education,
        <br /> and Extra Activities
      </Subtitle>
      <ExperienceTimeline />
      <ScrollButton />
    </Container>
  );
};
