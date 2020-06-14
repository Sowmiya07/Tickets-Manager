import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import { ConnectedNavigation } from './component/Navigation';
import { ConnectedDashboard } from './component/Dashboard';
import { store } from '../store/index';
import { history } from '../store/history';

const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />
      </div>
    </Provider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));