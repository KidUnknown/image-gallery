import React, {Component} from 'react';
import UseFetch from './Services/_UseFetch';

class AlbumApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      items: []
    }
  }

  // componentDidMount() {
  //   //this.UseFetch('https://jsonplaceholder.typicode.com/albums');
  //   const res = UseFetch('https://jsonplaceholder.typicode.com/albums');

  //   const {items, isLoaded, error} = res;
  // }

  render() {

    //const {items, error, isLoaded} = UseFetch('https://jsonplaceholder.typicode.com/albums');

    const res = UseFetch('https://jsonplaceholder.typicode.com/albums');

    const {items, isLoaded, error} = res;

    if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
    if (!isLoaded) return <div className="loader"></div>;

    return (
      <div className="album-app">
        <div className="album-app__body">
          <div className="listed-images">
            <ul>
              {items.map(item => {
                const { id, userId, title } = item;
                return(
                  <li key={id}>
                    <p>Album: {id} </p>
                    <p>title: {title} user: {userId} </p>
                  </li>
                )}
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumApp;
