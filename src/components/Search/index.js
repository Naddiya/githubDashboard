// == Import : npm
import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

// == Import : local
import ReposResults from 'src/containers/ReposResults';
import SearchBar from './SearchBar';

// == Composant
const Search = () => (
  <Segment>
    <Header as="h2">Search</Header>
    <SearchBar inputValue="Lorem ipsum" loading={false} doSearch={() => {}} changeInputValue={() => {}} />
    <ReposResults />
  </Segment>
);

// == Export
export default Search;
