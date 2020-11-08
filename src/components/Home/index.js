/**
 * Npm import
 */
import React from 'react';
import {
  Segment, Button, Input, Divider,
} from 'semantic-ui-react';

/**
 * Local import
 */

/**
 * Component
 */
const Home = () => (
  <Segment>
    <div>
      <Input placeholder="Enter your github Token here" fluid />
      <Divider hidden fitted />
      <Button fluid secondary type="submit" content="Submit" color="olive" />
    </div>
  </Segment>
);
/**
 * Export
 */
export default Home;
