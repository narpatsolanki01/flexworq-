import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header/Index';
import Footer from '../Layouts/Footer/Index';
function Index() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Index