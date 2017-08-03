import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import url from 'url';

import { Switch, StaticRouter } from 'react-router-dom';

import { compact } from 'lodash/array';

import createStore from 'store';
import createRoutes from 'routes';

import prepareData from 'helpers/prepareData';
import historyCb from 'helpers/routes/historyCb';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';
import MainLayout from 'components/layouts/MainLayout';

const store = createStore();
const routes = createRoutes();

export default (req, res) => {
  const location = url.parse(req.url);
  const routeState = historyCb(location);

  Promise.all(
    compact(prepareData(store, routeState))
  ).then(() => {
    const context = {};
    const initialState = JSON.stringify(store.getState());

    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={location} context = {context} >
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
