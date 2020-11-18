// == Import : npm
import React from 'react';
import { Container } from 'semantic-ui-react';

// == Import : local
import Header from 'src/containers/Header';
import Page from 'src/containers/Page';

// == Composant
const App = () => (
  <Container>
    <Header />
    <Page />
  </Container>
);

// == Export
export default App;
