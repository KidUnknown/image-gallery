import React from 'react';
import useFetch from './Services/_UseFetch';

const Photos = ({isLoaded, themeStyles, resourceType}) => {

  const {items, error} = useFetch(`https://jsonplaceholder.typicode.com/${resourceType}`, {});

  if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
  if (!isLoaded) return <div className="loader"></div>;

  return (
    <div className="photo-app" style={themeStyles}>
      <div className="photo-app__body">
        <div className="listed-images">
          <ul>
            {items.map(item => {
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

export default Photos;
