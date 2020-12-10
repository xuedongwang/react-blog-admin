import React, { Component } from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { routes } from './router';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          {
            routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                strict={route.strict}
              >
                {
                  <route.layout>
                    <route.component/>
                  </route.layout>
                }
              </Route>
            ))
          }
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;