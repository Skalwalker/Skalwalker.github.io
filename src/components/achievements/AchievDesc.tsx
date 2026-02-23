import React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

import { AchievementContent } from './types';
import { SubtitleBold, Paragraph } from '../../styles/primitives';

interface AchievementDescProps {
  content: AchievementContent;
}

export const AchievDesc = ({ content }: AchievementDescProps): React.JSX.Element => {
  return (
    <div className="my-auto">
      <Row>
        <AchievTitle as="h1" className="text-start mb-3">
          {content.title}
        </AchievTitle>
      </Row>
      <Row className="text-start">
        <Paragraph>{content.desc}</Paragraph>
      </Row>
    </div>
  );
};

const AchievTitle = styled(SubtitleBold)`
  font-size: 32px;
`;
