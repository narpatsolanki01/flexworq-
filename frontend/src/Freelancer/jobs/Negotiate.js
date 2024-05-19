import React, { useState } from 'react'
import Icon from '../../Components/Icon'
import { Link } from 'react-router-dom'

function Negotiate() {
    const [prize, setPrize] = useState(20.50);
    return (
        <div className='w-100 mb-2 mb-md-5' style={{ background: 'url(/assets/images/background/group-young-people-sitting-conference-together.svg) 0% 0% / auto no-repeat' }}>
            <div className='container px-4 px-md-0'>
                <h2 className='text-white fw-700 py-4'>You are applying for 1 shift at Marqetize</h2>
                <div className='row rounded shadow w-auto w-md-75'>
                    <div className='col-12 shadow rounded m-0 p-0 bg-white py-3'>
                        <div className='pt-4 px-4 border-bottom'>
                            <h3 className='fsp-22'>Propose your hour price per shift</h3>
                            <p>If you believe you should earn more, you can request a new rate and explain the client why you are worth it</p>
                        </div>
                        <div className='text-success py-3 px-4'>
                            June 2022
                        </div>
                    </div>
                    <div className='row pt-4'>
                        <div className='col-12 bg-white'>
                            <div className='row'>
                                <div className='col-4 col-md-2 ps-2s ps-md-3'>
                                    <div className='rounded text-center text-white py-2' style={{ background: '#EAF6EF' }}>
                                        <span className='d-block fsp-20 text-success'>29</span>
                                        <span className='fsp-11 text-dark'>WED</span>
                                    </div>
                                </div>
                                <div className='col-8 col-md-10'>
                                    <div className='border-bottom py-2 position-relative'>
                                        <span className='fw-600'>09:00 - 17:00</span>
                                        <span className='position-absolute end-0 fw-600'><Icon position="me-2">person</Icon>1 Spot</span>
                                    </div>
                                    <div className='py-1'>
                                        <p className='text-secondary fw-bold'>Cancellation Policy: <span className='text-dark fw-400 ms-1'>3 Days</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5 pt-3 py-3'>
                            <div className='bg-light-dark d-flex align-items-center text-center p-2 rounded'>
                                <button onClick={() => setPrize(prize - 1)} className='btn btn-primary m-auto float-end rounded-1'><Icon>dash</Icon></button>
                                <span className='w-100'>€{prize}</span>
                                <button onClick={() => setPrize(prize + 1)} className='btn btn-primary m-auto float-start rounded-1'><Icon>plus</Icon></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-4 w-100 w-md-75 pe-3'>
                    <h1 className='text-success-dark fsp-16'>Tell Marqetize why you are worth it</h1>
                    <textarea className='bg-light-dark form-control' rows={7} placeholder='This message is sent directly to Marqetize'></textarea>
                </div>
                <div>
                    <h1 className='fsp-16 text-success-dark'>The following sills are needed for this shift. Please check all of them to preceed</h1>
                    <div className='row mt-4  w-auto w-md-75'>
                        <div className='col-12 col-md-12 applying-list-checkbox'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="dutch" />
                                <label class="form-check-label" for="dutch">
                                    Dutch
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="customer_oriented" />
                                <label class="form-check-label" for="customer_oriented">
                                    Customer Oriented
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="welcome_customers" />
                                <label class="form-check-label" for="welcome_customers">
                                    Welcome Customers
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="social" />
                                <label class="form-check-label" for="social">
                                    Social
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="service_oriented" />
                                <label class="form-check-label" for="service_oriented">
                                    Service Oriented
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="answering_emails" />
                                <label class="form-check-label" for="answering_emails">
                                    Answering Emails
                                </label>
                            </div>
                            <div className='col-12 col-md-12'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="communicative" />
                                    <label class="form-check-label" for="communicative">
                                        Communicative
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-4 pb-4  w-auto w-md-75'>
                    <h1 className='fsp-16 text-success-dark'>Clothing Regulations</h1>
                    <div className='row mt-2'>
                        <div className='col-12 col-md-12 applying-list-checkbox'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="neat_trousers" />
                                <label class="form-check-label" for="neat_trousers">
                                    Neat trousers
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="trimmed_beard" />
                                <label class="form-check-label" for="trimmed_beard">
                                    Trimmed beard
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="clothing_of_own_choosing" />
                                <label class="form-check-label" for="clothing_of_own_choosing">
                                    Clothing of own choosing
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-2 border-bottom  w-auto w-md-75'>
                    <div className='col-12 my-2'>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="requirements" />
                            <label class="form-check-label" for="requirements">
                                I meet all the requirements and agree to the assignment agreement
                            </label>
                        </div>
                    </div>
                    <div className='col-12 my-2'>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="client" />
                            <label class="form-check-label" for="client">
                                I accept that the client can pay the Invoice within 14 days from the invoice release date.
                            </label>
                        </div>
                    </div>
                    <div className='col-12 my-2'>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="application" />
                            <label class="form-check-label" for="application">
                                Cancel my application automatically if I'm not accepted yet 8 hours before the shift starts.
                            </label>
                        </div>
                    </div>
                </div>
                <Link to="/freelancer/explore/id/applied" className='btn btn-primary py-2_5 my-4 rounded-1'>Confirm and Sign Up</Link>
            </div>
        </div>
    )
}

export default Negotiate