import React, { useEffect, useState, useMemo } from 'react';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

interface BackgroundParticlesProps {
  id: string;
}

export const BackgroundParticles = ({ id }: BackgroundParticlesProps): React.JSX.Element => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initEngine = async (): Promise<void> => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    void initEngine();
  }, []);

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
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
        },
        number: {
          value: 100,
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
    return <></>;
  }

  return <Particles id={id} options={options} />;
};
