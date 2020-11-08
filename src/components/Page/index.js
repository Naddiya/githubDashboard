/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
import About from 'src/components/About';
import Welcome from 'src/components/Welcome';

/**
 * Component
 */
const Page = () => (
  <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/about" component={About} />
  </Switch>
);

/**
 * Export
 */
export default Page;
