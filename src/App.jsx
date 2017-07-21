import React from 'react';
import ReactDOM from 'react-dom';

import { match, withRouter } from 'react-router';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';

import MainLayout from 'components/layouts/MainLayout';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';

import About from 'components/About';

import history from 'helpers/history';

import { postsPath } from 'helpers/routes/posts';
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import prepareData from 'helpers/prepareData';
import DevTools from 'containers/DevTools';

class App extends React.Component {
  render() {
    history.listen(function(location) {
      match({ history, location}, (error, redirect, state) => {
        if (!error && !redirect) {
          prepareData(store, state);
        }
      });
    });
    console.log(withRouter(App)());
    return (
      <Provider store={store}>
        <Router>
          <MainLayout>
            <Route
              exact
              path="/"
              component={PostsContainer}
              prepareData={(store) => store.dispatch(fetchPosts())} />
            <Route
              exact
              path={postsPath()}
              component={PostContainer}
              prepareData={
                (store, query, params) => {
                  store.dispatch(fetchPost(params.id));
                }} />
            <Route exact path="/about" component={About} />
          </MainLayout>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);

export default App;
