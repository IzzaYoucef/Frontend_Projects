import React from 'react'
import offre from '../../Assets/Frontend_Assets/exclusive_image.png'
import './Offre.css'
const Offre = () => {
  return (
      <div className=' vol-two'>
          <div className="text--">
              <h1>Exclusive</h1>
              <h1>Offres For You</h1>
              <span>Only On Best Sellers Products</span> <br />
               <button>Check Now</button>
          </div>
          <div className="img-vol-two">
              <img src={offre} alt="" />
          </div>
         
    </div>
  )
}

export default Offre