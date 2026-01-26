import React from 'react'
import './Campus.css' 
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
      <div className='Campus' id = 'campus'>
          <div className="campus-text all-text">
              <h3>Gallery</h3>
              <h1>Campus Phtos</h1>
            </div>
          <din className="images">
              <img src={gallery1} id = 'img'alt="" />
              <img src={gallery2} id = 'img' alt="" />
              <img src={gallery3} id = 'img' alt="" />
              <img src={gallery4} id = 'img' alt="" />
          </din>
          <button>See More Here <img src={arrow} alt="" /></button>
     </div>
  )
}

export default Campus