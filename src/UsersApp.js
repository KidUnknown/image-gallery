import React, {Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

class UsersApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      items: []
    }
  }

  UseFetch = (URL) => {
    this.setState({...this.state, isLoaded: true});
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        //console.log('Items: ', result);
        this.setState({items: result, isLoaded: true})
      })
      .catch(error => {
        console.log(error);
        this.setState({...this.state, isLoaded: false});
      });
  };

  componentDidMount() {
    this.UseFetch('https://jsonplaceholder.typicode.com/users', {});
  }

  render() {
    const { error, items, isLoaded } = this.state;

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
          <div className="listed-images">
            <ul>
              {items.map(item => {
                const {id, name, username, email, phone, website} = item;
                return(
                  <li key={id}>
                    <p>Name: {name} <br/> 
                    <span>username: {username}</span> <br/> 
                    <span>email: {email}</span> <br/>
                    <span>phone: {phone}</span> <br/>
                    <span>website: {website}</span> <br/></p>
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

export default UsersApp;
