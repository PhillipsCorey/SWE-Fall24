import React from 'react';
import { NavElement } from './NavElement'

import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-options-wrapper'>
        <NavElement linkto="/" text="Home"/>
        <NavElement linkto="/login" text="Login"/>
        <NavElement linkto="/profile" text="Profile"/>
        <NavElement linkto="/schedule" text="Schedule"/>
        <NavElement linkto="/create" text="Create Event"/>
      </div>
    </nav>
  );
}

export default Navbar;