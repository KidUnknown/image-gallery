import React from 'react';
import UseFetch from './Services/_UseFetch';

const UserList = ({error, isLoaded, resourceType}) => {

  const {items} = UseFetch(`https://jsonplaceholder.typicode.com/${resourceType}`, {});
  //console.log('Items', items);

  if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
  if (!isLoaded) return <div className="loader">Loading...</div>;

  return (
    <div className="user-app">
      <div className="user-app__body">
        <div className="listed-images">
          <ul>
            {JSON.stringify(items)}
            {/* {items.map((item, k) => {
              const { id, name, username, email, website } = item;
              return(
                <li key={k}>
                  <p>
                    <span>Name: {name}</span> <br/>
                    <span>Id: {id}</span> <br/>
                    <span>username: {username}</span> <br/>
                    <span>email: {email}</span> <br/>
                    <span>website: {website}</span>
                  </p>
                </li>
              )}
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserList;
