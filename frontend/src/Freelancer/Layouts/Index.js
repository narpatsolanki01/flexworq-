import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header/Index';
import Footer from './Footer/Index';
function Index() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Index