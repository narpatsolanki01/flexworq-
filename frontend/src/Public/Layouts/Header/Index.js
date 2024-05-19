import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Index';
import AuthBtnModel from '../Model/index';

function Index() {
  const [viewSidebar, setViewSidebar] = useState(false);
  const [viewAuthModel, setViewAuthModel] = useState(false);
  const [btnType, setBtnType] = useState('signIn');
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token) {
      setAuth(true);
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <>
      <header className="bg-white position-sticky top-0 frontend-header" style={{ boxShadow: 'rgb(0 0 0 / 9%) 0px 9px 17px -4px' }}>
        <div className="container-fluid px-3 ps-lg-4 px-md-5">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-3 col-md-2 ps-3">
              <NavLink to='/' className="navbar-brand fsp-25 d-none d-lg-block ffq">flexworq</NavLink>
              <NavLink to='#' onClick={() => viewSidebar ? setViewSidebar(false) : setViewSidebar(true)} className="navbar-brand link-secondary fs-3 py-3 d-block d-lg-none"><i className="bi bi-list"></i></NavLink>
            </div>
            <div className="col-4 col-md-7 text-center pb-0 px-0 mx-0">
              <NavLink to='/' className="fs-3 d-block d-lg-none me-4 link-secondary fw-bold ffq">flexworq</NavLink>
              <nav className="nav d-none d-lg-flex">
                <NavLink to='/' className="nav-link py-4 fw-600 position-relative px-3" aria-current="page">
                  For Freelancers
                  <span className='position-absolute bg-primary w-100 bottom-0 start-0' style={{ paddingTop: '4px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }}></span>
                </NavLink>
                <NavLink to='employers' className="nav-link py-4 fw-600 position-relative px-3">
                  For Employers
                  <span className='position-absolute bg-primary w-100 pt-1 bottom-0 start-0 rounded-top'></span>
                </NavLink>
                <NavLink to='ourstory' className="nav-link py-4 fw-600 position-relative px-3">
                  Our Story
                  <span className='position-absolute bg-primary w-100 pt-1 bottom-0 start-0 rounded-top'></span>
                </NavLink>
              </nav>
            </div>
            <div className="col-5 col-md-3 px-0 mx-0 justify-content-end align-items-center d-flex">
              {
                auth ? (
                  user.role === 'freelancer' ? (
                    <NavLink to="/freelancer/dashboard" className="btn btn-primary rounded-1 me-2 d-none d-lg-inline fw-700">Dashboard</NavLink>
                  ) : (
                    <NavLink to="/employer/dashboard" className="btn btn-primary rounded-1 me-2 d-none d-lg-inline fw-700">Dashboard</NavLink>
                  )
                ) : (
                  <>
                    <button className="btn btn-white me-lg-2 d-none d-lg-inline fw-700" onClick={() => { btnType === 'signIn' ? (viewAuthModel ? (setViewAuthModel(false)) : (setViewAuthModel(true))) : (setViewAuthModel(true)); setBtnType('signIn') }}>Sign In</button>
                    <button className="btn btn-primary rounded-1 me-2" onClick={() => { btnType === 'signUp' ? (viewAuthModel ? (setViewAuthModel(false)) : (setViewAuthModel(true))) : (setViewAuthModel(true)); setBtnType('signUp') }}>Sign Up</button>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </header>
      <Sidebar display={viewSidebar} hideSidebar={() => setViewSidebar(false)} />
      <AuthBtnModel modelShow={viewAuthModel} btnType={btnType} onClose={() => setViewAuthModel(false)} onChnagetoSignup={() => setBtnType('signUp')} onChnagetoLogin={() => setBtnType('signIn')} />
    </>
  )
}

export default Index