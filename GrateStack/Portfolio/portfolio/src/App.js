import React from 'react'
import Nav from './components/Navbar/Nav'
import Main from './components/Main/Main'
import Title from './components/Title/Title'
import Description from './components/Description/Description'
import Portfolio from './components/Portfolio/Portfolio'
import './App.css'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Nav />
      <Main />
      <div className='pp'>
          <Title title={'What I Can Do'} />
       </div>
      <Description />
      <Portfolio />
      <Contact/>
    </div>
  )
}

export default App