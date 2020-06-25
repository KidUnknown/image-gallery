import React from 'react';
import GalleryApp from './GalleryApp';
import AlbumApp from './AlbumApp';
import UsersApp from './UsersApp';
import { Route, Switch, Redirect } from 'react-router-dom';
import './main.scss';

const Routes = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/photos" component={GalleryApp} />
        <Route exact path="/">
          <Redirect to="/photos" />
        </Route>
        <Route path="/albums" component={AlbumApp} />
        <Route path="/users" component={UsersApp} />
      </Switch>
    </div>
  )
}

export default Routes;
