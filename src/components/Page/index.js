/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */

import About from 'src/components/About';
import Home from 'src/components/Home';

/**
 * Component
 */
const Page = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </Switch>
);

/**
 * Export
 */
export default Page;
