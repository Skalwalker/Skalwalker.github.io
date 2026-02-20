import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

import { LikeDesc } from './LikeDesc';
import { LikeIcon } from './LikeIcon';
import { likeContent } from '../../content';

export const Likes = (): React.JSX.Element => {
  const [shownText, setShownText] = useState<string | undefined>(undefined);

  return (
    <Container className="h-92">
      <LikesRow>
        <Col
          lg={{ span: 11, offset: 1 }}
          md={{ span: 11, offset: 0.5 }}
          sm={{ span: 11, offset: 0 }}
          className="my-auto"
        >
          <Row>
            {likeContent.map((likeIcon) => {
              return (
                <Col
                  key={likeIcon.title}
                  xl={2}
                  lg={2}
                  md={3}
                  sm={3}
                  xs={4}
                  className="me-0 mb-3 me-xl-2 me-lg-1"
                >
                  <LikeIconWrapper
                    className="m-auto"
                    onMouseEnter={() => {
                      setShownText(likeIcon.title);
                    }}
                    onMouseLeave={() => {
                      setShownText(undefined);
                    }}
                  >
                    <LikeIcon img={likeIcon.img}></LikeIcon>
                  </LikeIconWrapper>
                </Col>
              );
            })}
          </Row>
          <AboutLikeRow className="pt-1 pb-1 pt-lg-3 pe-xl-5">
            <LikeDesc text={shownText} />
          </AboutLikeRow>
        </Col>
      </LikesRow>
    </Container>
  );
};

const LikesRow = styled(Row)`
  height: 92vh;
`;

const LikeIconWrapper = styled.div`
  height: 70px;
  width: 70px;
`;

const AboutLikeRow = styled(Row)`
  height: 20px;
  width: 100%;
  margin-top: -40px;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`;
