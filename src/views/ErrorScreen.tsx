import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { BottomText, TopText, FontText, FontText2 } from '../styles/primitives';

export const Errorscreen = (): React.JSX.Element => {
  return (
    <div className="w-100" style={{ height: '100vh' }}>
      <Row className="h-100">
        <Col md={12} className="my-auto">
          <BottomText>
            <FontText as="h1" style={style.nameStyle}>
              404
              <br />
              Doesn&apos;t look like
              <br /> anything to me
            </FontText>
            <TopText>
              <FontText2 as="h1" style={style.nameStyle}>
                404
                <br />
                Doesn&apos;t look like
                <br /> anything to me
              </FontText2>
            </TopText>
          </BottomText>
        </Col>
      </Row>
    </div>
  );
};

const style = {
  nameStyle: {
    fontSize: '96px',
    color: '#60D7F9',
  },
};
