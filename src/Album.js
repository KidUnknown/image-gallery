import React from 'react';

const Album = (selectedUser) => {
  const { albums } = selectedUser;

  return (
    <div className="listed-albums">
      <ul>
        {albums.map((album, k) => {

          const { id, userId, title} = album;
          
          return(
            <li key={k} className={`album-item-${id}`}>
              <p>Title: {title} <br/> 
              <span>User ID: {userId}</span> <br/> 
              <span>Album ID: {id}</span> <br/></p>
            </li>
          )}
        )}
      </ul>

      {/* {albums.isAddTripState && 
          <div id='imagelist'>
            <div className="close">X</div>
            <Gallery usersId={selectedUser} albums={albumList} />
          </div>
        } */}
    </div>
  );
}

export default Album;
