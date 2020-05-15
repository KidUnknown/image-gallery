import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

class GalleryApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="gallery-app">

          <Header heading={'Gallery list'} />

          <div className="gallery-app-body">
            <div className="listed-images">
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                    <span>Album: {item.albumId}</span> <span>item: {item.id}</span> 
                    <p>{item.title}</p> 
                    <img src={item.thumbnailUrl} alt='some alt' className='thumb' />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Footer footerDetails={'Jonathan L Theobald. 2020'} />

        </div>
      );
    }
  }
}

export default GalleryApp;
