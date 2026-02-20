import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { BottomText, TopText, FontText, FontText2 } from '../styles/primitives';

export const Errorscreen = (): React.JSX.Element => {
  return (
    <ErrorContainer className="w-100">
      <Row className="h-100">
        <Col md={12} className="my-auto">
          <BottomText>
            <ErrorTitleText as="h1">
              404
              <br />
              Doesn&apos;t look like
              <br /> anything to me
            </ErrorTitleText>
            <TopText>
              <ErrorTitleText2 as="h1">
                404
                <br />
                Doesn&apos;t look like
                <br /> anything to me
              </ErrorTitleText2>
            </TopText>
          </BottomText>
        </Col>
      </Row>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  height: 92vh;
`;

const ErrorTitleText = styled(FontText)`
  font-size: 96px;
  color: #60d7f9;
`;

const ErrorTitleText2 = styled(FontText2)`
  font-size: 96px;
  color: #60d7f9;
`;
