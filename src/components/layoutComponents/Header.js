import React from 'react';
import logo from '../../images/logo.png';

function Header() {
  return (
    <header>
      <img src={ logo } alt="logo" className='logo'/>
      <h1>Ultimate database:</h1>
    </header>
  )
}

export default Header;