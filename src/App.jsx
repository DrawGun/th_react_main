import React from 'react';

import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/BlogPage';
import Post from 'components/Post';
import About from 'components/About';

import { postsPath } from 'helpers/routes/posts';

const App = () => (
  <Router>
    <MainLayout>
      <Route exact path="/" component={BlogPage} />
      <Route exact path={postsPath()} component={Post} />
      <Route exact path="/about" component={About} />
    </MainLayout>
  </Router>
);

export default App;
