import React from 'react'
import img1 from '../../../Assets/Frontend_Assets/product_1.png'
import img2 from '../../../Assets/Frontend_Assets/product_2.png' 
import img3 from '../../../Assets/Frontend_Assets/product_3.png'
import img4 from '../../../Assets/Frontend_Assets/product_4.png'
import './Content.css'
const Content = () => {
  return (
      <div className='images'>
          <div className='img-desc'>
              <img src={img1} alt="" />
              <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
          </div>
           <div className='img-desc'>
              <img src={img2} alt="" />
              <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse
                   <h2 >500$</h2> <span>100$</span>
              </div>
          </div>
           <div className='img-desc'>
              <img src={img3} alt="" />
              <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse
                   <h2 >500$</h2> <span>100$</span>
              </div>
          </div>
           <div className='img-desc'>
              <img src={img4} alt="" />
              <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse
                   <h2 >500$</h2> <span>100$</span>
              </div>
          </div>
      </div>
      
  )
}

export default Content