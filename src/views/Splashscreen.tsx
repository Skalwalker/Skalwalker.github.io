import type { JSX } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { BackgroundParticles } from '../components';
import { BottomText, TopText, FontText, FontText2 } from '../styles/primitives';

export const Splashscreen = (): JSX.Element => (
  <div className="w-100" style={{ height: '100vh', backgroundColor: '#070e20' }}>
    <BackgroundParticles id="tsparticles-splash" />
    <Row className="h-100">
      <Col md={12} className="my-auto">
        <BottomText>
          <FontText as="h1" style={nameStyle}>
            Hi, I am Renato Nobre
          </FontText>
          <TopText>
            <FontText2 as="h1" style={nameStyle}>
              Hi, I am Renato Nobre
            </FontText2>
          </TopText>
        </BottomText>
      </Col>
    </Row>
  </div>
);

const nameStyle = {
  fontSize: '96px',
  color: '#60D7F9',
};
