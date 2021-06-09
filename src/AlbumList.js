import React from 'react';
import UseFetch from './Services/_UseFetch';

const AlbumList = ({isLoaded, themeStyles, resourceType}) => {

  const {items, error} = UseFetch(`https://jsonplaceholder.typicode.com/${resourceType}`, {});

  if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
  if (!isLoaded) return <div className="loader">Loading...</div>;

  return (
    <div className="album-list" style={themeStyles}>
      <div className="album-list__body">
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
