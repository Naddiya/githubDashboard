// == Import : npm
import React from 'react';
import {
  Segment, Header, Image, Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import ReposResults from 'src/components/ReposResults';

import repos from 'src/data/repos';

// == Composant
const Userhome = ({ user, logout }) => (
  <Segment>
    <Header as="h2">
      Welcome home !
      <Button onClick={logout} color="teal" floated="right">Déconnexion</Button>
    </Header>
    <Header as="p">
      <Image
        circular
        src={user.avatar}
      />
      {user.name}
    </Header>
    <Header as="h3">
      Vos deniers repos
    </Header>
    <ReposResults repos={repos.items.slice(0, 4)} />
    <Header as="h3">
      Vos repos favoris
    </Header>
    <ReposResults repos={repos.items.slice(4, 8)} />
  </Segment>
);

Userhome.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

// == Export
export default Userhome;
