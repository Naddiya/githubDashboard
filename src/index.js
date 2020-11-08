/**
 * Npm import
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/**
 * Local import
 */
import App from 'src/components/App';

/**
 * Style
 */
import 'semantic-ui-css/semantic.min.css';

/**
 * Component
 */
const rootComponent = (
  <BrowserRouter>
    <App />
  </BrowserRouter>

);
/**
 * Target
 */
const target = document.getElementById('root');
/**
 * Export
 */
render(rootComponent, target);
