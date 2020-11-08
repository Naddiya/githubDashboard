/**
 * Npm import
 */
import React from 'react';
import {
  Segment,
  Button,
  Header,
} from 'semantic-ui-react';

/**
 * Local import
 */

/**
 * Component
 */
const Welcome = () => (
  <Segment>
    <Header as="h2">
      Welcome !
      <Button floated="right">floated</Button>

    </Header>
  </Segment>

);
/**
 * Export
 */
export default Welcome;
