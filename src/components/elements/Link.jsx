import React from 'react';
import PropTypes from 'prop-types';

import { Link as DomLink } from 'react-router-dom';

const Link = ({ wrapperClassNames, linkClassNames, to, children }) =>
  <div className={ wrapperClassNames }>
    <DomLink className={ linkClassNames } to={ to }>{ children }</DomLink>
  </div>;

Link.propTypes = {
  wrapperClassNames: PropTypes.string,
  linkClassNames: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string
};

export default Link;
