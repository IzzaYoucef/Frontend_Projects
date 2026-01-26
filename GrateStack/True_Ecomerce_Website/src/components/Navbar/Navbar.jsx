import React, { useEffect, useState } from 'react'
import logo from '../../Assets/Frontend_Assets/logo.png'
import shop from '../../Assets/Frontend_Assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [notificationNumber, setNumber] = useState(0); 
    const handleClick = () => {
        setNumber((n) => n += 1);
    }
   
  return (
      <nav>
          <div className='logo' >
              <img src={logo} alt="" />
              <h2>Shoppee</h2>
          </div>
          <ul className="nav-list">
              <li><Link to={'/'}>Shop</Link></li>
              <li><Link to={'/Men'}>Man</Link></li>
              <li><Link to={'/Woman'}>Woman</Link></li>
              <li><Link to={'/Kids'}>Kids</Link></li>
          </ul>
          <div className='contact-shop'>
              <button className='login' onClick={() => { handleClick() }}><Link to={'/Login'}>Login</Link></button>
              <div className="shop">
                  <span>{notificationNumber}</span>
                    <img src={shop} alt="" />
             </div>
          </div>

    </nav>
  )
}

export default Navbar