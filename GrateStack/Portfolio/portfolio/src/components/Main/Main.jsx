import React from 'react'
import person from '../../assets/image.png'
import hire from '../../assets/hireme.png'
import './Main.css'
const Main = () => {
  return (
      <div>
          <div className="container">
              <aside className='left-content'>
                  <div>
                      <p>hello , 
                          <p className='weigth' >I'm <span>Bissou</span></p>
                          <p>Webste Designer</p>
                          <span>I am intereting in HTML , CSS , JavaScript and React Js in frontend <br /> <span>and I wich to Become a FullStack Web Developer In The Future , Now I am a Student <br /> In Higher Scool Of Computer Science And Dregital Technologies ESTIN Of Bejaia</span> </span>
                      </p>
                  </div>
                  <button> <img src= {hire} alt="" /> <p>Hire Me</p></button>
              </aside>
              <section>
                  <img src= {person} alt="" />
              </section>
          </div>
      </div>
  )
}

export default Main