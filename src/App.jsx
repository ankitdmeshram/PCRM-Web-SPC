import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer /> 
    </>
  )
}

export default App