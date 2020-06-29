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
      isEmptyState: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  UseFetch = (URL) => {
    this.setState({...this.state, isLoaded: true});
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        //console.log('userItems: ', result);
        this.setState({data: result, isLoaded: true})
      })
      .catch(error => {
        console.log(error);
        this.setState({...this.state, isLoaded: false});
      });
  };

  handleClick = (id) => {
    //console.log('Clicked item: ', id);
    this.viewAlbumsByUser(id);
  }

  viewAlbumsByUser = (id) => {
    console.log('user id clicked: ', id);
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }

  componentDidMount() {
    this.UseFetch('https://jsonplaceholder.typicode.com/users', {});
  }

  render() {
    const { error, data, isLoaded, userAlbums } = this.state;

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
                    <p>Name: {name} <br/> 
                    <span>username: {username}</span> <br/> 
                    <span>website: {website}</span> <br/></p>
                  </li>
                )}
              )}
            </ul>

            <div id='albumlist' className='closed'>
              <p>User created albums here</p>
              <Album name={userAlbums.username} AlbumId={userAlbums.id} title={userAlbums.title} />
            </div>

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
