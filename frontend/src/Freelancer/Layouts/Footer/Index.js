import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../Components/Icon'

function Index() {

    const [showLanguage, setShowLanguage] = useState('English');

    return (
        <>
            <footer className="bg-dark position-sticky top-5">
                <div className="container">
                    <div className="row pt-5 border-bottom border-light pb-5 ps-2 ps-md-3">
                        <div className="col -6 col-md-3">
                            <h5 className="text-white fsp-15 fw-bold">FOR WORKERS</h5>
                            <ul className="list-unstyled">
                                <li className="my-3"><Link to='/' className="text-decoration-none text-light text-md-center fsp-15">How it works</Link></li>
                                <li className="my-3"><Link to='/' className="text-decoration-none text-light text-md-center fsp-15">Find jobs</Link></li>
                                <li className="my-3"><Link to='/' className="text-decoration-none text-light text-md-center fsp-15">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <h5 className="text-white fsp-15 fw-bold">FOR COMPANIES</h5>
                            <ul className="list-unstyled">
                                <li className="my-3"><Link to='/' className="text-decoration-none text-light fsp-15">How it works</Link></li>
                                <li className="my-3"><Link to='/' className="text-decoration-none text-light fsp-15">API integration</Link></li>
                                <li className="my-3"><Link to='/' className="text-decoration-none text-light fsp-15">FAQ</Link></li>
                            </ul>
                        </div>
                        <hr className='d-sm-block d-md-none mt-4 text-light'/>
                        <div className="col-6 col-md-3 mt-sm-3 mt-md-0">
                            <h5 className="text-white fsp-15 fw-bold">FLEXWORQ</h5>
                            <ul className="list-unstyled">
                                <li className="my-3"><Link to='/' className="text-decoration-none text-light fsp-15">Blog</Link></li>
                                <li className="my-3"><Link to='/' className="text-decoration-none text-light fsp-15">PR & Media</Link></li>
                                <li className="my-3"><Link to='/' className="text-decoration-none text-light fsp-15">Careers</Link></li>
                                <li className="my-3"><Link to='/' className="text-decoration-none text-light fsp-15">Our Promise</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mt-sm-3 mt-md-0">
                            <ul className="list-unstyled pt-0 pt-lg-4">
                                <li className="my-3"><Link to='/' className="text-decoration-none text-light fsp-15">About Us</Link></li>
                                <li className="my-3"><Link to='/contact' className="text-decoration-none text-light fsp-15">Contact</Link></li>
                                <li className="my-3"><Link to='/termsofue' className="text-decoration-none text-light fsp-15">Terms of use</Link></li>
                                <li className="my-3"><Link to='/privacypolicy' className="text-decoration-none text-light fsp-15">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row pt-4 pb-3">
                        <div className="col-12 col-md-2 d-flex d-lg-block">
                            <Link to="#" className="text-decoration-none fs-3 fw-bold text-light m-auto mb-1 mb-lg-0">FLEXWORQ</Link>
                        </div>
                        <div className="col-12 col-md-2 d-flex d-lg-block justify-content-center mb-4">
                            <div>
                                <div className="dropdown mt-3 mt-md-0">
                                    <button className="btn btn-dark bg-transparent border-0 outline-none shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src='/assets/images/icons/Iconfeather-globe.png' className='me-2' alt='...' /> {showLanguage} &nbsp; <Icon>chevron-down</Icon>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><span onClick={() => setShowLanguage('English')} className="dropdown-item">English</span></li>
                                        <li><span onClick={() => setShowLanguage('Hindi')} className="dropdown-item">Hindi</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 pt-2 mb-3 mb-lg-0">
                            <ul className="list-inline text-center d-flex">
                                <li className="list-inline-item m-auto"><Link to='/' className="text-light fs-5"><i className="bi bi-instagram"></i></Link></li>
                                <li className="list-inline-item m-auto"><Link to='/' className="text-light fs-5"><i className="bi bi-facebook"></i></Link></li>
                                <li className="list-inline-item m-auto"><Link to='/' className="text-light fs-5"><i className="bi bi-twitter"></i></Link></li>
                                <li className="list-inline-item m-auto"><Link to='/' className="text-light fs-5"><i className="bi bi-linkedin"></i></Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-5 pt-2">
                            <p className="text-light text-center text-end fsp-15">Copyright<i className="bi bi-c-circle mx-2 "></i>2022  Flexworq. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Index