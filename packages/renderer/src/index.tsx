import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { App } from './app';

declare global {
  interface Window {
    darkMode?: {
      system: () => Promise<void>;
      toggle: () => Promise<void>;
    };
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
