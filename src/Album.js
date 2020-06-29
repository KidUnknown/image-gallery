import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

const Album = (props) => {

  // const fetchData = (URL) => {
  //   this.setState({...this.state, isLoaded: true});
  //   fetch(URL)
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({data: result, isLoaded: true})
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({...this.state, isLoaded: false});
  //     });
  // };

  // const handleClick = (id) => {
  //   console.log('Clicked item: ', id);
  //   getUserAlbums(id);
  // }

  // const getUserAlbums = (id) => {
  //   console.log('id', id);
  //   fetchData('https://jsonplaceholder.typicode.com/albums', {});
  // }

  if (props.error) return <div className="error"><h3>Error:</h3> <p>{props.error.message}</p></div>;
  if (!props.isLoaded) return <div className="loader"></div>;

  return (
    <div className="album-app">
      <Header 
        headerTitle={'Album List'} 
        headerClass={'__header'} 
        headerRole={'header'} 
      />
      <div className="album-app__body">
        <div className="listed-albums">
          <ul>
            {props.userAlbums.map((album, k) => {

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
      </div>
      <Footer 
        footerTitle={'Jonathan L Theobald'} 
        footerClass={'__footer'} 
      />
    </div>
  );
}

export default Album;
