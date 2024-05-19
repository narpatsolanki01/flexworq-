import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Index';
import Icon from '../../../Components/Icon';
import { useNavigate } from 'react-router-dom';

function Index() {

    const [viewSidebar, setViewSidebar] = useState(false);
    const [viewUserDropDown, setViewUserDropDown] = useState(false);
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
        }
    }, []);

    const logout = () => {
        navigate('/');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    return (
        <>
            <header className="bg-white position-sticky top-0 frontend-header border-bottom">
                <div className="container-fluid px-3 ps-lg-4 px-md-5">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-3 col-md-2 ps-4">
                            <NavLink to='/' className="navbar-brand fsp-25 d-none d-lg-block ffq">flexworq</NavLink>
                            <NavLink to='#' onClick={() => viewSidebar ? setViewSidebar(false) : setViewSidebar(true)} className="navbar-brand link-secondary fs-3 py-3 d-block d-lg-none"><i className={`bi bi-${viewSidebar ? 'x' : 'list'}`}></i></NavLink>
                        </div>
                        <div className="col-7 col-md-7 text-center pb-0 px-0 mx-0">
                            <NavLink to='/' className="fs-3 d-block d-lg-none me-4 link-secondary fw-bold ffq">flexworq</NavLink>
                            {/* navbar */}
                            <nav className="nav d-none d-lg-flex">
                                <NavLink to='/employer/company_details' className="nav-link py-4 fw-600 position-relative px-3" aria-current="page">
                                    Get Started
                                    <span className='position-absolute bg-primary w-100 bottom-0 start-0' style={{ paddingTop: '4px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }}></span>
                                </NavLink>
                                <NavLink to='/employer/planning' className="nav-link py-4 fw-600 position-relative px-3" aria-current="page">
                                    Planning
                                    <span className='position-absolute bg-primary w-100 bottom-0 start-0' style={{ paddingTop: '4px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }}></span>
                                </NavLink>
                                <NavLink to='/clients/projects' className="nav-link py-4 fw-600 position-relative px-3">
                                    Projects
                                    <span className='position-absolute bg-primary w-100 pt-1 bottom-0 start-0 rounded-top'></span>
                                </NavLink>
                                <NavLink to='/employer/checkout' className="nav-link py-4 fw-600 position-relative px-3">
                                    Check-outs
                                    <span className='position-absolute bg-primary w-100 pt-1 bottom-n-1 start-0 rounded-top'></span>
                                </NavLink>
                                <NavLink to='ourstory' className="nav-link py-4 fw-600 position-relative px-3">
                                    Flexpools
                                    <span className='position-absolute bg-primary w-100 pt-1 bottom-n-1 start-0 rounded-top'></span>
                                </NavLink>
                            </nav>
                        </div>
                        <div className="col-2 col-md-3 px-0 mx-0 justify-content-end align-items-center d-flex">
                            <div className="dropdown">
                                <i className="bi bi-three-dots me-4 d-block d-lg-none" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul className="dropdown-menu p-3 shadow border-0 rounded-1" aria-labelledby="dropdownMenuButton1" style={{ width: '250px' }}>
                                    <span className='fsp-12 text-secondary ms-3'>QUICK LINKS</span>
                                    <li><Link className="dropdown-item fw-500 py-2" to="#"><Icon position="me-3">plus-square</Icon>Add shift</Link></li>
                                    <li><Link className="dropdown-item fw-500 py-2" to="#"><Icon position="me-3">plus-square</Icon>Add Job</Link></li>
                                </ul>
                            </div>
                            <div className='flexworq-dropdown d-none d-lg-block'>
                                <Link to="#" className='text-secondary' onClick={() => viewUserDropDown ? setViewUserDropDown(false) : setViewUserDropDown(true)}><Icon position="py-1 px-2 bg-light-dark rounded-circle d-none d-lg-inline">person</Icon>
                                    <span className='d-none d-lg-inline ms-2'>{user ? user.name : 'User'}
                                    </span> <Icon position="ms-5 d-none d-lg-inline">chevron-down</Icon>
                                </Link>
                                <div className={`flexworq-dropdown-menu shadow collapse ${viewUserDropDown ? 'show' : 'hide'} `}>
                                    <ul className='list-unstyled'>
                                        <li>
                                            <Link className='d-block' onClick={() => setViewUserDropDown(false)} to="/clients/project/id/shift/add"><Icon>plus-square</Icon>Add Shift</Link>
                                        </li>
                                        <li>
                                            <Link className='d-block' onClick={() => setViewUserDropDown(false)} to="/clients/project/id/jobs/add"><Icon>plus-square</Icon>Add Job</Link>
                                        </li>
                                    </ul>
                                    <span className='text-secondary fsp-12 ms-4'>OTHER</span>
                                    <ul className='list-unstyled'>
                                        <li>
                                            <Link className='d-block' onClick={() => setViewUserDropDown(false)} to="/dashboard/profile"><Icon>person-circle</Icon>Profile</Link>
                                        </li>
                                        <li>
                                            <Link className='d-block' onClick={() => setViewUserDropDown(false)} to="/dashboard/client"><Icon>building</Icon>Companies</Link>
                                        </li>
                                        <li>
                                            <Link className='d-block' onClick={() => setViewUserDropDown(false)} to="/clients/statistics"><Icon>graph-up-arrow</Icon>Statistics</Link>
                                        </li>
                                        <li>
                                            <Link className='d-block px-3' onClick={logout} to="#">Sign Out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar display={viewSidebar} hideSidebar={() => setViewSidebar(false)} />
        </>
    )
}

export default Index