import React from 'react';
import UseFetch from './Services/_UseFetch';

const AlbumList = ({error, isLoaded, resourceType}) => {

  const {items} = UseFetch(`https://jsonplaceholder.typicode.com/${resourceType}`, {});

  if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
  if (!isLoaded) return <div className="loader">Loading...</div>;

  return (
    <div className="user-app">
      <div className="user-app__body">
        <div className="listed-images">
          <ul>
            {/* {JSON.stringify(items)} */}
            {items.map((item, k) => {
              const {userId, id, title} = item;
              return(
                <li key={k}>
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
