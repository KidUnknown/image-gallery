
import React from 'react';

const Header = ({ headerTitle, headerClass, headerRole }) => {

  return(
    <header role={headerRole} className={`gallery-app${headerClass}`}>
      <h1>{headerTitle}</h1>
    </header>
  );
}

export default Header;
