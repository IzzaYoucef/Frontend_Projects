import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
const Navbar = () => {
    const [state, setState] = useState(false); 
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setState(true) : setState(false);
    })
    })
    

  return (
      <nav className= {`container ${state === true ? 'dark-nav' : ''}`}>
         <img src = {logo} alt="aadda" className='logo'/>
          <div className="nav-button">
              <ul className='link-list'>
                  <li><Link to = 'home' offset = {0} smooth = {true} duration = {500} >Home</Link></li>
                  <li><Link to = 'about' offset = {-100} smooth = {true} duration = {500}>About us</Link></li>
                  <li><Link to = 'campus' offset = {-100} smooth = {true} duration = {500}>Campus</Link></li>
                  <li><Link to = 'test' offset = {-100} smooth = {true} duration = {500}>Testimonials</Link></li>
                  <li> <button className='contact'><Link to = 'contact' offset = {-100} smooth = {true} duration = {500}>Contact us</Link></button></li>
              </ul>
             
          </div>
      </nav>
  )
}

export default Navbar