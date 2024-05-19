import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Icon from '../../../Components/Icon'
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function Index() {

    const [showProfileModel, setShowProfileModel] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {

        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        enqueueSnackbar('You have been logged out', { variant: 'success' });
        navigate('/');
    }


    return (
        <>
            <header className="bg-white shadow position-sticky top-0 frontend-header d-none d-md-block">
                <div className="container-fluid px-3 ps-lg-4 px-md-5">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-3 col-md-2 ps-4">
                            <NavLink to='/' className="navbar-brand fsp-25 d-none d-lg-block ffq">flexworq</NavLink>
                            <NavLink to='#' className="navbar-brand link-secondary fs-3 py-3 d-block d-lg-none"><i className="bi bi-list"></i></NavLink>
                        </div>
                        <div className="col-7 col-md-7 text-center pb-0 px-0 mx-0">
                            <NavLink to='/' className="fs-3 d-block d-lg-none me-4 link-secondary fw-bold ffq">flexworq</NavLink>
                            {/* navbar */}
                            <nav className="nav d-none d-lg-flex">
                                <NavLink to='/freelancer/dashboard' className="nav-link py-4 fw-600 position-relative px-3" aria-current="page">
                                    Dashboard
                                    <span className='position-absolute bg-primary w-100 bottom-0 start-0' style={{ paddingTop: '4px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }}></span>
                                </NavLink>
                                <NavLink to='/freelancer/explore' className="nav-link py-4 fw-600 position-relative px-3" aria-current="page">
                                    Find Work
                                    <span className='position-absolute bg-primary w-100 bottom-0 start-0' style={{ paddingTop: '4px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }}></span>
                                </NavLink>
                            </nav>
                        </div>
                        <div className="col-2 col-md-3 px-0 mx-0 justify-content-end align-items-center d-flex">
                            <div className="dropdown">
                                <Link to="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-person me-1"></i> Hi {
                                    user ? user.name : ''
                                } <i className="bi bi-chevron-down ms-3"></i></Link>
                                <ul className="dropdown-menu p-3 shadow border-0 rounded-1" aria-labelledby="dropdownMenuButton1" style={{ width: '250px' }}>
                                    <li><Link className="dropdown-item fw-400 py-2" to="/freelancer/flexpools"><Icon position="me-3">heart</Icon>Flexpools</Link></li>
                                    <li><Link className="dropdown-item fw-400 py-2" to="/freelancer/financial-overview"><span className='pe-3'>€</span>Financial overview</Link></li>
                                    <li><Link className="dropdown-item fw-400 py-2" to="#"><Icon position="me-3">reply</Icon>Invite Friends</Link></li>
                                    <span className='fsp-12 text-secondary ms-3'>HELP</span>
                                    <li><Link className="dropdown-item fw-400 py-2" to="#"><Icon position="me-3">info-circle</Icon>Help</Link></li>
                                    <li><Link className="dropdown-item fw-400 py-2" to="#"><Icon position="me-3">chat-left-text</Icon>Give feedback</Link></li>
                                    <span className='fsp-12 text-secondary ms-3'>OTHER</span>
                                    <li><Link className="dropdown-item fw-400 py-2" to="/freelancer/profile"><Icon position="me-3">person</Icon>My Profile</Link></li>
                                    <li><Link className="dropdown-item fw-400 py-2" to="#"><Icon position="me-3">reply</Icon>Insurances</Link></li>
                                    <li><Link className="dropdown-item fw-400 py-2" to="/freelancer/notification"><Icon position="me-3">volume-mute</Icon>Notification</Link></li>
                                    <li><button onClick={logout} className="dropdown-item fw-400 py-2" >Signout</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='position-fixed bottom-0 bg-white w-100 shadow-lg d-block d-md-none' style={{ zIndex: '999' }}>
                <div className='d-flex Appbar bg-white'>
                    <NavLink to="/freelancer/explore" className="m-auto py-2 text-center">
                        <i className="bi bi-search d-block"></i>
                        <span>Explore</span>
                    </NavLink>
                    <NavLink to="/freelancer/dashboard" className="m-auto py-2 text-center">
                        <i className="bi bi-folder2 d-block"></i>
                        <span>My Shifts</span>
                    </NavLink>
                    <NavLink to="/" className="m-auto py-2 text-center">
                        <i className="bi bi-chat-right d-block"></i>
                        <span>Help</span>
                    </NavLink>
                    <NavLink className={`m-auto py-2 text-center`} onClick={() => showProfileModel ? setShowProfileModel(false) : setShowProfileModel(true)} to="#">
                        <i className={`bi bi-person d-block ${showProfileModel ? 'text-primary' : 'text-dark'}`}></i>
                        <div className="dropdown">
                            <Link to="#" className={showProfileModel ? 'text-primary' : ''} data-bs-toggle="dropdown" aria-expanded="false">Profile</Link>
                            <div className={`position-fixed top-0 w-100 bg-white start-0 d-block d-md-none ${showProfileModel ? 'd-block' : 'd-none'}`} style={{ zIndex: '-1' }}>
                                <div className='border-bottom py-3 fsp-16 fw-600'>
                                    Profile
                                </div>
                                <ul className="list-group list-group-flush overflow-auto pb-10 scrollbar-hidden" style={{ height: '100vh' }}>
                                    <li className="list-group-item p-0 text-start"><Link onClick={() => setShowProfileModel(false)} to="/freelancer/profile" className='fs-6 py-3 d-block px-3'>My Profile<span className='float-end'><Icon>chevron-right</Icon></span></Link></li>
                                    <li className="list-group-item p-0 text-start"><Link onClick={() => setShowProfileModel(false)} to="/freelancer/flexpools" className='fs-6 py-3 d-block px-3'>My Flexpools<span className='float-end'><Icon>chevron-right</Icon></span></Link></li>
                                    <li className="list-group-item p-0 text-start"><Link onClick={() => setShowProfileModel(false)} to="/freelancer/financial-overview" className='fs-6 py-3 d-block px-3'>Financial Overview<span className='float-end'><Icon>chevron-right</Icon></span></Link></li>
                                    <li className="list-group-item p-0 text-start"><Link onClick={() => setShowProfileModel(false)} to="/freelancer/notification" className='fs-6 py-3 d-block px-3'>Notification Settings<span className='float-end'><Icon>chevron-right</Icon></span></Link></li>
                                    <li className="list-group-item p-0 text-start"><Link onClick={() => setShowProfileModel(false)} to="#" className='fs-6 py-3 d-block px-3'>Help <span className='float-end'><Icon>chevron-right</Icon></span></Link></li>
                                    <li className="list-group-item p-0 text-start"><Link onClick={() => setShowProfileModel(false)} to="#" className='fs-6 py-3 d-block px-3'>Send Feedback <span className='float-end'><Icon>chevron-right</Icon></span></Link></li>
                                    <li className="list-group-item p-0 text-start"><Link onClick={() => { setShowProfileModel(false); logout() }} to="#" className='fs-6 py-3 d-block px-3'>Log Out<span className='float-end'><Icon>chevron-right</Icon></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Index