import React, { useEffect, useState, useMemo } from 'react';
//import UseFetch from './Services/_UseFetch';
import UserList from './UserList';

export default function App() {

  const [dark, setDark] = useState(false);
  const [resourceType, setResourceType] = useState('users');
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  console.log('render');

  useEffect(() => {

    console.log('Resource changed', resourceType);

    setItems(items);
    setError(error);
    setIsLoaded(isLoaded);

    return () => {
      console.log('return from resource change');
    }
  }, [resourceType, items, error, isLoaded]);

  return (
    <div className='users-app'>
      <div className='users-app__body'>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('albums')}>Albums</button>
        <button onClick={() => setResourceType('photos')}>Photos</button>
        <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>

        <h1 style={themeStyles}>{resourceType}</h1>

        {/* {items.map(item => {
          return <UserList key={item.id} UserItems={JSON.stringify(item)} />
        })} */}

        <UserList error={error} resourceType={resourceType} isLoaded={isLoaded} items={items} />
      </div>
    </div>
  )
}
