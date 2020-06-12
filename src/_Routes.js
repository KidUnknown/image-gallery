import React from 'react';
import App from './App';
import AlbumApp from './AlbumApp';
import { Route, Switch, Redirect } from 'react-router-dom';
import './main.scss';

const Routes = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/photos" component={App} />
        <Route exact path="/">
          <Redirect to="/photos" />
        </Route>
        <Route path="/albums" component={AlbumApp} />
      </Switch>
    </div>
  )
}

export default Routes;
