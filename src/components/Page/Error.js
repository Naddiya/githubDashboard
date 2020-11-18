import React from 'react';
import { NavLink } from 'react-router-dom';
import { Segment, Header, Button } from 'semantic-ui-react';

import './error.scss';

const Error = () => (
  <Segment className="error">
    <Header as="h2">Going nowhere ... </Header>
    {/* <img src="https://media.giphy.com/media/7MnhsCyVGOl56/giphy.gif" alt="guy cycling nowhere" /> */}
    <h3>Erreur 404</h3>
      <p>Cette page n'existe pas encore ... Clickez pour retrouver la page home</p>
    <Button inverted color="green" as={NavLink} to="/"> Home </Button>
  </Segment>
);

export default Error;
