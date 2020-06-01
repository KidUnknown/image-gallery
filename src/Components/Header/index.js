
import React from 'react';

const Header = (props) => {
  const {headerTitle, headerClass, headerRole} = props.headerEl;

  return(
    <header role={headerRole} className={`gallery-app${headerClass}`}>
      <h1>{headerTitle}</h1>
    </header>
  );
}

export default Header;
