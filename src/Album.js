import React from 'react';

const Album = (props) => {

  // const fetchData = (URL) => {
  //   this.setState({...this.state, isLoaded: true});
  //   fetch(URL)
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({userAlbums: result, isLoaded: true})
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({...this.state, isLoaded: false});
  //     });
  // };

  //fetchData('https://jsonplaceholder.typicode.com/albums', {});

  if (props.error) return <div className="error"><h3>Error:</h3> <p>{props.error.message}</p></div>;
  if (!props.isLoaded) return <div className="loader"></div>;

  return (
    <div className="listed-albums">
      <p>
        list of albums from user clicked to display in here.
      </p>
    </div>
  );
}

export default Album;
