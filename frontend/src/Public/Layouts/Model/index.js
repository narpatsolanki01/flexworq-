import React from 'react'
import { Link } from 'react-router-dom'
function index({ btnType, onClose, modelShow, onChnagetoLogin, onChnagetoSignup }) {
    return (
        <>
            <div onClick={onClose} className={modelShow ? 'position-fixed w-100 h-100 top-5 bg-tr-dark-800 auth-model' : 'd-none'}>
                <div className='py-4 auth-model-box' style={{ background: '#3F8ECE' }}>
                    <div className='d-flex position-relative'>
                        <div className='m-auto px-3 pe-4 d-block d-md-flex pt-3 pt-md-5'>
                            <Link to={btnType === 'signIn' ? 'freeflexer-signin' : 'freeflexer-signup'} onClick={onClose} className='btn btn-light py-4 px-2 px-md-4 rounded-1  w-100 ms-1'>
                                <div className='d-flex position-relative'>
                                    <img src="/assets/images/icons/person.svg" className='' alt='...' />
                                    <div className='m-auto mx-4'>
                                        <p className='p-0 m-0 text-start fsp-16 lh-1'>{btnType === 'signIn' ? 'Sign in as FreeFlexer' : 'I want to work'}</p>
                                        <p className='p-0 m-0 text-start fsp-13 lh-1 mt-1'>Looking for attractive gigs</p>
                                    </div>
                                    <img src="/assets/images/icons/right_arrow.svg" className='position-absolute end-0 mt-2 me-3' alt='...' />
                                </div>
                            </Link>
                            <Link to={btnType === 'signIn' ? 'company-signin' : 'company-signup'} onClick={onClose} className='btn btn-light py-3 px-2 px-md-4 rounded-1 mt-3 mt-md-0 w-100 ms-1'>
                                <div className='d-flex position-relative'>
                                    <img src="/assets/images/icons/company.svg" className='' alt='...' />
                                    <div className='m-auto mx-4'>
                                        <p className='p-0 m-0 text-start fsp-16 lh-1'>{btnType === 'signIn' ? 'Sign in as company' : 'I am looking for professionals'}</p>
                                        <p className='p-0 m-0 text-start fsp-13 lh-1 mt-1'>Looking for flexible workers</p>
                                    </div>
                                    <img src="/assets/images/icons/right_arrow.svg" className='position-absolute end-0 mt-2 mt-md-3 me-2' alt='...' />
                                </div>
                            </Link>
                        </div>
                        <div className='close-auth-model-btn d-flex justify-content-center align-items-center pe-5 position-absolute end-0 h-100 d-none d-lg-block'>
                            <Link to='#' onClick={onClose}><i className='bi bi-x me-lg-5 fs-7 text-light'></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={modelShow ? 'modal fade show d-block d-lg-none' : 'd-none'}  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{background:'rgba(0, 0, 0, 0.8)'}}>
                <div className="modal-dialog">
                    <div className="modal-content" style={{ background: '#3F8ECE' }}>
                        <div className="modal-body d-bock px-0 px-sm-3">
                        <div className="modal-header">
                            <div className='justify-content-center align-items-center d-flex d-sm-block'>
                                <button onClick={onChnagetoLogin} className={btnType === 'signIn' ? 'btn btn-light mx-3':'btn btn-outline-light mx-3'}>Sign in</button>
                                <button onClick={onChnagetoSignup} className={btnType === 'signUn' ? 'btn btn-light' : 'btn btn-outline-light' }>Sign Up</button>
                            </div>
                            <button type="button" className="btn-close me-2" onClick={onClose} ></button>
                        </div>
                            <div className='m-auto w-100 mt-3 '>
                                <div className='m-auto px-3'>
                                    <Link to={btnType === 'signIn' ? 'freeflexer-signin' : 'freeflexer-signup'} onClick={onClose} className='btn btn-light py-3 px-4 rounded-1 w-100'>
                                        <div className='d-flex'>
                                            <img src="/assets/images/icons/person.svg" className='m-auto' alt='...' />
                                            <div className='m-auto mx-4'>
                                                <p className='p-0 m-0 text-start fsp-16 lh-1'>{btnType === 'signIn' ? 'Sign in as FreeFlexer' : 'I want to work'}</p>
                                                <p className='p-0 m-0 text-start fsp-12 lh-1 mt-1'>Looking for attractive gigs</p>
                                            </div>
                                            <img src="/assets/images/icons/right_arrow.svg" className='m-auto' alt='...' />
                                        </div>
                                    </Link>
                                    <Link to={btnType === 'signIn' ? 'company-signin' : 'company-signup'} onClick={onClose} className='btn btn-light py-3 px-3 rounded-1 mt-2 w-100'>
                                        <div className='d-flex'>
                                            <img src="/assets/images/icons/company.svg" className='m-auto ms-2' alt='...' />
                                            <div className='m-auto mx-4'>
                                                <p className='p-0 m-0 text-start fsp-15 lh-1'>{btnType === 'signIn' ? 'Sign in as company' : 'I am looking for professionals'}</p>
                                                <p className='p-0 m-0 text-start fsp-12 lh-1 mt-1'>Looking for flexible workers</p>
                                            </div>
                                            <img src="/assets/images/icons/right_arrow.svg" className='m-auto' alt='...' />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default index