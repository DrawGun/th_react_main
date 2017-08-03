import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import url from 'url';
import { parse } from 'qs';

import { Switch, matchPath, StaticRouter } from 'react-router-dom';

import { compact } from 'lodash/array';
import { assign } from 'lodash/object';

import store from 'store';
import createRoutes from 'routes';

import prepareData from 'helpers/prepareData';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';
import MainLayout from 'components/layouts/MainLayout';

const routes = createRoutes();

function historyCb(currentUrl) {
  const location = url.parse(currentUrl);
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

  return routeState;
}

export default (req, res) => {
  const routeState = historyCb(req.url);
  Promise.all(
    compact(prepareData(store, routeState))
  ).then(() => {
    const context = {};
    const initialState = JSON.stringify(store.getState());
    
    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context = {context} >
          <MainLayout>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}
            </Switch>
          </MainLayout>
        </StaticRouter>
      </Provider>
    );

    res.status(200);
    res.render(
      'index',
      { initialState, content }
    );
  });
};
