import React, { useState } from 'react'


export default function Navbar() {
// found help with this navbar at https://bulma.io/documentation/components/navbar/ and https://dev.to/eclecticcoding/bulma-navbar-toogle-with-react-hooks-18ek
const [isActive, setIsActive] = useState(false);


  return (
    <nav className={`navbar ${isActive ? 'is-active' : ''}`} aria-label='main navigation'>
      <div className='navbar-brand'>
        <a
          onClick={() => {
            setIsActive(!isActive)
          }}
          role='button' 
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
       <div className='navbar-end'>
          <a className='navbar-item' href='/'>
            Home
          </a>

          <a className='navbar-item' href='/about'>
            About
          </a>

          <a className='navbar-item'>
            Login (coming soon...)
          </a>

        </div>
    </div>
  </nav>
  );
}