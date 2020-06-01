import React from 'react';
import GalleryApp from './GalleryApp';
import AlbumApp from './AlbumApp';
import { Route, Switch, Redirect } from 'react-router-dom';
import './main.scss';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/gallery" component={GalleryApp} />
      <Route exact path="/">
        <Redirect to="/gallery" />
      </Route>
      <Route path="/photos" component={AlbumApp} />
    </Switch>
  )
}

export default Routes;
