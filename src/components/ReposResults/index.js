/**
 * Npm import
 */
import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Repo from 'src/containers/ReposResults/Repo';


/**
 * Code
 */
const ReposResults = ({ repos }) => (
  <Card.Group itemsPerRow={4} stackable>
    {repos.map((repo) => (
      <Repo key={repo.id} {...repo} showDetail={() => {}} />
    ))}
  </Card.Group>
);


ReposResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

/**
 * Export
 */
export default ReposResults;
