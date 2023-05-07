import React from 'react';
import '../main.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {(new Date()).getFullYear()} Fetch Your Doggo by Alexandru Cosovan. All rights reserved</p>
    </footer>
  );
};

export default Footer;
