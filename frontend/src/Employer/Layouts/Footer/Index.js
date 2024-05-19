import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../Components/Icon'

function Index() {

    const [showLanguage, setShowLanguage] = useState('English');

    return (
        <>
            <footer className="bg-dark">
                <div className="container">
                    <div className='row'>
                        <div className='col-12 col-md-9'>
                            <ul className="nav d-block d-md-flex text-center">
                                <li className="nav-item">
                                    <Link className='nav-link text-white px-2 px-lg-3 py-3 py-md-4' to="/">Disclaimer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link text-white px-2 px-lg-3 py-3 py-md-4' to="/">Privacy policy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link text-white px-2 px-lg-3 py-3 py-md-4' to="/">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link text-white px-2 px-lg-3 py-3 py-md-4' to="/">PR {'&'} Media</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link text-white px-2 px-lg-3 py-3 py-md-4' to="/">Help</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-3 justify-content-end align-items-center d-none d-md-flex'>
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
                </div>
            </footer>
        </>
    )
}

export default Index