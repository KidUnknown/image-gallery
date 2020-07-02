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
        <Route exact path="/users" component={UserList} />
        <Route exact path="/">
          <Redirect to="/users" />
        </Route>
        <Route path="/albums" component={AlbumList} />
        <Route path="/photos" component={Photos} />
      </Switch>
    </div>
  )
}

export default Routes;
