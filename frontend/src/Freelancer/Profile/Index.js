import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../Components/Icon'
import Center from '../../Components/Positions/Center'
function Index() {
    return (
        <main>
            <section className='mt-4 mb-3'>
                <div className='container px-4 px-md-0'>
                    <div className='row mb-3'>
                        <div className='col-12 col-lg-8'>
                            <h3 className='fw-bold'>My Profile</h3>
                        </div>
                        <div className='col-12 col-lg-4 pt-3 pt-lg-0 order-1 order-sm-1'>
                            <div className='d-block d-md-flex justify-content-end'>
                                <button className='btn btn-white text-primary border-primary rounded-1 py-2_5 me-2'><Icon>pencil</Icon> Edit</button>
                                <button className='btn btn-primary rounded-1 py-2_5 ms-1'><Icon>plus-circle-fill</Icon> Add Experience</button>
                            </div>
                        </div>
                        <div className='col-12 fsp-15 mt-3 order-0 order-sm-2'>The Flexworq ID is your businesscard when you apply to jobs. Do you look flawless?</div>
                    </div>
                </div>
            </section>
            <section className='mt-2 px-3 px-md-0'>
                <div className='container shadow p-4 p-md-3 rounded-3 border'>
                    <div className='row border-bottom pb-3'>
                        <div className='col-6 col-md-10 pt-4 d-block d-md-none'>
                            <h5 className='fw-bold'>Pedram Alinia</h5>
                            <Icon>geo-alt</Icon> 31, Rotterdam
                        </div>
                        <div className='col-5 col-md-2 justify-content-end d-flex d-md-block py-2'>
                            <img src='/assets/images/avtar/user.png' className='w-75 w-sm-100 rounded-sm-circle' alt='' />
                        </div>
                        <div className='col-12 col-md-10'>
                            <div className='row'>
                                <div className='col-12 py-2 d-none d-md-block'>
                                    <h5 className='fw-bold'>Pedram Alinia</h5>
                                    <Icon>geo-alt</Icon> 31, Rotterdam
                                </div>
                                <div className='col-12 border-top ps-1 '>
                                    <div className='row'>
                                        <div className='col-12 col-lg-4'>
                                            <div className='d-flex py-1 pt-2'>
                                                <img src='/assets/images/icons/document.svg' alt='...' className='pe-3' />
                                                <div className='d-block'>
                                                    <p className='lh-1 m-0 fsp-13'>Doesn't have a valid VAT-ID</p>
                                                    <span className='lh-1 fsp-11 text-secondary'>(can work limited number of shifts)</span>
                                                </div>
                                            </div>
                                            <div className='d-flex py-1'>
                                                <img src='/assets/images/icons/flag.svg' alt='...' className='pe-3' />
                                                <div className='d-block'>
                                                    <p className='lh-1 m-0 fsp-13 fw-bold mt-1'>100% showup</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-4'>
                                            <div className='d-flex py-1 pt-3'>
                                                <img src='/assets/images/icons/call.svg' alt='...' className='pe-3' />
                                                <div className='d-block'>
                                                    <p className='lh-1 m-0 fsp-13 fw-bold mt-1'>06 41116460</p>
                                                </div>
                                            </div>
                                            <div className='d-flex py-2 pt-3'>
                                                <img src='/assets/images/icons/watch.svg' alt='...' className='pe-3' />
                                                <div className='d-block'>
                                                    <p className='lh-1 m-0 fsp-13 fw-bold mt-1'>100% punctual</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-4 d-flex py-2 py-md-0'>
                                            <img src='/assets/images/icons/email.svg' alt='...' className='pe-3 w-40' />
                                            <div className='d-block'>
                                                <p className='lh-1 m-0 fsp-13 fw-bold mt-0 mt-lg-4 pt-0 pt-lg-2'>pepealinia@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-3 px-0'>
                        <h5 className='text-success-dark'>Customer Service</h5>
                        <div className='row'>
                            <div className='col-12 col-md-4 mb-2'>
                                <div className='mx-2 border py-3 px-2 rounded-1'>
                                    <span className='bg-success px-3 py-2 rounded-1 text-white'>1</span>
                                    <span className='px-3'>Customer Oriented</span>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 mb-2'>
                                <div className='mx-2 border py-3 px-2 rounded-1'>
                                    <span className='bg-success px-3 py-2 rounded-1 text-white'>1</span>
                                    <span className='px-3'>Answering Emails</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <h5 className='text-success-dark'>Favourite Clients To Work For</h5>
                        <ul>
                            <li>Marqetize</li>
                        </ul>
                        <hr />
                    </div>
                    <div className='mt-2'>
                        <div className='rounded-2 bg-light d-flex p-2 border'>
                            <div className='bg-primary rounded-2 px-1 me-3'></div>
                            <div className='px-2 py-2 w-100'>
                                <h5>Domino's in Hellevoetsluis</h5>
                                <h6>January 2011 - July 2012</h6>
                                <span>Hospitality - Assistant cook</span>
                            </div>
                            <Center position="mx-3">
                                <Icon position="fs-3">trash</Icon>
                            </Center>
                        </div>
                        <div className='rounded-2 bg-light d-flex p-2 border mt-3'>
                            <div className='bg-primary rounded-2 px-1 me-3'></div>
                            <div className='px-2 py-2 w-100'>
                                <h5>Domino's in Hellevoetsluis</h5>
                                <h6>January 2011 - July 2012</h6>
                                <span>Hospitality - Assistant cook</span>
                            </div>
                            <Center position="mx-3">
                                <Icon position="fs-3">trash</Icon>
                            </Center>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <h5 className='text-success-dark fw-bold'>Invoice and payment</h5>
                    <p className='fw-500'>This information will be used for payments and invoices on your behalf.</p>
                </div>
                <div className='container shadow rounded-2'>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th className='px-2 py-3'>Invoice address</th>
                                <th className='ps-3'>Sint-Andriesstraat 416 3073jw Rotterdam</th>
                            </tr>
                            <tr>
                                <th className='px-2 py-3'>IBAN</th>
                                <th className='ps-3'>NL60INGB0665763581</th>
                            </tr>
                            <tr>
                                <th className='px-2 py-3'>VAT identification number</th>
                                <th className='text-primary ps-3'><p><Icon>plus-circle-fill</Icon> Add</p></th>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <p className='d-flex pt-3 px-3'>
                        <Icon>info-circle</Icon>
                        <span className='ps-3'>
                            <span className='fw-bold'>Pay attention: </span>Only turn it on when you have subscribed to the Small Businesses Scheme (KOR). Once you've turned it on, it can't be turned off without contacting our support department.
                        </span>
                    </p>
                    <div className='d-block ps-5 py-3'>
                        <Link className='d-block' to="/">Read More about KOR <Icon>chevron-right</Icon> </Link>
                    </div>
                </div>
                <div className='container mt-5'>
                    <h5 className='text-success-dark fw-bold'>Terms of Service</h5>
                </div>
                <div className='container shadow border px-3 py-3 rounded-2 position-relative'>
                    Version 11-3-2019, acclaimed by Pedram Alinia on 9-11-2020 17:03
                </div>
                <div className='container mt-5'>
                    <h5 className='text-success-dark fw-bold'>Danger zone</h5>
                </div>
                <div className='container shadow border px-3 py-3 rounded-2'>
                    You can't delete your account. Please contact support for more information.
                </div><br /><br />
            </section>
        </main >
    )
}
export default Index