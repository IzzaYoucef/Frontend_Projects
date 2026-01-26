import React from 'react'
import mainImg from '../../Assets/Frontend_Assets/dropdown_icon.png'
import hiIcon from '../../Assets/Frontend_Assets/hand_icon.png'
import './Main.css' 
const Main = () => {
  return (
      <div>
          <div className="container">
              <div id='text'>
                  <h4>New Arrivals Only</h4>
                  <div className='no-wrap'>
                      <h2>New</h2>
                  <img src={hiIcon} alt="" id='no-wrap-img' />
                   </div>
                  <h2>Collections for</h2>
                  <h2>Everyone</h2>
                  <button id='Latest-col'>Latest Collections</button>
              </div>
              <div className='img-container'>
                   <img src={mainImg} alt="" />
              </div>
          </div>
     </div>
  )
}

export default Main