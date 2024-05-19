import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Radio from '@mui/material/Radio';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


function Details() {

    const [checkedCount, setCheckedCount] = useState(false);
    // Checkbox
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    var count = 0;
    const jobApply = (e) => {
        if (e)
            count++;
        else
            count--;

        if (count < 0) {
            setCheckedCount(false)
        }
        else {
            setCheckedCount(true)
        }
    }

    return (
        <>
            <div className='container px-3'>
                <div className='row mt-4 mt-lg-4'>
                    <div className='col-12 col-md-8 pb-5'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <span>Zelfstandig werkend kok</span>
                                <h4>Dennenlucht Breda</h4>
                            </div>
                            <div className='col-12 col-md-6 position-relative d-flex justify-content-end'>
                                <div className='d-block'>
                                    <span className='fs-5 me-2 fw-600'>4.88</span>
                                    <Rating name="size-large" defaultValue={3} size="large" />
                                    <div className='text-end'><span>(123 ratings)</span></div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <div className='job-details-bg w-100 rounded-4' style={{ backgroundImage: `url(/assets/images/jobs/Group_397@2x.png)` }}></div>
                        </div>
                        <div className='mt-3'>
                            <span className='fw-700'>Description</span>
                            <p className='mt-1 fsp-14'>Dennenlucht Breda is een unieke plek. Bij ons geniet je van pannenkoeken en al het andere lekkers uit onze keuken. En dat niet alleen, ons mooie restaurant ligt namelijk in het Mastbos. Je bent bij ons welkom van lunch tot diner. En ook voor een bruiloft, een intiem etentje, een kinderfeestje of gewoon een lekkere borrel, want Dennenlucht Breda is zeven dagen per week open.</p>
                        </div>

                        {/* Show in Mobile */}
                        <div className='d-block d-md-none'>
                            <div className='card shadow mb-3'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-2 p-0'>
                                            <Checkbox onChange={e => { jobApply(e.target.checked) }} {...label} icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} />
                                        </div>
                                        <div className='col-4'>
                                            <span className='fw-700'>Sun 31 Jul</span>
                                            <p className='fsp-14 text-secondary'>11:00 - 21:00</p>
                                        </div>
                                        <div className='col-6'>
                                            <span className='fw-700 float-end'>$20.50 /hr</span>
                                            <p className='fsp-14 text-secondary float-end'>0 applicant for 1 spot</p>
                                        </div>
                                    </div>
                                    <hr className='m-0 my-1' />
                                    <div className='text-center'>
                                        <span className='w-100 fsp-14 text-secondary'><i className="bi bi-speedometer me-1"></i> Cancle at least 48 hours in advance</span>
                                    </div>
                                </div>
                            </div>
                            <div className='card shadow mb-3'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-2 p-0'>
                                            <Checkbox onChange={e => { jobApply(e.target.checked) }} {...label} icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} />
                                        </div>
                                        <div className='col-4'>
                                            <span className='fw-700'>Sun 31 Jul</span>
                                            <p className='fsp-14 text-secondary'>11:00 - 21:00</p>
                                        </div>
                                        <div className='col-6'>
                                            <span className='fw-700 float-end'>$20.50 /hr</span>
                                            <p className='fsp-14 text-secondary float-end'>0 applicant for 1 spot</p>
                                        </div>
                                    </div>
                                    <hr className='m-0 my-1' />
                                    <div className='text-center'>
                                        <span className='w-100 fsp-14 text-secondary'><i className="bi bi-speedometer me-1"></i> Cancle at least 48 hours in advance</span>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center my-2'>
                                <Link to="/" >  Show more shifts</Link>
                            </div>
                        </div>

                        {/* end Show on Mobile */}
                        <div>
                            <span className='fw-700'>Rules and regulations</span>
                            <ul className='list-unstyled'>
                                <li className='d-flex mt-2'>
                                    <div className='me-3'>
                                        <img src="/assets/images/icons/Icon awesome-check.png" alt='...' />
                                    </div>
                                    <span className='fsp-14'>Direct payment (within 3 business days) available Cancellation</span>
                                </li>
                                <li className='d-flex mt-1'>
                                    <div className='me-3'>
                                        <img src="/assets/images/icons/Icon awesome-check.png" alt='...' />
                                    </div>
                                    <span className='fsp-14'>Cancellation policies apply (Check shifts for reference)</span>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-3'>
                            <span className='fw-700'>Job Description</span>
                            <p className='mt-1 fsp-14'>
                                Is de keuken al bekend terrein? Kom lekker werken bij Dennenlucht! We hebben vaak verschillende opdrachten open staan.<br /><br />
                                Dennenlucht Breda zoekt zelfstandig werkende koks!<br /><br />
                                Als Zelfstandig Werkend Kok wil je altijd werken met de beste kwaliteit. Daarvoor ben je bij ons aan het juiste adres. Je werkt in een prachtige bosrijke omgeving en bent ook nog eens aan het koken met lekkere producten. Samen met jouw collega’s, maak je lol en serveer je de mooiste gerechten aan je gasten.<br /><br />
                                Dennenlucht zoekt ook een gezellig en vaste pool! Vond jij de (eerste) klus leuk en lijkt het je tof om vaker bij ons aan de slag te gaan, dan voegen we je graag toe aan onze favorietenpool. <br /><br />
                                Kijk voor meer informatie op dennenlucht.nl
                            </p>
                        </div>
                        <div className='mt-3'>
                            <span className='fw-700'>Required language</span>
                            <div className='mt-3'>
                                <button type="button" className="btn btn-outline-dark">English</button>
                                <button type="button" className="btn btn-outline-dark mx-2">Dutch</button>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <span className='fw-700'>Required skills</span>
                            <div className='mt-3'>
                                <button type="button" className="btn btn-outline-dark me-2 my-2">&gt; 1 year experience</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Making mise-en-place</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Cleaning the kitchen</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Manage kitchen stock</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Quick service</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Stress resistant</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Social hygiene</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Reduce sauces</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Operating kitchen appliances</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Portionering</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Cutting and shredding</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Independent chef</button>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <span className='fw-700 '>Rules appearance and clothing</span>
                            <div className='mt-3'>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Bring your own chef's clothing</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Sturdy shoes</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Chair in a bun</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">No nail polish / fake nails</button>
                                <button type="button" className="btn btn-outline-dark me-2 my-2 ">Hair in ponytail</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='d-none d-md-block'>
                            <div className='card shadow mb-3'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-2 p-0'>
                                            <Checkbox onChange={e => { jobApply(e.target.checked) }} {...label} icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} />
                                        </div>
                                        <div className='col-4'>
                                            <span className='fw-700'>Sun 31 Jul</span>
                                            <p className='fsp-14 text-secondary'>11:00 - 21:00</p>
                                        </div>
                                        <div className='col-6'>
                                            <span className='fw-700 float-end'>$20.50 /hr</span>
                                            <p className='fsp-14 text-secondary float-end'>0 applicant for 1 spot</p>
                                        </div>
                                    </div>
                                    <hr className='m-0 my-1' />
                                    <div className='text-center'>
                                        <span className='w-100 fsp-14 text-secondary'><i className="bi bi-speedometer me-1"></i> Cancle at least 48 hours in advance</span>
                                    </div>
                                </div>
                            </div>
                            <div className='card shadow mb-3'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-2 p-0'>
                                            <Checkbox onChange={e => { jobApply(e.target.checked) }} {...label} icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} />
                                        </div>
                                        <div className='col-4'>
                                            <span className='fw-700'>Sun 31 Jul</span>
                                            <p className='fsp-14 text-secondary'>11:00 - 21:00</p>
                                        </div>
                                        <div className='col-6'>
                                            <span className='fw-700 float-end'>$20.50 /hr</span>
                                            <p className='fsp-14 text-secondary float-end'>0 applicant for 1 spot</p>
                                        </div>
                                    </div>
                                    <hr className='m-0 my-1' />
                                    <div className='text-center'>
                                        <span className='w-100 fsp-14 text-secondary'><i className="bi bi-speedometer me-1"></i> Cancle at least 48 hours in advance</span>
                                    </div>
                                </div>
                            </div>
                            <div className='card shadow mb-3'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-2 p-0'>
                                            <Checkbox onChange={e => { jobApply(e.target.checked) }} {...label} icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} />
                                        </div>
                                        <div className='col-4'>
                                            <span className='fw-700'>Sun 31 Jul</span>
                                            <p className='fsp-14 text-secondary'>11:00 - 21:00</p>
                                        </div>
                                        <div className='col-6'>
                                            <span className='fw-700 float-end'>$20.50 /hr</span>
                                            <p className='fsp-14 text-secondary float-end'>0 applicant for 1 spot</p>
                                        </div>
                                    </div>
                                    <hr className='m-0 my-1' />
                                    <div className='text-center'>
                                        <span className='w-100 fsp-14 text-secondary'><i className="bi bi-speedometer me-1"></i> Cancle at least 48 hours in advance</span>
                                    </div>
                                </div>
                            </div>
                            <div className='card shadow mb-3'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-2 p-0'>
                                            <Checkbox onChange={e => { jobApply(e.target.checked) }} {...label} icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} />
                                        </div>
                                        <div className='col-4'>
                                            <span className='fw-700'>Sun 31 Jul</span>
                                            <p className='fsp-14 text-secondary'>11:00 - 21:00</p>
                                        </div>
                                        <div className='col-6'>
                                            <span className='fw-700 float-end'>$20.50 /hr</span>
                                            <p className='fsp-14 text-secondary float-end'>0 applicant for 1 spot</p>
                                        </div>
                                    </div>
                                    <hr className='m-0 my-1' />
                                    <div className='text-center'>
                                        <span className='w-100 fsp-14 text-secondary'><i className="bi bi-speedometer me-1"></i> Cancle at least 48 hours in advance</span>
                                    </div>
                                </div>
                            </div>
                            <div className='card shadow mb-3'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-2 p-0'>
                                            <Checkbox onChange={e => { jobApply(e.target.checked) }} {...label} icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} />
                                        </div>
                                        <div className='col-4'>
                                            <span className='fw-700'>Sun 31 Jul</span>
                                            <p className='fsp-14 text-secondary'>11:00 - 21:00</p>
                                        </div>
                                        <div className='col-6'>
                                            <span className='fw-700 float-end'>$20.50 /hr</span>
                                            <p className='fsp-14 text-secondary float-end'>0 applicant for 1 spot</p>
                                        </div>
                                    </div>
                                    <hr className='m-0 my-1' />
                                    <div className='text-center'>
                                        <span className='w-100 fsp-14 text-secondary'><i className="bi bi-speedometer me-1"></i> Cancle at least 48 hours in advance</span>
                                    </div>
                                </div>
                            </div>
                            <div className='card shadow mb-3'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-2 p-0'>
                                            <Checkbox onChange={e => { jobApply(e.target.checked) }} {...label} icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} />
                                        </div>
                                        <div className='col-4'>
                                            <span className='fw-700'>Sun 31 Jul</span>
                                            <p className='fsp-14 text-secondary'>11:00 - 21:00</p>
                                        </div>
                                        <div className='col-6'>
                                            <span className='fw-700 float-end'>$20.50 /hr</span>
                                            <p className='fsp-14 text-secondary float-end'>0 applicant for 1 spot</p>
                                        </div>
                                    </div>
                                    <hr className='m-0 my-1' />
                                    <div className='text-center'>
                                        <span className='w-100 fsp-14 text-secondary'><i className="bi bi-speedometer me-1"></i> Cancle at least 48 hours in advance</span>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center my-2'>
                                <Link to="/" >  Show more shifts</Link>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <span className='fw-bold'>Location</span>
                            <img src="/assets/images/maps/map.png" className='w-100 mt-2' alt='...' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`position-fixed w-100 bg-white border-top job-continue-model ${checkedCount ? 'active' : ''}`}>
                <div className='container'>
                    <div className='row pt-3 pb-2'>
                        <div className='col-7'>
                            <div className='col-12 mt-0 mt-md-2'>€78.00 for 1 shift</div>
                            <div className='col-12'><Link to="/freelancer/explore/id/negotiate" className='btn btn-outline-primary px-0 border-0 me-1 rounded-1 mb-1 d-flex ms-1 d-md-none'>Negotiate rate</Link></div>
                        </div>
                        <div className='col-5'>
                            <Link to="/freelancer/explore/id/apply" className='btn btn-primary rounded-1 mb-1 ms-4 mt-2 mt-md-0 float-end'>Continue</Link>
                            <Link to="/freelancer/explore/id/negotiate" className='btn btn-outline-primary px-0 border-0 me-1 rounded-1 mb-1 d-none d-md-block float-end'>Negotiate rate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details