import type { JSX } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { BackgroundParticles } from '../components';
import '../assets/css/font.css';

export const Splashscreen = (): JSX.Element => (
  <div className="w-100" style={{ height: '100vh', backgroundColor: '#070e20' }}>
    <BackgroundParticles id="tsparticles-splash" />
    <Row className="h-100">
      <Col md={12} className="my-auto">
        <div className="bottom_text">
          <h1 className="font_text" style={nameStyle}>
            Hi, I am Renato Nobre
          </h1>
          <div className="top_text">
            <h1 className="font_text_2" style={nameStyle}>
              Hi, I am Renato Nobre
            </h1>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

const nameStyle = {
  fontSize: '96px',
  color: '#60D7F9',
};
