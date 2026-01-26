import React from 'react'
import shopperImage from '../../Assets/Frontend_Assets/logo.png'
import insatgrame from '../../Assets/Frontend_Assets/instagram_icon.png'
import watssup from '../../Assets/Frontend_Assets/whatsapp_icon.png'
import pIcon from '../../Assets/Frontend_Assets/pintester_icon.png'
import './footer.css'
const Footer = () => {
  return (
      <footer>
          <header>
              <p>Exclusive offers on your email</p>
              <span>Subscribe to our newsletter stay updated</span>
          </header>
          <div className="insert-email-and-subs">
              <input type="email" placeholder='Your email id' />
              <button className='subscribe'>Subscribe</button>
          </div>
          <div className="our-company">
              <img src={shopperImage} alt="" className='big'/><span>SHOPER</span>
              <ul className='liks'>
                   <li>Company</li>
                   <li>Products</li>
                   <li>Offices</li>
                   <li>About</li>
                   <li>Contact</li>
              </ul>
              <ul className='social-media-icons'>
                   <img src={insatgrame} alt="" />
                   <img src={pIcon} alt="" />
                   <img src={watssup} alt="" />
              </ul>
          </div>
      </footer>
  )
}

export default Footer