
import React from 'react';

const Footer = ({ footerTitle, footerClass }) => {
  
  return(
    <footer className={`gallery-app${footerClass}`}>
      <p>{footerTitle}. 2020</p>
    </footer>
  );
}
  
export default Footer;
