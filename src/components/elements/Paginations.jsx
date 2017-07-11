import React from 'react';
import PropTypes from 'prop-types';

import { Pagination } from 'react-bootstrap';

class Paginations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bsSize, activePage, onSelect, maxItems, step } = this.props;
    const items = Math.round(maxItems / step);

    return (
      <Pagination
        bsSize={ bsSize }
        items={ items }
        activePage={ activePage }
        onSelect={ onSelect } />
    );
  }
}

Paginations.propTypes = {
  maxItems: PropTypes.string,
  step: PropTypes.number,
  onSelect: PropTypes.func,
  bsSize: PropTypes.string,
  activePage: PropTypes.number
};

Paginations.defaultProps = {
  activePage: 1,
  maxItems: 10,
  step: 2,
  bsSize: 'large'
};

export default Paginations;
