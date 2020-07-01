import React from 'react';
import UseFetch from './Services/_UseFetch';

const AlbumList = ({error, isLoaded, themeStyles}) => {

  const {items} = UseFetch('https://jsonplaceholder.typicode.com/albums', {});

  if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
  if (!isLoaded) return <div className="loader">Loading...</div>;

  return (
    <div className="album-app" style={themeStyles}>
      <div className="album-app__body">
        <div className="listed-images">
          <ul>
            {items.map((item) => {
              const {userId, id, title} = item;
              return(
                <li key={id}>
                  <span>User Id: {userId}</span> <br/> <span>item Id: {id}</span>
                  <span>Album Title: {title}</span>
                </li>
              )}
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AlbumList;
