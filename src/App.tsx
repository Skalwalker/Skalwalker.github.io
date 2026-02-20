import React, { useRef, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { BackgroundParticles, NavBar } from './components';
import { NavRouter } from './routes';
import { LoaderContainer } from './styles/primitives';
import { Splashscreen } from './views';

export const AppBackground = styled.div`
  min-height: 100vh;
  background-color: #070e20;
  position: relative;
`;

const AppContent = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
`;

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
    <AppBackground id="background">
      <BackgroundParticles id={'tsparticles'} />
      <AppContent>
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
      </AppContent>
    </AppBackground>
  );
};
