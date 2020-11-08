/**
 * Npm import
 */
import React from 'react';
import { Container } from 'semantic-ui-react';

/**
 * Local import
 */
import Header from 'src/components/Header';
import Page from 'src/components/Page';

/**
 * Component
 */
const App = () => (
  <Container>
    <Header />
    <Page />
  </Container>
);

/**
 * Export
 */
export default App;
