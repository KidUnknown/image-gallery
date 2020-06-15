import React from 'react';
import UseFetch from './Services/_UseFetch';

function AlbumApp() {

  const {items, error} = UseFetch('https://jsonplaceholder.typicode.com/albums');

  if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
  if (!items) return <div className="loader">Loading...</div>;

  return (
    <div className="album-app">
      <div className="album-app__body">
        <div className="listed-images">
          <ul>
            {items.map(item => {
              const { id, userId, title } = item;
              return(
                <li key={id}>
                  <p>Album: {id} </p>
                  <p>title: {title} user: {userId} </p>
                </li>
              )}
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AlbumApp;
