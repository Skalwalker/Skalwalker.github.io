import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { LikeDesc } from './LikeDesc';
import { LikeIcon } from './LikeIcon';
import { likeContent } from '../../content';
import '../../assets/css/about.css';

export const Likes = (): React.JSX.Element => {
  const [shownText, setShownText] = useState<string | undefined>(undefined);

  return (
    <Container className="h-92">
      <Row style={{ height: '92vh' }}>
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
                  <div
                    className="m-auto"
                    onMouseEnter={() => {
                      setShownText(likeIcon.title);
                    }}
                    onMouseLeave={() => {
                      setShownText(undefined);
                    }}
                    style={{ height: '70px', width: '70px' }}
                  >
                    <LikeIcon img={likeIcon.img}></LikeIcon>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row
            className="pt-1 pb-1 pt-lg-3 pe-xl-5 about_like_style"
            style={{ height: '20px', width: '100%' }}
          >
            <LikeDesc text={shownText} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
