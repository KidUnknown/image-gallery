import React from 'react';

const Gallery = (selectedAlbum) => {

  const { error, isLoaded, albumId } = selectedAlbum;
  
  let pictures = [];

  const fetchData = (URL) => {
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        console.log('Results: ', result);
        pictures = result;
      })
      .catch(error => {
        console.log(error);
      });
  };

  fetchData(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, {});

  if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
  if (!isLoaded) return <div className="loader"></div>;

  return (
    <div className="listed-albums">
      <p>{userId.id}list of albums from user clicked to display in here.</p>
      <ul>
        {pictures.map((image, k) => {
          //console.log('View: ', album);

          const {userId, id, title} = image;

          return(
            <li key={k} className={`album-item-${id}`}>
              <p>Title: {title} <br/> 
              <span>User ID: {userId}</span> <br/> 
              <span>Album ID: {id}</span> <br/></p>
            </li>
          )}
        )}

        <li>sssssssss-gallery-sssssssss</li>
      </ul>
    </div>
  );
}

export default Gallery;
