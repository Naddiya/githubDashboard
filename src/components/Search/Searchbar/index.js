/**
 * Npm import
 */
import React from 'react';
import { Segment, Input, Form } from 'semantic-ui-react';

/**
 * Local import
 */

/**
 * Component
 */
// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends React.Component {
  render() {
    return (
      <Segment>
        <Form onSubmit="">
          <Form.Field>
            <Input fluid inverted placeholder="Recherche..." />
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}
/**
 * Export
 */
export default SearchBar;
