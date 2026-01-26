import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
const Nav = () => {
  return (
      <nav>
          <div className="log">
              <img src= {logo} alt="" />
          </div>
          <div className="navBar">
              <ul className="list-items">
                  <li>Home</li>
                  <li>About</li>
                  <li>Portfolio</li>
                  <li>Clients</li>
              </ul>
          </div>
          <button>
              <img src={contact} alt="" />
              <p>Contact Me</p>
          </button>
     </nav>
  )
}

export default Nav