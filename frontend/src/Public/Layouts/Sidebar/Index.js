import { React } from 'react'
import { Link, NavLink } from 'react-router-dom'
function Index(props) {

  return (
    <>
      <div id="sidebar" className="sidebar position-fixed top-0 d-block d-lg-none pt-md-4">
        <div className={props.display ? 'd-flex flex-column flex-shrink-0 p-3 bg-light overflow-auto' : 'd-none'}>
          <NavLink to='#' className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <i className='bi bi-arrow-left ms-2 me-3 fw-500 mt-1 fsp-33' onClick={props.hideSidebar}></i>
            <span className="fsp-33 ffq text-secondary">FLEXWORQ</span>
          </NavLink>
          <br />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink to='/' className="nav-link" onClick={props.hideSidebar}>
                For Freelancers
              </NavLink>
            </li>
            <li>
              <NavLink to='employers' className="nav-link" onClick={props.hideSidebar}>
                For Employers
              </NavLink>
            </li>
            <li>
              <NavLink to='ourstory' className="nav-link" onClick={props.hideSidebar}>
                Our Story
              </NavLink>
            </li>
            <Link to="freeflexer-signin" onClick={props.hideSidebar} className='btn btn-outline-dark mt-4 rounded-1 text-start py-3 fw-bold ps-4 fs-4'>
              Log in <i className="bi bi-chevron-right float-end"></i>
            </Link>
            <span className='py-4 fw-bold'>Or sign up : </span>
            <Link to="freeflexer-signup" onClick={props.hideSidebar} className='btn btn-primary rounded-1 text-start text-white pt-3 pb-3 fw-bold ps-4 fs-5 position-relative'>
              I want to work <p className='position-absolute lh-1 fw-600 fsp-14' style={{ color: 'hsla(0,0%,100%,.5)' }}>Looking for attractive gigs</p> <i className="bi bi-chevron-right float-end mt-2"></i>
            </Link>
            <Link to="company-signup" onClick={props.hideSidebar} className='btn btn-white bg-white mt-3 rounded-1 text-start pt-3 pb-4 fw-bold ps-4 position-relative fs-6 border'>
              I am looking for professionals <p className='position-absolute lh-1 fsp-14 fw-600 text-secondary'>Looking for flexible workers</p> <i className="bi bi-chevron-right float-end mt-2"></i>
            </Link>
          </ul>
          <div className="dropdown">
            {/* <Link to='/' className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>Account</strong>
              </Link>
              <ul className="dropdown-menu text-small shadow">
                <li><Link to='/' className="dropdown-item">Sign In</Link></li>
                <li><Link to='/' className="dropdown-item">Sign Up</Link></li>
              </ul> */}
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  )
}

export default Index