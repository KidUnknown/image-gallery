
import React from 'react';

const Header = (props) => {
  return(
    <header className='gallery-app-header'>
      <h1>{props.headingProp}</h1>
    </header>
  );
}

export default Header;
