import React, {Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

class GalleryApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  fetchAlbums() {
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
    this.fetchAlbums();
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) return <div>Error: {error.message}</div>;
    if (!isLoaded) return <div className='loader'></div>;

    return (
      <div className="gallery-app">
        <Header headingProp={'Gallery list'} />
        <div className="gallery-app-body">
          <div className="listed-images">
            <ul>
              {items.map(item => {
                const {albumId, id, title, thumbnailUrl, url} = item;
                return(
                  <li key={id}>
                    <span>Album: {albumId}</span> <span>item: {id}</span> 
                    <img src={thumbnailUrl} alt={title} data-uri={url} className='thumb' />
                  </li>
                )}
              )}
            </ul>
          </div>
        </div>
        <Footer footerProp={'Jonathan L Theobald. 2020'} />
      </div>
    );
  }
}

export default GalleryApp;
