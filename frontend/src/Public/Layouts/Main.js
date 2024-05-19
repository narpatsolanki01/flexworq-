import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header/Index';
import Footer from '../../Components/Footer/Index';

function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Main