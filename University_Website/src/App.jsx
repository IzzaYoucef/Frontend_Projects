import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
// import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Programs></Programs>
      <About></About>
      <Campus></Campus>
      {/* <Testimonials></Testimonials> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App