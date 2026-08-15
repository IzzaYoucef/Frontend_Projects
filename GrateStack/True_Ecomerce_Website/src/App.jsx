import React from 'react'
import Navbar from './components/Navbar/Navbar'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './ages/Home'
import Man from './ages/Man'
import Woman from './ages/Woman'
import Kids from './ages/Kids'
import Login from './ages/Login'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Men' element={<Man/>} />
           <Route path='/Woman' element={<Woman/>} />
          <Route path='/Kids' element={<Kids />} />
          <Route path='/Login' element = {<Login/>}></Route>
         </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  )
}

export default App