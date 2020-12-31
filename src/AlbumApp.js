import React, {Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

class AlbumApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      albumItems: []
    }
  }
  
  // Fetch the list of albums
  fetchData = (URL) => {
    this.setState({...this.state, isLoaded: true});
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        this.setState({albumItems: result, isLoaded: true})
      })
      .catch(error => {
        console.log(error);
        this.setState({...this.state, isLoaded: false});
      });
  };

  // print the id of the clicked item, pass prop down to photo component
  handleClick = (id) => {
    console.log('Clicked Album: ', id);
  }

  componentDidMount() {
    this.fetchData('https://jsonplaceholder.typicode.com/albums', {});
  }

  render() {

    const {albumItems, isLoaded, error} = this.state;

    if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
    if (!isLoaded) return <div className="loader"></div>;

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
              {albumItems.map((item, k) => {
                const { id, userId, title } = item;
                return(
                  <li key={k} onClick={() => (this.handleClick(id))}>
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
}

export default AlbumApp;
