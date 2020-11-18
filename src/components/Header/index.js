import React from 'react';
import {
  Header as HeaderSemanticUi, Icon, Segment, Menu,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ logged }) => (
  <Segment inverted>
    <HeaderSemanticUi as="h1" textAlign="center" inverted color="olive" icon>
      <Icon name="github" />
        Github Dashboard
        <HeaderSemanticUi.Subheader>
        Powered by Nadia M.
      </HeaderSemanticUi.Subheader>
    </HeaderSemanticUi>
    <Menu inverted secondary>
      <Menu.Item as={NavLink} exact to="/" name="Login" />
      {logged && (
        <Menu.Item as={NavLink} to="/search" name="Search" />
      )}
      <Menu.Item as={NavLink} to="/about" name="About" />
    </Menu>
  </Segment>
);

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Header;
