/**
 * Npm import
 */
import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ReactEmoji from 'react-emoji';

/**
 * Local import
 */


/**
 * Code
 */
const Repo = ({
  name, description, owner, showDetail,
  url, addFavorites, id, isFav,
}) => (
  <Card onClick={showDetail(url)}>
    <Image src={owner.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        {owner.login}
      </Card.Meta>
      <Card.Description>
        {ReactEmoji.emojify(description)}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a onClick={addFavorites(id)}>
        <Icon name={isFav ? 'heart' : 'heart outline'} />
        J'aime
      </a>
    </Card.Content>
  </Card>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  owner: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }).isRequired,
  showDetail: PropTypes.func.isRequired,
  addFavorites: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isFav: PropTypes.bool.isRequired,
};

Repo.defaultProps = {
  description: '',
};

/**
 * Export
 */
export default Repo;
