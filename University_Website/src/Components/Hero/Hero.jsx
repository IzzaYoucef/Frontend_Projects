import React from 'react'
import './Hero.css'
import leftArrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
      <div className="hero" id='home'>
          <div className="text">
        <h2 id='Up'>We Ensure better education </h2>
          <br />
          <h2 id='down'>for a better world</h2>
          </div>
          <div className="small-text">
              Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and
                  <br /><span>experiences needed to excel in the dynamic field of education</span>
          </div>
          <button>Explore More <img src={leftArrow} alt="" /></button>
      </div>
      
  )
}

export default Hero