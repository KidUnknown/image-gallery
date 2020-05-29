
import React from 'react';

const Footer = (props) => {
  const {footerTitle, footerClass} = props.footerEl;
  
  return(
    <footer className={`gallery-app${footerClass}`}>
      <p>{footerTitle}. 2020</p>
    </footer>
  );
}
  
export default Footer;
