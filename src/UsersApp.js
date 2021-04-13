import React, {Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Album from './Album';

class UsersApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      data: [],
      isEmptyState: true,
      albumList: [],
      imageList: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  UserFetch = (URL) => {
    this.setState({...this.state, isLoaded: true});
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        this.setState({data: result, isLoaded: true})
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
        //console.log('Fetch album result', this.state.albumList);
      })
      .catch(error => {
        console.log(error);
        this.setState({...this.state, isLoaded: false});
      });
  };

  // ImageFetch = (URL) => {
  //   this.setState({...this.state, isLoaded: true});
  //   fetch(URL)
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({
  //         ...this.state,
  //         imageList: result, 
  //         isLoaded: true
  //       });
  //       // show the result
  //       console.log('Fetch image result', this.state.imageList);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({...this.state, isLoaded: false});
  //     });
  // };

  handleClick = (id) => {
    this.viewAlbumsByUser(id);
    this.AlbumFetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`, {});
  }

  closeBtn = () =>  {
    this.setState({isAddTripState: false});
  }

  // handleImageClick = (id) => {
  //   this.viewImagesByUser(id);
  //   this.ImageFetch(`https://jsonplaceholder.typicode.com/potos?userId=${imageList.id}`, {});
  // }

  viewAlbumsByUser = (id) => {
    // get user id via click
    //console.log('user id clicked: ', id);
    this.setState({
      ...this.state,
      selectedUser: id
    })
  }

  // viewImagesByUser = (id) => {
  //   // get user id via click
  //   console.log('Album id clicked: ', id);
  //   this.setState({
  //     ...this.state,
  //     selectedAlbum: id
  //   })
  // }

  componentDidMount() {
    //console.log('Component Did Mount');
    this.UserFetch('https://jsonplaceholder.typicode.com/users', {});
  }

  render() {
    const { error, data, isLoaded, selectedUser, albumList } = this.state;

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
                  <li key={k} className={`user-item-${id}`} onClick={() => this.handleClick(id)} >
                    <p>Name:<br/> {name} <br/> 
                    <span>username: <br/> {username}</span> <br/> 
                    <span>website:<br/> {website}</span> <br/></p>
                  </li>
                )}
              )}
            </ul>

            {this.state.isAddTripState && 
              <div id='albumlist'>
                <div className="close" onClick={() => this.closeBtn()}>X</div>
                <Album usersId={selectedUser} albums={albumList} />
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
