import React, { useEffect, useState, useMemo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/font.css';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, ISourceOptions } from '@tsparticles/engine';

const BackgroundParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        opacity: 0,
      },
      fpsLimit: 40,
      particles: {
        color: {
          value: '#ff30d6',
        },
        links: {
          color: '#ff30d6',
          distance: 125,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
        },
        number: {
          value: 80,
          density: {
            enable: true,
          },
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return <Particles id="tsparticles2" particlesLoaded={particlesLoaded} options={options} />;
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
