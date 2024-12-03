import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 



function Navbar() {
  return (
   <div>
     <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src='/images/logo.png' alt="E-Commerce Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
   </div>
  );
};

export default Navbar;