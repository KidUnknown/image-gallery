import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import GalleryApp from './GalleryApp';
import AlbumApp from './AlbumApp';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory } from '@version/react-router-v3';

ReactDOM.render(

  <Router history={browserHistory}>
    <Route path="/" component={GalleryApp}>
      <Route path="/gallery" component={GalleryApp} />
    </Route>
    <Route path="/photos" component={AlbumApp}>
      <Route path="/photos" component={AlbumApp} />
    </Route>
  </Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
