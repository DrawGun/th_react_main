import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Switch, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from 'store';
const store = createStore(window.__INITIAL_STATE__);

import createRoutes from 'routes';
const routes = createRoutes();

import history from 'helpers/routes/history';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

import MainLayout from 'components/layouts/MainLayout';

import DevTools from 'containers/DevTools';

import prepareData from 'helpers/prepareData';

import { parse } from 'qs';
import { assign } from 'lodash/object';

function historyCb (location) {
  const routeState = { location, params: {}, routes: [], query: {}};

  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match) {
      routeState.routes.push(route);
      assign(routeState.params, match.params);
      const query = location.search ? parse(location.search.substr(1)) : {};
      assign(routeState.query, query);
    }

    return match;
  });

  prepareData(store, routeState);
}

history.listen((location) => {
  historyCb(location);
});

historyCb(window.location);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <MainLayout>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}
            </Switch>
          </MainLayout>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools'),
  () => {
    delete window.__INITIAL_STATE__;
  }
);

export default App;
