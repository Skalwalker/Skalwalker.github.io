import React, { useRef, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { BackgroundParticles, NavBar } from './components';
import { NavRouter } from './routes';
import { LoaderContainer } from './styles/primitives';
import { Splashscreen } from './views';

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
      style={{
        minHeight: '100vh',
        backgroundColor: '#070e20',
        position: 'relative',
      }}
    >
      <BackgroundParticles id={'tsparticles'} />
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {showSplash && (
          <LoaderContainer>
            <Splashscreen />
          </LoaderContainer>
        )}
        <NavBar />
        <Row className="mx-0 gx-0">
          <Col xl={1} className="d-none d-xl-block" />
          <Col xs={12} xl={10}>
            <NavRouter />
          </Col>
          <Col xl={1} className="d-none d-xl-block" />
        </Row>
      </div>
    </div>
  );
};
