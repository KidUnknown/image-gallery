import React from 'react';
import GalleryApp from './GalleryApp';
import AlbumApp from './AlbumApp';
import UsersApp from './UsersApp';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import './main.scss';

const Routes = () => {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Users home</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
          <li>
            <Link to="/photos">Gallery</Link>
          </li>
        </ul>
      </nav>

      <Switch>
      <Route exact path="/users" component={UsersApp} />
        <Route exact path="/">
          <Redirect to="/users" />
        </Route>
        <Route path="/albums" component={AlbumApp} />
        <Route path="/photos" component={GalleryApp} />
      </Switch>
    </div>
  )
}

export default Routes;
