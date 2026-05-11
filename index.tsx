import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Defer noise texture loading to after initial paint
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      document.body.classList.add('texture-loaded');
    });
  });
}