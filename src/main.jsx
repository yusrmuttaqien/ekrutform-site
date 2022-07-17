import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/pages';
import '@fontsource/prompt';
import '@fontsource/prompt/400.css';
import '@fontsource/prompt/600.css';
import '@fontsource/prompt/700.css';
import '@fontsource/prompt/900.css';
import '@/styles/root.css';
import '@/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
