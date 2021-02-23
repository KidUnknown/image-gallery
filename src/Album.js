import React from 'react';

const Album = (selectedUser) => {

  const { usersId, albums } = selectedUser;

  console.log('Albums: ', selectedUser.albums);

  // if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
  // if (!isLoaded) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;

  return (
    <div className="listed-albums">
      <p>list of albums from user clicked to display in here.</p>
      <p>{usersId}</p>
      <ul>
        {albums.map((album, k) => {
          //console.log('View: ', album);

          const { id, userId, title} = album;

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
