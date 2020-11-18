/* eslint-disable react/static-property-placement */
/**
 * Npm import
 */
import React from 'react';
import { Segment, Input, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/**
 * Local import
 */


/**
 * Code
 */

class SearchBar extends React.Component {
  changeHandler = (evt) => {
    const { changeInputValue } = this.props;
    const { value } = evt.target;
    changeInputValue(value);
  }

  render() {
    const { inputValue, doSearch, loading } = this.props;
    return (
      <Segment>
        <Form onSubmit={doSearch}>
          <Form.Field>
            <Input loading={loading} value={inputValue} onChange={this.changeHandler} fluid inverted placeholder="Recherche..." />
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  doSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default SearchBar;
