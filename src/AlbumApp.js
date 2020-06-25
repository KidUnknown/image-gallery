import React, {Component} from 'react';

class AlbumApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      items: []
    }
  }

  fetchDataWithFetchAPI = (URL) => {
    this.setState({...this.state, isLoaded: true});
    fetch(URL)
      .then(response => response.json())
      .then(result => {
          this.setState({items: result, isLoaded: true})
      })
      .catch(error => {
          console.log(error);
          this.setState({...this.state, isLoaded: false});
      });
  };
  
  UseFetch = this.fetchDataWithFetchAPI;

  componentDidMount() {
    this.UseFetch('https://jsonplaceholder.typicode.com/albums', {});
  }

  render() {

    const {items, isLoaded, error} = this.state;

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
