import React, { useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/font.css';

import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import type { Container, Engine } from 'tsparticles-engine';

const BackgroundParticles = () => {
  let particle_amt = 80;

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadLinksPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles2"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: 'links',
        background: {
          opacity: 0.0,
        },
        particles: {
          color: {
            value: '#ff30d6',
          },
          links: {
            color: {
              value: '#ff30d6',
            },
            distance: 125,
          },
          number: {
            value: particle_amt,
            density: {
              enable: true,
            },
          },
          move: {
            speed: 1,
          },
        },
        fpsLimit: 40,
        detectRetina: true,
      }}
    />
  );
};

class Splashscreen extends React.Component {
  render() {
    return (
      <div className="w-100" style={{ height: '100vh', backgroundColor: '#070e20' }}>
        <BackgroundParticles />
        <Row className="h-100">
          <Col md={12} className="my-auto">
            <div className="bottom_text">
              <h1 className="font_text" style={style.nameStyle}>
                Hi, I am Renato Nobre
              </h1>
              <div className="top_text">
                <h1 className="font_text_2" style={style.nameStyle}>
                  Hi, I am Renato Nobre
                </h1>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const style = {
  nameStyle: {
    fontSize: '96px',
    color: '#60D7F9',
  },
};

export default Splashscreen;
