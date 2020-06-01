import React, {Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

class GalleryApp extends Component {

  constructor(props) {
    super(props);
    
    props = {
      headerEl: {
        headerTitle: 'Photo gallery', 
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

  fetchPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos", {mode: 'cors'})
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
    this.fetchPhotos();
  }

  render() {
    const { error, isLoaded, items, headerEl, footerEl } = this.state;

    if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
    if (!isLoaded) return <div className="loader"></div>;

    return (
      <div className="gallery-app">
        <Header headerEl={headerEl} />
        <div className="gallery-app__body">
          <div className="listed-images">
            <ul>
              {items.map(item => {
                const {albumId, id, title, thumbnailUrl, url} = item;
                return(
                  <li key={id}>
                    <span>Album: {albumId}</span> <br/> <span>item: {id}</span>
                    <img src={thumbnailUrl} alt={title} data-uri-large={url} className="thumb" />
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

export default GalleryApp;
