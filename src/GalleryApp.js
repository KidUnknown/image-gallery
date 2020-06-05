import React from 'react';
import useFetch from './Services/_UseFetch';

function GalleryApp() {

  const res = useFetch('https://jsonplaceholder.typicode.com/photos', {});

  if (res.error) return <div className="error"><h3>Error:</h3> <p>{res.error.message}</p></div>;
  if (!res.items) return <div className="loader"></div>;

  return (
    <div className="gallery-app">
      <div className="gallery-app__body">
        <div className="listed-images">
          <ul>
            {res.items.map(item => {
              const {albumId, id, title, thumbnailUrl, url} = item;
              return(
                <li key={id}>
                  <span>Album: {albumId}</span> <br/> <span>item: {id}</span>
                  <img src={thumbnailUrl} alt={title} data-uri-large={url} className="thumb" />
                </li>
              )}
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GalleryApp;
