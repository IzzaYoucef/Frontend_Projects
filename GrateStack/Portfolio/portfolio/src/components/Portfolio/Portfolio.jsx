import React from 'react'
import Title from '../Title/Title'
import './Portfolio.css'
import p1 from '../../assets/portfolio-1.png'
import p2 from '../../assets/portfolio-2.png'
import p3 from '../../assets/portfolio-3.png'
import p4 from '../../assets/portfolio-4.png'
import p5 from '../../assets/portfolio-5.png'
import p6 from '../../assets/portfolio-6.png'
const Portfolio = () => {
  return (
      <div className='port'>
          <Title title={'My Portfolio'} /> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi delectus aperiam sequi quis, porro illo labore accusamus commodi omnis totam earum at ullam praesentium magnam dicta reprehenderit impedit iure.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et enim adipisci dolorem cum nobis iusto ipsum quo hic eos, iste beatae blanditiis delectus impedit nam? Voluptas voluptates saepe dolore!
          </p>
          <div className="galery">
              <div className='top'>
                  <img src= {p1} alt="" />
                  <img src= {p2} alt="" />
                  <img src= {p3} alt="" />
              </div>
              <div className='bottom'>
                <img src= {p4} alt="" />
                <img src= {p5} alt="" />
                <img src= {p6} alt="" />
              </div>
          </div>
     </div>
  )
}

export default Portfolio