import React, { useEffect, useState, useMemo } from 'react';
import UseFetch from './Services/_UseFetch';

export default function App() {

  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [dark, setDark] = useState(false);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  console.log('render');

  useEffect(() => {
    console.log('Resource changed');

    const {items, error, isLoaded} = UseFetch(`https://jsonplaceholder.typicode.com/${resourceType}`)

    return () => {
      console.log('return from resource change');
    }
  }, [resourceType])

  if (error) return <div className='error'>Error: {error.message}</div>
  if (!isLoaded) return <div className='loader'>Loading...</div>

  return (
    <div className='users-app'>
      <div className='users-app__body'>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>

        <h1>{resourceType}</h1>

        {items.map(item => {
          return <pre style={themeStyles} key={item.id}>{JSON.stringify(item)}</pre>
        })}
      </div>
    </div>
  )
}
