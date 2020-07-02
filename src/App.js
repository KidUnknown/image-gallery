import React, { useEffect, useState, useMemo } from 'react';
//import { Route, Switch, Redirect } from 'react-router-dom';
import UserList from './UserList';
import AlbumList from './AlbumList';
import Photos from './Photos';

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

  useEffect(() => {
    setItems(items);
    setError(error);
    setIsLoaded(isLoaded);

    return () => {
      console.log('return from resource change', resourceType);
    }
  }, [items, error, isLoaded, resourceType]);

  return (
    <div className='users-app'>
      <div className='users-app__body'>

        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('albums')}>Albums</button>
        <button onClick={() => setResourceType('photos')}>Photos</button>
        <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
        <h1 style={themeStyles}>{resourceType}</h1>

        {resourceType === 'users' && <UserList themeStyles={themeStyles} error={error} isLoaded={isLoaded} resourceType={resourceType} items={items} />}
        {resourceType === 'albums' && <AlbumList themeStyles={themeStyles} error={error} isLoaded={isLoaded} resourceType={resourceType} items={items} />}
        {resourceType === 'photos' && <Photos themeStyles={themeStyles} error={error} isLoaded={isLoaded} resourceType={resourceType} items={items} />}

      </div>
    </div>
  )
}
