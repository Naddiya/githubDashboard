/**
 * Npm import
 */
import React from 'react';
import {
  Segment, Header as HeaderSemanticUi, Icon, Menu,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */

/**
 * Component
 */
const Header = () => (
  <Segment inverted>
    <HeaderSemanticUi as="h1" textAlign="center" icon>
      <Icon name="dashboard" />
      <Icon name="github" />
        Github Dashboard
      <HeaderSemanticUi.Subheader>
        Coded by Nadia MZ
      </HeaderSemanticUi.Subheader>
    </HeaderSemanticUi>
    <Menu color="yellow" inverted>
      <Menu.Item as={NavLink} exact to="/" name="welcome" />
      <Menu.Item as={NavLink} to="/about" name="About" />


    </Menu>

  </Segment>

);


/**
 * Export
 */
export default Header;
