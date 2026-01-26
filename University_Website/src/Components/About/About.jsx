import React from 'react'
import about from '../../assets/about.png'
import Video_Play from '../../assets/play-icon.png'
import './About.css'
const About = () => {
  return (
      <div className='container about'>
          <div className="video-play">
              <img src={about} alt="" className='main-img' />
            <img src={Video_Play} id='two' alt="" />
          </div>
          <div id="text">
              <h3>About University</h3>
              <h1>Nurturing Tomorrow's <br />Leaders Today</h1>
              <p>
                  Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
              </p>
              <p>
                  With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
              </p>
              <p>
                  Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
              </p>
          </div>
     </div>
  )
}

export default About