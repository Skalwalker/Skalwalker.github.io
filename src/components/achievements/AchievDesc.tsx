import React from 'react';
import { Row, Image } from 'react-bootstrap';

import { AchievementContent } from './types';
import { SubtitleBold, Paragraph } from '../../styles/primitives';

interface AchievementDescProps {
  content: AchievementContent;
}

export const AchievDesc = ({ content }: AchievementDescProps): React.JSX.Element => {
  return (
    <div className="my-auto">
      <Row>
        <SubtitleBold as="h1" className="text-start mb-3" style={{ fontSize: '32px' }}>
          {content.title}
        </SubtitleBold>
      </Row>
      <Row className="text-start">
        <Paragraph>{content.desc}</Paragraph>
      </Row>
      <Row>
        <Image></Image>
      </Row>
    </div>
  );
};
