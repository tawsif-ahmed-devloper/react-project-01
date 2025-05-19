import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../menu/Menu'
import Footer from '../footer/Footer'

const RootLayout = () => {
  return (
    <>
    <Menu/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default RootLayout