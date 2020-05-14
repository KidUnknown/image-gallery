import React from 'react';

import './GalleryApp.css';

class GalleryApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      logo: "/static/media/logo.5d5d9eef.svg"
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
    const { error, isLoaded, items, logo } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <img src={logo} className="gallery-app-logo" alt="logo"></img>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.id} {item.albumId} {item.title} {item.thumbnailUrl}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // return (
    //   <div className="gallery-app">
    //     <header className="gallery-app-header">
    //     <img src={logo} className="gallery-app-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //     </header>
    //     <div className="gallery-app-body">
    //       <div className="listed-images">

    //       </div>
    //     </div>
    //     <footer>
    //       <p>&copy; KidUnknown. 2020</p>
    //     </footer>
    //   </div>
    // );
  }
}

export default GalleryApp;
