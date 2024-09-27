import { useState } from 'react'
import Header from './componant/Header/Header'
import Footer from './componant/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {


  // Outlet => all routes (page) are child of <Layout /> in this header and footer same and we have <outlet /> function which contain child (differ pages) now outlet have Home, About, Contact and User

  return (
    <>
      <Header /> 
      <Outlet /> {/*For render diffrent pager*/}
      <Footer />
    </>
  )
}

export default Layout
