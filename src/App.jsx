import React from 'react';

import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/BlogPage';
import Post from 'components/Post';

import { postsPath } from 'helpers/routes/posts';

const App = () => (
  <Router>
    <MainLayout>
      <Route exact path="/" component={BlogPage} />
      <Route exact path={postsPath()} component={Post} />
    </MainLayout>
  </Router>
);

export default App;
