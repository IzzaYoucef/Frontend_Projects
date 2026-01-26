import React from 'react'
import manOffre from '../Assets/Frontend_Assets/banner_mens.png'
import img1 from '../Assets/Frontend_Assets/product_14.png'
import img2 from '../Assets/Frontend_Assets/product_15.png'
import img3 from '../Assets/Frontend_Assets/product_16.png'
import img4 from '../Assets/Frontend_Assets/product_17.png'
import img5 from '../Assets/Frontend_Assets/product_18.png'
import img6 from '../Assets/Frontend_Assets/product_19.png'
import img7 from '../Assets/Frontend_Assets/product_20.png'
import img8 from '../Assets/Frontend_Assets/product_21.png'
import img9 from '../Assets/Frontend_Assets/product_22.png'
import img10 from '../Assets/Frontend_Assets/product_23.png'
import img11 from '../Assets/Frontend_Assets/product_24.png'
import './CssPages/Man.css'
const Man = () => {
  return (
    <div className='man-banner'>
      <div className="own-img">
         <img src= {manOffre} alt="" />
      </div>
      <div className='text'>
         <h4>Shopping 1-12</h4><span>Out Of 54</span>
     </div>
      <div className="imgs">
        <div> 
          <img src={img1} alt="" />
           <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
          
        </div> 
        
        <div>
          <img src={img2} alt="" />
            <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
        </div>
        <div>
          <img src={img3} alt="" />
            <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
       </div>
        <div>
          <img src={img4} alt="" />
            <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
        </div>
        <div>
          <img src={img5} alt="" />
            <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
       </div>
        <div>
          <img src={img6} alt="" />
            <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
       </div>
        <div>
          <img src={img7} alt="" />
             <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
       </div>
        <div>
          <img src={img8} alt="" /> 
             <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
        </div>
        <div>
          <img src={img9} alt="" />
             <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
       </div>
        <div>
          <img src={img10} alt="" />
             <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
       </div>
        <div>
          <img src={img11} alt="" />
             <div className="description">
                  Striped Flutter Over Color Peplium Hern Blouse <br />
                  <h2 >500$</h2> <span>100$</span>
              </div>
       </div>
      </div>
    </div>
  )
}

export default Man