import React, {Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
class UsersApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      data: [],
      isEmptyState: true,
      albumList: [],
      imageList: [],
      selectedAlbum: null,
      selectedUser: null,
      selectedImage: null
    }
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleAlbumClick = this.handleAlbumClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  UserFetch = (URL) => {
    this.setState({...this.state, isLoaded: true});
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        this.setState({data: result, isLoaded: true});
      })
      .catch(error => {
        console.log(error);
        this.setState({...this.state, isLoaded: false});
      });
  };

  AlbumFetch = (URL) => {
    this.setState({...this.state, isLoaded: true});
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        this.setState({
          ...this.state,
          albumList: result, 
          isLoaded: true, 
          isAddAlbumTripState: true, 
          isEmptyState: false 
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({...this.state, isLoaded: false});
      });
  };

  ImageFetch = (URL) => {
    this.setState({...this.state, isLoaded: true});
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        this.setState({
          ...this.state,
          imageList: result, 
          isLoaded: true,
          isAddGalleryTripState: true,
          isEmptyState: false 
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({...this.state, isLoaded: false});
      });
  };

  FetchSelectedImage = (URL) => {
    this.setState({...this.state, isLoaded: true});
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        this.setState({
          ...this.state,
          selectedImage: result, 
          isLoaded: true,
          isAddImageTripState: true,
          isEmptyState: false 
        });
        console.log('Image feched: ', this.state.selectedImage);
      })
      .catch(error => {
        console.log(error);
        this.setState({...this.state, isLoaded: false});
      });
  };

  handleUserClick = (id) => {
    this.viewAlbumsByUser(id);
    this.AlbumFetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`, {});
  }

  handleAlbumClick = (selectedAlbum) => {
    this.viewImagesByAlbum(selectedAlbum);
    this.ImageFetch(`https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbum}`, {});
  }

  handleImageClick = (selectedImage) => {
    this.viewImageInAlbum(selectedImage);
    this.FetchSelectedImage(`https://jsonplaceholder.typicode.com/photos?id=${selectedImage}`, {});
  }

  viewAlbumsByUser = (id) => {
    this.setState({
      ...this.state,
      selectedUser: id
    })
  }

  viewImagesByAlbum = (id) => {
    this.setState({
      ...this.state,
      selectedAlbum: id
    })
  }

  viewImageInAlbum = (id) => {
    this.setState({
      ...this.state,
      selectedImage: id
    })
    console.log('Image: ', id);
  }

  closeAlbumBtn = () =>  {
    this.setState({isAddAlbumTripState: false});
  }

  closeGalleryBtn = () =>  {
    this.setState({isAddGalleryTripState: false});
  }

  closeImageBtn = () =>  {
    this.setState({isAddImageTripState: false});
  }

  componentDidMount() {
    this.UserFetch('https://jsonplaceholder.typicode.com/users', {});
  }

  render() {
    const { error, data, isLoaded } = this.state;
    //let SelectedState = this.state.selectedUser ? 'selected' : null;

    if (error) return <div className="error"><h3>Error:</h3> <p>{error.message}</p></div>;
    if (!isLoaded) return <div className="loader"></div>;

    return (
      <div className="user-app">

        <Header 
          headerTitle={'User List'} 
          headerClass={'__header'} 
          headerRole={'header'} 
        />

        <div className="user-app__body">
          <div className="listed-users">
            <ul>
              {data.map((item, k) => {
                const {id, name, username, website} = item;
                return(
                  <li key={k} className={`user-item-${id}`} onClick={() => this.handleUserClick(id)} >
                    <p>Name:<br/> {name} id: {id}<br/> 
                    <span>username: <br/> {username}</span> <br/> 
                    <span>website:<br/> {website}</span> <br/></p>
                  </li>
                )}
              )}
            </ul>

            {this.state.isAddAlbumTripState && 
              <div className="listed-albums">
                <div className="close" onClick={() => this.closeAlbumBtn()}>X</div>
                <ul>
                  {this.state.albumList.map((album, k) => {
                    const { id, userId, title} = album;
                    return(
                      <li key={k} className={`album-item-${id}`} onClick={() => this.handleAlbumClick(id)}>
                        <p>Title: {title} <br/> 
                        <span>User ID: {userId}</span> <br/> 
                        <span>Album ID: {id}</span> <br/></p>
                      </li>
                    )}
                  )}
                </ul>
              </div>
            }

            {this.state.isAddGalleryTripState && 
              <div className="listed-images">
                <div className="close" onClick={() => this.closeGalleryBtn()}>X</div>
                <p>List of images from album</p>
                <ul>
                  {this.state.imageList.map((image, k) => {
                    const {albumId, id, title, url, thumbnailUrl} = image;
                    return(
                      <li key={k} className={`album-item-${id}`} onClick={() => this.handleImageClick(id)}>
                        <p><img alt={"thumbnail"} src={thumbnailUrl} /> <br/>
                          <span>Album ID: {albumId}</span> <br/>
                          <span>ID: {id}</span> <br/> 
                          <span>Photo url: {url}</span> <br/>
                          <span>Title: {title}</span>
                        </p>
                      </li>
                    )}
                  )}
                </ul>
              </div>
            }

            {this.state.isAddImageTripState && 
              <div className={"image-wrapper"}>
                <div className={"image-card"}>
                  <div className="close" onClick={() => this.closeImageBtn()}>X</div>
                  {this.state.selectedImage.map((image, k) => {
                      const {albumId, id, title, url} = image;
                      return(
                        <div key={k} className={`image-${id}`}>
                          <p>Title: {title} <br/> 
                          <span>ID: {id}</span> <br/> 
                          <span>Album ID: {albumId}</span> <br/>
                          <img alt={"thumbnail"} src={url} /> <br/>
                          <span>Photo url: {url}</span> <br/></p>
                        </div>
                      )}
                    )}
                </div>
              </div>
            }
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

export default UsersApp;
