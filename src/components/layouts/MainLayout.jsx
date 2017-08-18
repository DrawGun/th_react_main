import React from 'react';
import PropTypes from 'prop-types';

import { PageHeader, Button, Well } from 'react-bootstrap';

import Container from './Container';
import Link from 'components/elements/Link';

import history from 'helpers/routes/history';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />

    { children }
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const GoBackButton = () => (
  <Button className="pull-right" onClick={ () => history.goBack() }>
    Назад
  </Button>
);

const Logo = () => (
  <PageHeader>
    <Link
      wrapperClassNames='header-link-wrapper'
      linkClassNames='header-link'
      to='/'>

      Thinknetica Blog
    </Link>

    <Link
      wrapperClassNames='header-link-wrapper'
      linkClassNames='header-link'
      to='/about'>

      About
    </Link>

    <Link
      wrapperClassNames='header-link-wrapper'
      linkClassNames='header-link'
      to='/contacts'>

      Contacts
    </Link>

    <GoBackButton />
  </PageHeader>
);

const Footer = () => (
  <Well className="footer">
    Powered by React Course.
  </Well>
);
