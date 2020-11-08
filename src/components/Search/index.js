/**
 * Npm import
 */
import React from 'react';
import { Input, Form } from 'semantic-ui-react';

/**
 * Local import
 */

/**
 * Component
 */
const Search = () => (
  <>
    <Form>
      <Form.Field>
        <Input icon="search" fluid inverted placeholder="Entrez la recherche" />
      </Form.Field>
    </Form>
  </>
);

/**
 * Export
 */
export default Search;
