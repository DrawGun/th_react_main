import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, matchPath, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { parse } from 'qs';
import { assign } from 'lodash/object';

import store from 'store';
import createRoutes from 'routes';

import prepareData from 'helpers/prepareData';
import history from 'routes/history';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

import MainLayout from 'components/layouts/MainLayout';

import DevTools from 'containers/DevTools';

class App extends React.Component {
  render() {
    const routes = createRoutes();

    function historyCb(location) {
      const routeState = { location, params: {}, routes: [], query: {}};
      console.log(routeState);
      routes.some(route => {
        const match = matchPath(location.pathname, route);

        if (match) {
          routeState.routes.push(route);
          assign(routeState.params, match.params);
          assign(routeState.query, parse(location.search.substr(1)));
        }

        return match;
      });

      prepareData(store, routeState);
    }

    history.listen(historyCb);

    historyCb(window.location);

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
  document.getElementById('devtools')
);

export default App;
