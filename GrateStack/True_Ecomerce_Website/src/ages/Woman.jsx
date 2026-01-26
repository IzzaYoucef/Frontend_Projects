import React from 'react'
import manOffre from '../Assets/Frontend_Assets/banner_women.png'
import img1 from '../Assets/Frontend_Assets/product_1.png'
import img2 from '../Assets/Frontend_Assets/product_2.png'
import img3 from '../Assets/Frontend_Assets/product_3.png'
import img4 from '../Assets/Frontend_Assets/product_4.png'
import img5 from '../Assets/Frontend_Assets/product_5.png'
import img6 from '../Assets/Frontend_Assets/product_6.png'
import img7 from '../Assets/Frontend_Assets/product_7.png'
import img8 from '../Assets/Frontend_Assets/product_8.png'
import img9 from '../Assets/Frontend_Assets/product_9.png'
import img10 from '../Assets/Frontend_Assets/product_10.png'
import img11 from '../Assets/Frontend_Assets/product_11.png'
import './CssPages/Man.css'
const Woman = () => {
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
    <h2>500$</h2> <span>100$</span>
  </div>
</div>

<div>
  <img src={img2} alt="" />
  <div className="description">
    Classic Summer Dress with Floral Print <br />
    A perfect outfit for any casual outing, designed with a lightweight fabric.
  </div>
</div>

<div>
  <img src={img3} alt="" />
  <div className="description">
    Trendy Denim Jacket <br />
    <h2>120$</h2> <span>90$</span>
  </div>
</div>

<div>
  <img src={img4} alt="" />
  <div className="description">
    Elegant Silk Evening Gown <br />
    A sleek and timeless gown for special occasions, available in several colors.
  </div>
</div>

<div>
  <img src={img5} alt="" />
  <div className="description">
    Cozy Winter Sweater <br />
    <h2>80$</h2> <span>60$</span>
  </div>
</div>

<div>
  <img src={img6} alt="" />
  <div className="description">
    Casual Cotton T-Shirt <br />
    Soft and breathable, this shirt offers both comfort and style for everyday wear.
  </div>
</div>

<div>
  <img src={img7} alt="" />
  <div className="description">
    Classic Leather Boots <br />
    <h2>150$</h2> <span>120$</span>
  </div>
</div>

<div>
  <img src={img8} alt="" />
  <div className="description">
    Lightweight Scarf <br />
    A versatile accessory that can elevate any outfit, made from 100% organic cotton.
  </div>
</div>

<div>
  <img src={img9} alt="" />
  <div className="description">
    Sleek Sports Shoes <br />
    <h2>200$</h2> <span>180$</span>
  </div>
</div>

<div>
  <img src={img10} alt="" />
  <div className="description">
    Vintage Sunglasses <br />
    A stylish pair of sunglasses with UV protection, perfect for sunny days.
  </div>
</div>

<div>
  <img src={img11} alt="" />
  <div className="description">
    Modern Handbag <br />
    <h2>300$</h2> <span>250$</span>
  </div>
</div>

      </div>
    </div>
  )
}

export default Woman