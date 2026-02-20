import React, { SetStateAction, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styled from 'styled-components';

import { AchievCard, AchievDesc, AchievDescModal, AchievementContent } from '../components';
import { achievList } from '../content';
import { useIsMobile } from '../hooks';
import { SubtitleBold } from '../styles/primitives';

export const AchievementView = (): React.JSX.Element => {
  const isMobile = useIsMobile();
  const [achievement, setAchievement] = useState<AchievementContent | null>(null);

  return (
    <AchievContainer className="p-4" fluid>
      <Row className="h-100">
        <AchievDescCol
          xl={3}
          lg={3}
          md={12}
          sm={12}
          className="pr-2 text-center pt-4 pb-4 position-lg-static d-none d-lg-flex h-100"
        >
          {achievement ? (
            <AchievDesc content={achievement} />
          ) : (
            <AchievTitleText as="h2" className="my-auto">
              Hover over an Achievement <br />
              to show description
            </AchievTitleText>
          )}
        </AchievDescCol>
        <Col xl={9} lg={9} md={12} sm={12} className="my-auto">
          <Row>
            <AchievMatrix col={1} setAchievement={setAchievement} />
            <AchievMatrix col={7} setAchievement={setAchievement} />
            <AchievMatrix col={13} setAchievement={setAchievement} />
          </Row>
        </Col>
      </Row>
      {isMobile && achievement && (
        <AchievDescModal
          content={achievement}
          callback={() => {
            setAchievement(null);
          }}
        />
      )}
    </AchievContainer>
  );
};

interface AchievMatrixProps {
  col: number;
  setAchievement: React.Dispatch<SetStateAction<AchievementContent | null>>;
}

const AchievMatrix = ({ col, setAchievement }: AchievMatrixProps): React.JSX.Element => {
  return (
    <Col className="mt-0">
      {achievList.slice(col - 1, col - 1 + Math.floor(achievList.length / 3)).map((achievement) => (
        <Col
          key={achievement.title}
          onMouseEnter={() => {
            setAchievement(achievement);
          }}
          onMouseLeave={() => {
            setAchievement(null);
          }}
          onClick={() => {
            setAchievement(achievement);
          }}
        >
          <AchievCard
            title={achievement.title}
            date={achievement.earned}
            img={achievement.img}
            locked={achievement.locked}
          />
        </Col>
      ))}
    </Col>
  );
};

const AchievContainer = styled(Container)`
  height: 92vh;
`;

const AchievDescCol = styled(Col)`
  z-index: 1;
`;

const AchievTitleText = styled(SubtitleBold)`
  font-size: 32px;
  color: #ffffff;
`;
