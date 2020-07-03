import React from 'react';

const useFetch = (url, options) => {

  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState(null);

  const UsingFetch = () => {
    fetch(url, options)
      .then(response => response.json())
      .then(items => setItems(items))
      .catch(error => setError(error))
  };
  
  React.useEffect(() => {
    UsingFetch();
    return () => {};
  }, []);

  return { items, error };
}

export default useFetch;
