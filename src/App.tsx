import React, { useRef, useEffect, useState } from 'react';

import { BackgroundParticles, NavBar } from './components';
import { NavRouter } from './routes';
import { Splashscreen } from './views';

import './assets/css/splashscreen.css';

export const App = (): React.JSX.Element => {
  const myRef = useRef(false);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (!myRef.current) {
      myRef.current = true;
      setShowSplash(true);

      setTimeout(() => {
        setShowSplash(false);
      }, 4000);
    }
  }, []);

  return (
    <div
      id="background"
      style={{ minHeight: '100vh', backgroundColor: '#070e20', position: 'relative' }}
    >
      <BackgroundParticles id={'tsparticles'} />
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {showSplash && (
          <div className="loader-container">
            <Splashscreen />
          </div>
        )}
        <NavBar />
        <NavRouter />
      </div>
    </div>
  );
};
