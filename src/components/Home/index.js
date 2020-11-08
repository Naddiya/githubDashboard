/**
 * Npm import
 */
import React from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';

/**
 * Local import
 */

/**
 * Component
 */
const Home = () => (
  <Segment>
    <Button inverted color="green" name="Submit" content="Submit" floated="right" />
    <Input icon="github" size="small" placeholder="Enter your token here" />
  </Segment>
);
/**
 * Export
 */
export default Home;
