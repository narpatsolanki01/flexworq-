import React from 'react'
import {Link} from 'react-router-dom'
import Icon from '../../Components/Icon'
function Index() {
    return (
        <>
            <section className='mt-0 py-5 mb-10' style={{background:'#f1f1f1'}}>
                <div className='container px-3 px-lg-5 pb-5 position-relative'>
                    <p><Link to="/freelancer/dashboard" className='me-1'>Dashboard</Link> <Icon>chevron-right</Icon> Company Name </p>
                    <div className='row my-5'>
                        <h4>My flexpools <span className='fsp-13 text-secondary'>0 at 0 clients</span></h4>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <Link to='/freelancer/flexpools/id'>
                            <div className='bg-light rounded-1 p-5 position-relative'>
                                <span className='bg-white position-absolute start-0 top-0 py-1 px-2 rounded-1'>Invited</span>
                                <br/><br/><br/><br/>
                            </div>
                            </Link>
                            <p className='mb-0 mt-2 fsp-15 text-primary lh-0'>CUSTOMER SERVICE . <span className='fsp-10'>0 freelancer</span></p>
                            <p className='fsp-18 fw-bold lh-0'>Marqetize</p>
                        </div>
                        <div className='col-12 col-md-4'>
                            <Link to='/freelancer/flexpools/id'>
                            <div className='bg-light rounded-1 p-5 position-relative'>
                                <span className='bg-white position-absolute start-0 top-0 py-1 px-2 rounded-1'>Invited</span>
                                <br/><br/><br/><br/>
                            </div>
                            </Link>
                            <p className='mb-0 mt-2 fsp-15 text-primary lh-0'>CUSTOMER SERVICE . <span className='fsp-10'>0 freelancer</span></p>
                            <p className='fsp-18 fw-bold lh-0'>Marqetize</p>
                        </div>
                        <div className='col-12 col-md-4'>
                            <Link to='/freelancer/flexpools/id'>
                            <div className='bg-light rounded-1 p-5 position-relative'>
                                <span className='bg-white position-absolute start-0 top-0 py-1 px-2 rounded-1'>Invited</span>
                                <br/><br/><br/><br/>
                            </div>
                            </Link>
                            <p className='mb-0 mt-2 fsp-15 text-primary lh-0'>CUSTOMER SERVICE . <span className='fsp-10'>0 freelancer</span></p>
                            <p className='fsp-18 fw-bold lh-0'>Marqetize</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index