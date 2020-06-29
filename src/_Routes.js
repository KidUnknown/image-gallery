import React from 'react';
import Photos from './Photos';
import AlbumList from './AlbumList';
import UserList from './UserList';
import { Route, Switch, Redirect } from 'react-router-dom';
import './main.scss';

const Routes = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/">
          <Redirect to="/photos" />
        </Route>
        <Route path="/albums" component={AlbumList} />
        <Route path="/users" component={UserList} />
      </Switch>
    </div>
  )
}

export default Routes;
