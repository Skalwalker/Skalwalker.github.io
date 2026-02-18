import React from 'react';
import { Background } from '../components/shared/Background';
import ExperienceTimeline from '../components/resume/VerticalTimeLine';
import { ScrollButton } from '../components/shared/ScrollButton';

class Experience extends React.Component {
  render() {
    return (
      <Background pageHeight={document.documentElement.scrollHeight}>
        <h1 className="align-center text-center pb-3 pt-5 subtitle">
          Work Experience, Education,
          <br /> and Extra Activities
        </h1>
        <ExperienceTimeline />
        <ScrollButton />
      </Background>
    );
  }
}

export default Experience;
