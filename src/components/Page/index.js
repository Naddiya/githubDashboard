// == Import : npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import Userhome from 'src/containers/Userhome';
import Search from 'src/components/Search';
import About from 'src/components/About';
import Login from 'src/containers/Login';
import Error from './Error';

// == Composant
const Page = ({ logged }) => (
  <Switch>
    <Route path="/" exact component={logged ? Userhome : Login} />
    {logged && (
      <Route path="/search" exact component={Search} />
    )}
    {!logged && (
      <Redirect from="/search" to="/" />
    )}
    <Route path="/about" exact component={About} />
    <Route component={Error} />
  </Switch>
);

Page.propTypes = {
  logged: PropTypes.bool.isRequired,
};

// == Export
export default Page;
