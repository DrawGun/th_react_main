import React from 'react';
import PropTypes from 'prop-types';

import { PageHeader, Button } from 'react-bootstrap';

import Container from './Container';
import Link from 'components/elements/Link';

import history from 'helpers/history';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    <GoBackButton />
    { children }
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const GoBackButton = () => (
  <Button onClick={ () => history.goBack() }>Назад</Button>
);

const Logo = () => (
  <PageHeader>
    <Link to='/'>Thinknetica Blog</Link>
  </PageHeader>
);

const Footer = () => (
  <div className="footer">
    Powered by React Course.
  </div>
);
