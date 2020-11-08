/**
 * Npm import
 */
import React, { Component } from 'react';
import {
  Segment,
  Header as HeaderSemanticUi,
  Menu,
  Icon,
} from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
import '../../styles/_vars.scss';
/**
 * Component
 */
class Header extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    activeItem: this.item,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <HeaderSemanticUi as="h1" textAlign="center" inverted color="olive" icon>
          <Icon name="github" />
            Github Dashboard
          <HeaderSemanticUi.Subheader>
            Powered by  Nadia M
          </HeaderSemanticUi.Subheader>
        </HeaderSemanticUi>

        <Menu inverted secondary>
          <Menu.Item
            name="Home"
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
            as={NavLink}
            exact
            to="/"
          />
          {/* <Menu.Item
              name="search"
              active={activeItem === "Search"}
              onClick={this.handleItemClick}
              as={NavLink}
              to="/search"
            /> */}
          <Menu.Item
            name="About"
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
            as={NavLink}
            to="/about"
          />
        </Menu>
      </Segment>

    );
  }
}

/**
 * Export
 */
export default Header;
