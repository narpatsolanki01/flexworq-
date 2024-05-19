import React from 'react'
import { Link } from 'react-router-dom'
import End from '../../Components/Positions/End';
import Icon from '../../Components/Icon';
function Index() {
    return (
        <>
            <section className='mt-4'>
                <div className='container py-3'>
                    <div className='row px-3'>
                        <div className='col-6'>
                            <h3 className='fw-bold'>My Profile</h3>
                        </div>
                        <div className='col-6'>
                            <End>
                                <button className='btn btn-white text-primary border-primary rounded-1 py-2_5 me-2'><Icon>pencil</Icon> Edit</button>
                            </End>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-2 mb-5 px-3 '>
                <div className='container shadow p-4 rounded-3 border'>
                    <div className='row border-bottom pb-3'>
                        <div className='col-12 col-md-2'>
                            <img src='/assets/images/avtar/user.png' className='w-100' alt='...' />
                        </div>
                        <div className='col-12 col-md-10 px-4'>
                            <div className='row'>
                                <div className='col-12 mb-3 pt-2 pt-lg-0'>
                                    <h5 className='fw-bold'>Pedram Alinia</h5>
                                    <Icon>geo-alt</Icon> 31, Rotterdam
                                </div>
                                <div className='row border-top d-none d-md-flex'>
                                    <div className='col-6 mt-3'>
                                        <div className='d-md-flex text-center justify-content-center align-items-center'>
                                            <img className='px-3' src='/assets/images/icons/call.svg' alt='...' />
                                            <p className='mt-3'>06 41116460</p>
                                        </div>
                                    </div>
                                    <div className='col-6 mt-3 border-start'>
                                        <div className='d-md-flex text-center justify-content-center align-items-center'>
                                            <img className='px-3' src='/assets/images/icons/email.svg' alt='...' />
                                            <p className='mt-3'>pepealinia@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row border-top d-block d-md-none'>
                                    <div className='col-12 mt-3'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <img className=' mt-3' src='/assets/images/icons/call.svg' alt='...' />
                                            </div>
                                            <div className='col-8'> <p className='mt-3'>06 41116460</p></div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <img className='' src='/assets/images/icons/email.svg' alt='...' style={{ marginTop: '21px' }} />
                                            </div>
                                            <div className='col-8'> <p className='mt-3'>pepealinia@gmail.com</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <h5 className='text-success-dark fw-bold'>Terms of Service</h5>
                </div>
                <div className='container shadow border px-3 py-3 rounded-2 position-relative'>
                    <Link to="/" className='fsp-14 d-block'>Version 14-4-2022, acclaimed by Pedram Alinia on 11-6-2022 04:35 on behalf of Identra</Link>
                    <Link to="/" className='fsp-14 d-block'>Version 14-4-2022, acclaimed by Pedram Alinia on 11-6-2022 04:35 on behalf of Marqetize</Link>
                    <Link to="/" className='fsp-14 d-block'>Version 11-3-2019, acclaimed by Pedram Alinia on 20-1-2021 19:51 on behalf of Identra</Link>
                    <Link to="/" className='fsp-14 d-block'>Version 11-3-2019, acclaimed by Pedram Alinia on 19-11-2020 10:16 on behalf of Marqetize</Link>
                </div>

                <div className='container mt-3'>
                    <Link to="/dashboard/clients">My companies</Link>
                </div>
            </section>


            {/* <section className='mt-0 p-5' style={{ background: '#f1f1f1' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <h3>Personal information</h3>
                            <span>Personal information</span>
                        </div>
                        <div className='col-12 col-md-8 p-3 mt-3'>
                            <div className='bg-white py-4 px-2 pe-4'>
                                <button className='btn btn-outline-dark float-end'>edit</button>
                                <div className='row py-2'>
                                    <div className='col-4 text-secondary'>Full name</div>
                                    <div className='col-8'>Pedram Alinia</div>
                                </div>
                                <div className='row'>
                                    <div className='col-4 ps-4  text-secondary '>Phone number</div>
                                    <div className='col-8 ps-0'> <Link to="tel:0641116460">06 41116460</Link></div>
                                </div>
                                <div className='row'>
                                    <div className='col-4 ps-4 text-secondary'>Email</div>
                                    <div className='col-8 ps-0'><Link to="mail:info@marqetize.com">info@marqetize.com</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <span>Terms of Service</span>
                        </div>
                        <div className='col-12 col-md-8 p-3 mt-3'>
                            <div className='bg-white py-4 px-3 pe-4'>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Index