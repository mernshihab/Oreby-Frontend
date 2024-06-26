import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import SearceBar from './SearceBar'

const RootLayout = () => {
  return (
    <>
        <NavBar></NavBar>
        <SearceBar></SearceBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default RootLayout