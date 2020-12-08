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
            routes.map(route => (
              <Route
                key={route.key}
                exact={true}
                path={route.path}
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