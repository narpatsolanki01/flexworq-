import React, { useEffect } from "react";
import Icon from '../../../Components/Icon';
import { Link } from 'react-router-dom';
function Index() {

  useEffect(() => {
    if (localStorage.getItem('flx|sidebar-toggle') === 'true') {
      document.body.classList.toggle('flx-sidenav-toggled');
    }
  }, [])
  const toggleSidebar = () => {
    document.body.classList.toggle('flx-sidenav-toggled');
    localStorage.setItem('flx|sidebar-toggle', document.body.classList.contains('flx-sidenav-toggled'));
  }
  return (
    <>
      <nav className="navbar navbar-expand bg-primary border-bottom">
        <div className="container-fluid">
          <Link to="#" onClick={toggleSidebar} className="ms-3 text-white fsp-25" id="sidebarToggle"><Icon>list</Icon></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item dropdown">
                <Link className="nav-link text-light" to="#" data-bs-toggle="dropdown">
                  <img src="/assets/images/avtar/27.png" className="w-40 rounded-circle me-2" alt="" />
                  Mark Bosten<Icon position="ms-3">chevron-down</Icon>
                </Link>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#!">Action</a>
                  <a className="dropdown-item" href="#!">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#!">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Index;
