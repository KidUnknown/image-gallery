import React from 'react';
import useFetch from './Services/_UseFetch';

function AlbumApp() {

  const res = useFetch('https://jsonplaceholder.typicode.com/albums', {});

  if (res.error) return <div className="error"><h3>Error:</h3> <p>{res.error.message}</p></div>;
  if (!res.items) return <div className="loader"></div>;

  return (
    <div className="album-app">
      <div className="album-app__body">
        <div className="listed-images">
          <ul>
            {res.items.map(item => {
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
