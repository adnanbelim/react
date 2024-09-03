import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import  Home  from './Home'
import Contact from './Contact'
import About from './About'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/About' element={<About />} />
    </Routes>
  )
}

export default App
