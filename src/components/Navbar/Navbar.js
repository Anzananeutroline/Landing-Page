import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
      < div className='navbar'>
          <div className='logo'>snap</div>
          <ul className='nav-links'>
              <li><a href="www.google.com"><select name="features" id="features">
              <option value="feature1">Feature</option>
              <option value="feature2">Feature</option>
              </select></a></li>
          <li><a href="www.google.com"><select name="company" id="company">
              <option value="Company1">Company</option>
              <option value="Company">Company</option>
              </select></a></li>
          <li><a href="www.google.com">Careers</a></li>
          <li><a href="www.google.com">About</a></li>
              </ul>
          <div className='buttons'>
              <button><a href="www.google.com">Login</a></button>
              <button id='register-btn'><a href="www.google.com">Register</a></button>
              </div>
    </div>
  )
}

export default Navbar