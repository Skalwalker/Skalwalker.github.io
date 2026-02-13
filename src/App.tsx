import React, { useRef, useEffect, useState } from 'react';
import { NavRouter } from './routes';
import Splashscreen from './views/Splashscreen';
import './assets/css/splashscreen.css';

export default function App() {
  const myRef: any = useRef(null);
  const [showSplash, setShowSplash] = useState(myRef.current);

  useEffect(() => {
    if (myRef.current === null) {
      myRef.current = true;
      setShowSplash(myRef.current);

      setTimeout(() => {
        console.log('Entrou!');
        myRef.current = false;
        setShowSplash(myRef.current);
      }, 4000);
    }
  }, []);

  return (
    <div>
      {showSplash && (
        <div className="loader-container">
          <Splashscreen />
        </div>
      )}
      <NavRouter />
    </div>
  );
}
