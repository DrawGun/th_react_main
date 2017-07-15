import React from 'react';
import PropTypes from 'prop-types';

import { FormControl } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <form className="search-by-post-title">
        <FormControl
          type="text"
          placeholder={placeholder}
          onChange={this.handleSearch} />
      </form>
    );
  }

  handleSearch(e) {
    const value = e.target.value;
    this.props.handleSearch(value);
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func,
  placeholder: PropTypes.string
};

Search.defaultProps = {
  placeholder: 'Поиск'
};

export default Search;
