import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../Components/Icon'
import Rating from '@mui/material/Rating';

function Pending() {

    const [value, setValue] = React.useState(2);

    return (
        <>
            <section className='mt-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                            <span>Klantenservice medewerker met ervaring</span>
                        </div>
                        <div className='col-12 col-md-7 justify-content-end d-block d-md-flex mt-3 mt-md-0'>
                            <button className='btn btn-primary mx-1'>Invite Freelancers</button>
                            <button className='btn btn-outline-primary mx-1'><Icon>pencil-fill</Icon></button>
                            <button className='btn btn-outline-primary mx-1'><Icon>reply-fill</Icon></button>
                            <button className='btn btn-outline-primary mx-1'><Icon>x</Icon></button>
                        </div>
                    </div>
                    <div className='row px-3'>
                        <div className='col-12 bg-primary-light mt-4 py-2 rounded-3 text-center text-dark'>
                            <Icon position="me-2 text-primary">info-circle</Icon>There are checkouts pending. You can verify them in <Link to="/">checkout screen <Icon position="fsp-22">arrow-right-short</Icon></Link>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 col-md-12 col-lg-4 mb-4'>
                            <h4>Monday, 20 June</h4>
                            <span>Placed 9 hours ago by Bruce Wayne</span>
                        </div>
                        <div className='col-6 col-md-3 col-lg-2'>
                            <Icon>stopwatch</Icon> 01:00 - 01:30
                        </div>
                        <div className='col-6 col-md-3 col-lg-2'>
                            <Icon>headset</Icon> Customer Service
                        </div>
                        <div className='col-6 col-md-3 col-lg-2'>
                            <Icon>file-earmark</Icon> Flexible (24h)
                        </div>
                        <div className='col-6 col-md-3 col-lg-2'>
                            <Icon>cash-stack</Icon> €20.50 /hr
                        </div>
                    </div>
                    <hr />
                    <div className='row mb-5'>
                        <span className='fw-bold'>1 out of 1 filled</span>
                        <div className='col-12 col-md-3 pt-3'>
                            <div className='card shadow-lg border-0'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <img src='/assets/images/avtar/27.png' alt='...' />
                                        </div>
                                        <div className='col-7'>
                                            <span className='fsp-13'>Bruce Wayne</span>
                                            <Rating
                                                name="simple-controlled"
                                                className='mb-2'
                                                value={value}
                                                size="small"
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <span className='fsp-15 text-secondary'>€20.50 /hr <Icon position="ms-2">chat-square-fill</Icon></span>
                                        </div>
                                        <div className='col-1'>
                                            <Icon>three-dots-vertical</Icon>
                                        </div>
                                    </div>
                                    <hr />
                                    <Link to="/" className="fsp-15 d-block">Read Why €20.50 /hr</Link>
                                    <span className='fsp-13'>Worked: 01:00 - 02:00, 30m break</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pending