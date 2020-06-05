import React from 'react';

const useFetch = (url, options) => {

  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(url, options);
        const items = await res.json();
        setItems(items);
      } catch (error) {
        setError(error);
      }
    };
    fetchItems();
  }, [url, options]);

  return { items, error };
}

export default useFetch;
