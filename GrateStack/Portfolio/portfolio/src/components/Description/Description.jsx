import React from 'react'
import './Description.css'
import ui from '../../assets/ui-design.png'
import website from '../../assets/website-design.png'
import app from '../../assets/app-design.png'
const Description = () => {
  return (
      <div className='desc'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit deserunt beatae cumque nulla iure autem odio adipisci nemo, eos nobis eligendi aspernatur iusto consequatur accusamus quaerat at. Dolor, quibusdam iure!</p>
          <div className="more-options">
              <div className="info">
                  <img src={ui} alt="" />
                  <main>
                      <h1>Ui/Ux Designer</h1>
                      <p>There Is a demo text , you can write anything here</p>
                  </main>
              </div>
              <div className="info">
                  <img src={website} alt="" />
                  <main>
                      <h1>Website Designer</h1>
                      <p>There Is a demo text , you can write anything here</p>
                  </main>
              </div>
              <div className="info">
                  <img src={app} alt="" />
                  <main>
                      <h1>App Designer</h1>
                      <p>There Is a demo text , you can write anything here</p>
                  </main>
              </div>
          </div>
    </div>
  )
}

export default Description