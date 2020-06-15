import React, {Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UseFetch from './Services/_UseFetch';

class GalleryApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      items: []
    }
  }

  componentDidMount() {
    UseFetch('https://jsonplaceholder.typicode.com/photos');
  }

  render() {
    const { error, items } = this.state;

    if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
    if (!items) return <div className="loader"></div>;

    return (
      <div className="gallery-app">

        <Header 
          headerTitle={'Photo gallery'} 
          headerClass={'__header'} 
          headerRole={'header'} 
        />

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

        <Footer 
          footerTitle={'Jonathan L Theobald'} 
          footerClass={'__footer'} 
        />
        
      </div>
    );
  }
}

export default GalleryApp;
