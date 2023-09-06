import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <h1 to='/' className='navbar-logo'>
             EverMeet.
            <i class='fab fa-typo3' />
          </h1>
        </div>
      </nav>
    </>
  );
}

export default Navbar;