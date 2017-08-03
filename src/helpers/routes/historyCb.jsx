import createRoutes from 'routes';
const routes = createRoutes();

import createStore from 'store';
const initialState = __CLIENT__ ? window.__INITIAL_STATE__ : undefined; // eslint-disable-line
const store = createStore(initialState);

import prepareData from 'helpers/prepareData';

import { matchPath } from 'react-router-dom';
import { parse } from 'qs';
import { assign } from 'lodash/object';

export default (location) => {
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
  
  return __CLIENT__ ? prepareData(store, routeState) : routeState; // eslint-disable-line
};
