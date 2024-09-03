import { useState } from 'react'
import Header from './componant/Header/Header'
import Footer from './componant/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {


  return (
    <>
      <Header /> 
      <Outlet /> {/*For render diffrent pager*/}
      <Footer />
    </>
  )
}

export default Layout
