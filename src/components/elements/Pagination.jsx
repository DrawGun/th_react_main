import React from 'react';
import PropTypes from 'prop-types';

import { Pagination as BootstrapPagination } from 'react-bootstrap';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bsSize, activePage, onSelect, maxItems, step } = this.props;
    const items = Math.round(maxItems / step);

    return (
      <BootstrapPagination
        bsSize={ bsSize }
        items={ items }
        activePage={ activePage }
        onSelect={ onSelect } />
    );
  }
}

Pagination.propTypes = {
  maxItems: PropTypes.string,
  step: PropTypes.number,
  onSelect: PropTypes.func,
  bsSize: PropTypes.string,
  activePage: PropTypes.number
};

Pagination.defaultProps = {
  activePage: 1,
  maxItems: 10,
  step: 2,
  bsSize: 'large'
};

export default Pagination;
