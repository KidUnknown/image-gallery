import React from 'react';

const Album = (selectedUser) => {

  const { error, isLoaded, userId } = selectedUser;
  let albums = [];

  const fetchData = (URL) => {
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        console.log('Results: ', result);
        albums = result;
      })
      .catch(error => {
        console.log(error);
      });
  };

  fetchData(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`, {});

  if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
  if (isLoaded) return <div className="loader"></div>;

  return (
    <div className="listed-albums">
      <p>list of albums from user clicked to display in here.</p>
      <ul>
        {albums.map((album, k) => {
          //console.log('View: ', album);

          const {userId, id, title} = album;

          return(
            <li key={k} className={`album-item-${id}`}>
              <p>Title: {title} <br/> 
              <span>User ID: {userId}</span> <br/> 
              <span>Album ID: {id}</span> <br/></p>
            </li>
          )}
        )}

        <li>sssssssss-o-sssssssss</li>
      </ul>
    </div>
  );
}

export default Album;
