import React from 'react';

const Album = (props) => {

  const fetchData = (URL) => {
    this.setState({...this.state, props, isLoaded: true});
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        this.setState({userAlbums: result, props, isLoaded: true})
      })
      .catch(error => {
        console.log(error);
        this.setState({...this.state, props, isLoaded: false});
      });
  };

  //const userId = props.userId;

  // const handleClick = (id) => {
  //   console.log('Clicked item: ', id);
  //   getUserAlbums(id);
  // }

  // const getUserAlbums = (id) => {
  //   console.log('id', id);
  //   fetchData('https://jsonplaceholder.typicode.com/albums', {});
  // }

  //fetchData('https://jsonplaceholder.typicode.com/albums', {});

  if (props.error) return <div className="error"><h3>Error:</h3> <p>{props.error.message}</p></div>;
  if (!props.isLoaded) return <div className="loader"></div>;

  return (
    <div className="listed-albums">
      <ul>
        {props.userAlbums.filter((userId) => {
          return props.userAlbums.id;
        }).map((album, k) => {

          const { id, userId, title } = album;

          return(
            <li key={k}>
              <p>Album: {id} </p>
              <p>title: {title} user: {userId} </p>
            </li>
          )}
        )}
      </ul>
    </div>
  );
}

export default Album;
