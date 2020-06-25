import React from 'react';
import UseFetch from './Services/_UseFetch';

function  UsersApp() {

  const {items, error} = UseFetch('https://jsonplaceholder.typicode.com/users');

  if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
  if (!items) return <div className="loader">Loading...</div>;

  return (
    <div className="user-app">
      <div className="user-app__body">
        <div className="listed-images">
          <ul>
            {items.map(item => {
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

export default UsersApp;
