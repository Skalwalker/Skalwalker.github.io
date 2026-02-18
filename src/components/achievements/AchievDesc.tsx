import React from 'react';
import { Row, Image } from 'react-bootstrap';
import { AchievementContent } from './types';

interface AchievementDescProps {
  content: AchievementContent;
}

export const AchievDesc = ({ content }: AchievementDescProps): React.JSX.Element => {
  return (
    <div className="my-auto">
      <Row>
        <h1 className="text-start subtitle_bold mb-3" style={{ fontSize: '32px' }}>
          {content.title}
        </h1>
      </Row>
      <Row className="text-start">
        <p className="paragraph">{content.desc}</p>
      </Row>
      <Row>
        <Image></Image>
      </Row>
    </div>
  );
};
