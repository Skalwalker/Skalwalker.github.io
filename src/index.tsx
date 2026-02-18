import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { App } from './App';

import './assets/css/theme.scss';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Root element #root not found in the document.');
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
