import type { JSX } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { BackgroundParticles } from '../components';
import { BottomText, TopText, FontText, FontText2 } from '../styles/primitives';

export const Splashscreen = (): JSX.Element => (
  <SplashContainer className="w-100">
    <BackgroundParticles id="tsparticles-splash" />
    <Row className="h-100">
      <Col md={12} className="my-auto">
        <BottomText>
          <SplashTitleText as="h1">Hi, I am Renato Nobre</SplashTitleText>
          <TopText>
            <SplashTitleText2 as="h1">Hi, I am Renato Nobre</SplashTitleText2>
          </TopText>
        </BottomText>
      </Col>
    </Row>
  </SplashContainer>
);

const SplashContainer = styled.div`
  height: 100vh;
  background-color: #070e20;
`;

const SplashTitleText = styled(FontText)`
  font-size: 96px;
  color: #60d7f9;
`;

const SplashTitleText2 = styled(FontText2)`
  font-size: 96px;
  color: #60d7f9;
`;
