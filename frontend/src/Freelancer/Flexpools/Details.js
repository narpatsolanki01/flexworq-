import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../Components/Icon'

function Details() {
    return (
        <>
            <section className='mt-0 py-5' style={{ background: '#f1f1f1' }}>
                <div className='container px-3 px-lg-5 pb-5 position-relative'>
                    <p><Link to="/freelancer/dashboard" className='me-1'>Dashboard</Link> <Icon>chevron-right</Icon> Company Name </p>
                    <div className='row my-2'>
                        <div className='col-12 col-md-6'>
                            <h4 className='fw-300'>Customer service</h4>
                            <p className='text-primary fsp-13'><span className='text-dark'>Bij</span> Marqetize</p>
                            <p className='my-3'>There are no freelancer in this flexpools yet.</p>
                            <div className='d-flex'>
                                <button className='btn btn-success rounded-1 me-2'>Accept invite</button>
                                <button className='btn btn-outline-dark rounded-1 mx-2'>Reject invite</button>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 d-block d-md-flex justify-content-end mt-5 mt-lg-0'>
                            <div className='bg-white shadow w-50 px-3 pt-3' style={{top:'50px',position:'sticky'}}>
                                <div className='row'>
                                    <div className='col-12 fsp-13 fw-600 py-2'>
                                        <Icon position="me-2">bullseye</Icon>
                                        WHAT DOSE THE LIGHTNING BLOT ICON MEAN?
                                    </div>
                                    <div className='col-12 fsp-13 fw-600 border-top py-2'>
                                        <Icon position="me-2">chat-left</Icon>
                                        ASK YOUR QUESTION BY CHAT MESSAGE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details