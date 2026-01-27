import React from 'react'
import './programs.css'
import progOne from '../../assets/program-1.png'
import progTwo from '../../assets/program-2.png' 
import progThree from '../../assets/program-3.png'
import iconOne from '../../assets/program-icon-1.png'
import iconTwo from '../../assets/program-icon-2.png'
import iconThree from '../../assets/program-icon-3.png'
const programs = () => {
  return (
    <div className='programs container' id='about'>
      <div className="text-programs">
        <h4>Our Programs</h4>
        <h1>What We Offer</h1>
      </div>
      <div className="images"> 
        <img src={progOne} alt=""  className='img un'/> <img src={iconOne} className = 'icon one' alt="" />
        <img src={progTwo} alt="" className='img deux' /><img src={iconTwo}  className = 'icon two ' alt="" />
        <img src={progThree} alt="" className='img trois'/><img src={iconThree}  className = 'icon three' alt="" />
      </div>
    </div>
  )
}

export default programs