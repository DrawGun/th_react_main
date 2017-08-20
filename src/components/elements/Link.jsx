import React from 'react';
import PropTypes from 'prop-types';

import { Link as DomLink } from 'react-router-dom';

class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      global.__TEST__ ? this.renderTestLink() : this.renderCustomLink()
    );
  }

  renderCustomLink() {
    const { wrapperClassNames, linkClassNames, to, children } = this.props;

    return (
      <div className={ wrapperClassNames }>
        <DomLink className={ linkClassNames } to={ to }>{ children }</DomLink>
      </div>
    );
  }

  renderTestLink() {
    const { to, children } = this.props;

    return (
      <a href={to}>
        { children }
      </a>
    );
  }
}

Link.propTypes = {
  wrapperClassNames: PropTypes.string,
  linkClassNames: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string
};

export default Link;
