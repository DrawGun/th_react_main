import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from 'store';
import createRoutes from 'routes';

import history from 'helpers/routes/history';
import historyCb from 'helpers/routes/historyCb';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

import MainLayout from 'components/layouts/MainLayout';

import DevTools from 'containers/DevTools';

const store = createStore(window.__INITIAL_STATE__);
const routes = createRoutes();

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
