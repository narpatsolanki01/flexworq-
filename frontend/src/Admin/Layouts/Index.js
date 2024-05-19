import React from "react";
import '../../Assets/Css/Admin.css';
import Header from "./Header/Index";
import Footer from "./Footer/Index";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Index";

function Index() {
  return (
    <>
      <div className="d-flex" id="wrapper">
        {/* sidebar */}
        <Sidebar />
        <div id="page-content-wrapper">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Index;
