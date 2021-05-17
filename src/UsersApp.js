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
      selectedUser: null
    }
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleAlbumClick = this.handleAlbumClick.bind(this);
  }

  UserFetch = (URL) => {
    this.setState({...this.state, isLoaded: true});
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        this.setState({data: result, isLoaded: true});
        console.log('Fetch Users result', this.state.data);
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
          isAddTripState: true, 
          isEmptyState: false 
        });
        // show the result
        console.log('Fetch albums result', this.state.albumList);
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
        // show the result
        console.log('Fetch images result', this.state.imageList);
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
    this.viewImagesByUser(selectedAlbum);
    this.ImageFetch(`https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbum}`, {});
  }

  // handleImageClick = (selectedImage) => {
  //   //console.log('test', selectedImage);
  //   this.viewImagesByUser(selectedImage);
  //   //this.ImageFetch(`https://jsonplaceholder.typicode.com/photos?albumId=${selectedImage}`, {});
  // }

  viewAlbumsByUser = (id) => {
    // get user id via click
    console.log('user id clicked: ', id);
    this.setState({
      ...this.state,
      selectedUser: id
    })
  }

  viewImagesByUser = (id) => {
    // get album id via click
    this.setState({
      ...this.state,
      selectedAlbum: id
    })
    console.log('Album id clicked: ', id);
  }

  // viewImageInAlbum = (id) => {
  //   // get user id via click
  //   this.setState({
  //     ...this.state,
  //     selectedImage: id
  //   })
  //   console.log('Album id clicked: ', id);
  // }

  closeBtn = () =>  {
    this.setState({isAddTripState: false});
  }

  closeGalleryBtn = () =>  {
    this.setState({isAddGalleryTripState: false});
  }

  // closeImageBtn = () =>  {
  //   this.setState({isAddGalleryImageTripState: false});
  // }

  componentDidMount() {
    this.UserFetch('https://jsonplaceholder.typicode.com/users', {});
  }

  render() {
    const { error, data, isLoaded } = this.state;
    let SelectedState = this.state.selectedUser ? 'click-state' : 'base-state';

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
                  <li key={k} className={`user-item-${id} ${SelectedState}`} onClick={() => this.handleUserClick(id)} >
                    <p>Name:<br/> {name} id: {id}<br/> 
                    <span>username: <br/> {username}</span> <br/> 
                    <span>website:<br/> {website}</span> <br/></p>
                  </li>
                )}
              )}
            </ul>

            {this.state.isAddTripState && 
              <div className="listed-albums">
                <div className="close" onClick={() => this.closeBtn()}>X</div>
                <ul>
                  {this.state.albumList.map((album, k) => {
          
                    const { id, userId, title} = album;
                    
                    return(
                      <li key={k} className={`album-item-${id} ${SelectedState}`} onClick={() => this.handleAlbumClick(id)}>
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
                      <li key={k} className={`album-item-${id}`}>
                        <p>Title: {title} <br/> 
                        <span>ID: {id}</span> <br/> 
                        <span>Album ID: {albumId}</span> <br/>
                        <img alt={"thumbnail"} src={thumbnailUrl} /> <br/>
                        <span>Photo url: {url}</span> <br/></p>
                      </li>
                    )}
                  )}
                </ul>
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
