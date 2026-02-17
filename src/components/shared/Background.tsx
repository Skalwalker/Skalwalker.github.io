import React from 'react';
import '../../assets/css/font.css';
import { NavBar } from './NavBar';
import { BackgroundParticles } from './BackgroundParticles';

interface BackgroundProps {
  showParticles?: boolean;
  pageHeight?: string;
  children: React.ReactNode;
}

export const Background = ({
  pageHeight = '100vh',
  children,
}: BackgroundProps): React.JSX.Element => {
  return (
    <div id="background" style={{ height: pageHeight, backgroundColor: '#070e20' }}>
      <div style={{ height: pageHeight, position: 'relative', margin: '0 auto' }}>
        {<BackgroundParticles />}
        <div style={{ position: 'absolute', top: '0', width: '100%', minHeight: '100vh' }}>
          <NavBar></NavBar>
          {children}
        </div>
      </div>
    </div>
  );
};
