import React from 'react';
import UseFetch from './Services/_UseFetch';

const UserList = ({isLoaded, themeStyles, resourceType}) => {

  const {items, error} = UseFetch(`https://jsonplaceholder.typicode.com/${resourceType}`, {});

  if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
  if (!isLoaded) return <div className="loader">Loading...</div>;

  return (
    <div className="user-list" style={themeStyles}>
      <div className="user-list__body">
        <div className="listed-users">
          <ul>
            {items.map((item) => {
              const { id, name, username, email, website } = item;
              return(
                <li key={id}>
                  <p>
                    <span>Name: {name}</span> <br/>
                    <span>Id: {id}</span> <br/>
                    <span>username: {username}</span> <br/>
                    <span>email: {email}</span> <br/>
                    <span>website: {website}</span>
                  </p>
                </li>
              )}
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserList;
