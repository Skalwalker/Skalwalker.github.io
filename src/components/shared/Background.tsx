import React, { CSSProperties, useEffect, useState, useMemo } from 'react';
import '../../assets/css/font.css';
import NavBar from './NavBar';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, ISourceOptions } from '@tsparticles/engine';

interface myState { height: number }
interface myProps {
  showParticles: boolean;
  style: CSSProperties;
  pageHeight: string;
  navbar: boolean;
  children: React.ReactNode;
}

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

  return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
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
