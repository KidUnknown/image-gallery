import React, {Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

class AlbumApp extends Component {

  constructor(props) {
    super(props);
    
    props = {
      headerEl: {
        headerTitle: 'Albums listed', 
        headerClass: '__header', 
        headerRole: 'header'
      },
      footerEl: {
        footerTitle: 'Jonathan L Theobald', 
        footerClass: '__footer'
      }
    }

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      headerEl: props.headerEl,
      footerEl: props.footerEl
    }
  }

  fetchAlbums() {
    fetch("https://jsonplaceholder.typicode.com/albums", {mode: 'cors'})
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      }
    ).catch(
      (error) => {
        this.setState({
          isLoaded: false,
          error
        });
      }
    )
  }

  componentDidMount() {
    this.fetchAlbums();
  }

  render() {
    const { error, isLoaded, items, headerEl, footerEl } = this.state;

    if (error) return <div>Error: {error.message}</div>;
    if (!isLoaded) return <div className='loader'></div>;

    return (
      <div className="album-app">
        <Header headerEl={headerEl} />
        <div className="album-app__body">
          <div className="listed-images">
            <ul>
              {items.map(item => {
                const {userId, id, title} = item;
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
        <Footer footerEl={footerEl} />
      </div>
    );
  }
}

export default AlbumApp;
