import React, { CSSProperties, useCallback } from 'react';
import '../../assets/css/font.css';
import NavBar from './NavBar';

import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import type { Container, Engine } from 'tsparticles-engine';

type myState = { height: any };
type myProps = {
  showParticles: boolean;
  style: CSSProperties;
  pageHeight: any;
  navbar: boolean;
  children: React.ReactNode;
};

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
      id="tsparticles"
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

class Background extends React.Component<myProps, myState> {
  static defaultProps = {
    style: {},
    showParticles: false,
    navbar: true,
    pageHeight: '100vh',
  };

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  render() {
    return (
      <div
        id="background"
        style={{ height: this.props.pageHeight, backgroundColor: '#070e20', ...this.props.style }}
      >
        <div style={{ height: this.props.pageHeight, position: 'relative', margin: '0 auto' }}>
          {<BackgroundParticles />}
          <div style={{ position: 'absolute', top: '0', width: '100%', minHeight: '100vh' }}>
            {this.props.navbar && <NavBar></NavBar>}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
