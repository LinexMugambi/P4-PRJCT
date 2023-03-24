import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        {/* your brand logo or name goes here */}
      </div>
      <ul>
        
        <li>
          <Link to='/login'>Log out</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
