import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import Icon from '../../Components/Icon'
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useParams } from 'react-router-dom';
import { data } from 'jquery';
function Details() {
    const {id} =useParams();
    const [checkedCount, setCheckedCount] = useState(true);
    const [jobs, setjobs] = useState({});
    useEffect(() => {
        fetch(`/api/freelacer/job/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => response.json()).then(data =>setjobs(data.data))
            .catch(error => console.log(error))
    }, []);
    // Checkbox
    // apply show
    var count = 0;
    const jobApply=(e)=>{
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
    // Shifts 
    // const shifts = [
    //     { day: 'Sun', date: '31 Jul', prize: '$20.50/hr', time: { to: '11:00', from: '21:00' } },
    //     { day: 'Mon', date: '01 Aug', prize: '$25.50/hr', time: { to: '11:00', from: '21:00' } },
    //     { day: 'Tue', date: '02 Aug', prize: '$18.50/hr', time: { to: '10:00', from: '20:00' } },
    //     { day: 'Tue', date: '02 Aug', prize: '$10.50/hr', time: { to: '10:00', from: '15:00' } },
    //     { day: 'Fri', date: '04 Aug', prize: '$13.50/hr', time: { to: '09:00', from: '14:00' } },
    //     { day: 'Fri', date: '04 Aug', prize: '$15.50/hr', time: { to: '11:00', from: '16:00' } },
    //     { day: 'Fri', date: '04 Aug', prize: '$11.50/hr', time: { to: '08:00', from: '18:00' } },
    // ];
    //Show More and less 
    const [ShiftToShow, setShiftToShow] = useState(4);
    return (
        <>
            <section className='mt-0 mt-md-3'>
                <div className='container'>
                    <div className='row mt-0 mt-md-4'>
                        <div className='col-12 col-md-8 pb-5'>
                            <div className='row px-0 px-md-3'>
                                <div className='col-12 col-md-6 order-md-0 order-2 pt-2 pt-md-0'>
                                    <Link to="/freelancer/explore">{jobs.category}</Link>
                                    <h4>{jobs.project}</h4>
                                </div>
                                <div className='col-12 col-md-6 d-block order-md-0 order-2 d-md-flex justify-content-end'>
                                    <div className='d-flex d-md-block'>
                                        <span className='fs-6 me-2 fw-600'>4.88</span>
                                        <Rating name="size-small" defaultValue={3} size="small" />
                                        <div className='text-start text-md-end'><span>(123 ratings)</span></div>
                                    </div>
                                </div>
                                <div className='col-12 mt-0 mt-md-3 px-0 px-md-3 order-1'>
                                    <div className='job-details-bg w-100 rounded-0 rounded-md-2' style={{ backgroundImage: `url(/assets/images/jobs/Group_397@2x.png)` }}></div>
                                </div>
                            </div>
                            <div className='px-0 px-md-3'>
                                {/* desc */}
                                <div className='mt-3'>
                                    <span className='fw-700'>Description</span>
                                    <p className='mt-1 fsp-14'>
                                        {jobs.additionalBriefing}
                                        <span className="collapse ms-0" id="desc">
                                            En dat niet alleen, ons mooie restaurant ligt namelijk in het Mastbos. Je bent bij ons welkom van lunch tot diner. En ook voor een bruiloft, een intiem etentje, een kinderfeestje of gewoon een lekkere borrel, want Dennenlucht Breda is zeven dagen per week open.
                                        </span><br />
                                        <span id='show_more' type="button" data-bs-toggle="collapse" data-bs-target="#desc" onClick={() => document.getElementById('show_more').innerHTML === 'Read more' ? document.getElementById('show_more').innerHTML = 'Read less' : document.getElementById('show_more').innerHTML = 'Read more'} className='fw-bold mt-2'>Read more</span>
                                    </p>
                                </div>
                                {/* Shifts only show on Moile */}
                                <div className='col-12 col-md-4 pb-5 d-block d-md-none pt-3'>
                                    {/* <p className='fw-bold fsp-14'>Shifts</p>
                                    {
                                        shifts.map((val, index)=>(
                                            <ShiftCard data={val} key={index} onChange={e => { jobApply(e.target.checked) }} />
                                        ))
                                    }
                                    <div className='text-center my-2'>
                                        <button  className='btn border-0 text-primary mt-2'>{ShiftToShow === 4 ? 'Show more shifts' : 'Show less shifts'}<Icon>chevron-right</Icon></button>
                                    </div> */}
                                </div>
                                {/* Rules and Regularation */}
                                <div className='mt-2'>
                                    <span className='fw-700 fsp-14'>Rules and regulations</span>
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
                                {/* Job Descripation */}
                                <div className='mt-3'>
                                    {/* <span className='fw-700 fsp-14'>Job Description</span>
                                    <p className='mt-1 fsp-14'>
                                        Is de keuken al bekend terrein? Kom lekker werken bij Dennenlucht! We hebben vaak verschillende opdrachten open staan.
                                        <span className="collapse ms-0" id="job_desc">
                                            <br /><br />
                                            Dennenlucht Breda zoekt zelfstandig werkende koks!<br /><br />
                                            Als Zelfstandig Werkend Kok wil je altijd werken met de beste kwaliteit. Daarvoor ben je bij ons aan het juiste adres. Je werkt in een prachtige bosrijke omgeving en bent ook nog eens aan het koken met lekkere producten. Samen met jouw collega’s, maak je lol en serveer je de mooiste gerechten aan je gasten.<br /><br />
                                            Dennenlucht zoekt ook een gezellig en vaste pool! Vond jij de (eerste) klus leuk en lijkt het je tof om vaker bij ons aan de slag te gaan, dan voegen we je graag toe aan onze favorietenpool. <br /><br />
                                            Kijk voor meer informatie op dennenlucht.nl
                                        </span><br />
                                        <span id='read_more' type="button" data-bs-toggle="collapse" data-bs-target="#job_desc" onClick={() => document.getElementById('read_more').innerHTML === 'Read more' ? document.getElementById('read_more').innerHTML = 'Read less' : document.getElementById('read_more').innerHTML = 'Read more'} className='fw-600 mt-2'>Read more</span>
                                    </p> */}
                                </div>
                                {/* language */}
                                <div className='mt-3'>
                                    <span className='fw-700 fsp-14'>Required language</span>
                                    <div className='mt-3'>
                                        <button type="button" className="btn btn-outline-dark" disabled>English</button>
                                        <button type="button" className="btn btn-outline-dark mx-2" disabled>Dutch</button>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <span className='fw-700 fsp-14'>Required skills</span>
                                    <div className='mt-3'>
                                        {

                                            jobs.skills && jobs.skills.map((skill, index) => (
                                                <>
                                                    <p className='bg-light-dark me-2 rounded-1 p-1 d-inline text-secondary' style={{ lineHeight: '35px' }}>{jobs.skills[index]}</p>
                                                </>
                                            ))
                                        }
                                        
                                    </div>
                                </div>
                                {/* location */}
                                <div className='mt-4'>
                                    <p className='fw-bold fsp-14'>Location</p>
                                    <iframe title="hello" className='rounded' style={{ width: '100%', height: '250px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9948.755930789293!2d5.4046516355819305!3d51.4363231503965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6dbcc3fe6f879%3A0xebca69128b5a2c74!2s5658%20EN%20Heistraat%2C%20Netherlands!5e0!3m2!1sen!2sin!4v1662534795407!5m2!1sen!2sin" loading="lazy"></iframe>
                                    <p className='text-muted'>Heistraat 20, 1401EP</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 pb-5 d-none d-md-block'>
                            <div className='position-sticky top-15 overflow-auto scrollbar-hidden pb-10' style={{ height: '100vh' }}>
                                {/* {
                                    shifts.slice(0,ShiftToShow).map((val, index) => (
                                        //console.log(val)
                                        <ShiftCard data={val} key={index} onChange={e => { jobApply(e.target.checked) }} />
                                    ))
                                }
                                <div className='text-center my-2'>
                                    <button onClick={() => ShiftToShow === 4 ? setShiftToShow(shifts.length) : setShiftToShow(4)} className='btn border-0 text-primary mt-2'>{ShiftToShow === 4 ? 'Show more shifts' : 'Show less shifts'}<Icon>chevron-right</Icon></button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={`position-fixed w-100 bg-white border-top job-continue-model ${checkedCount ? 'active' : ''}`}>
                <div className='container'>
                    <div className='row pt-3 pb-2'>
                        <div className='col-7'>
                            <div className='col-12 mt-0 mt-md-2'></div>
                            <div className='col-12'><Link to="/freelancer/explore/id/negotiate" className='btn btn-outline-primary px-0 border-0 me-1 rounded-1 mb-1 d-flex ms-1 d-md-none'>Negotiate rate</Link></div>
                        </div>
                        <div className='col-5'>
                            <Link to={`/freelancer/explore/${jobs._id}/apply`} className='btn btn-primary rounded-1 mb-1 ms-4 mt-2 mt-md-0 float-end'>Continue</Link>
                            <Link to="/freelancer/explore/id/negotiate" className='btn text-primary px-0 border-0 me-1 rounded-1 mb-1 d-none d-md-block float-end'>Negotiate rate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function ShiftCard({ data, onChange }) {
    return (
        <div className='card shadow mb-3'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-2 p-0'>
                        <Checkbox onChange={onChange} label="Monday" icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} />
                    </div>
                    <div className='col-4'>
                        <span className='fw-700 fsp-15'>SUN 02 AUG</span>
                        <p className='fsp-14 text-secondary'>{data.duration_to} - {data.duration_from}</p>
                    </div>
                    <div className='col-6'>
                        <span className='fw-700 float-end'>{data.price}</span>
                        <p className='fsp-14 text-secondary float-end'>0 applicant for 1 spot</p>
                    </div>
                </div>
                <hr className='m-0 my-1' />
                <div className='text-center'>
                    <span className='w-100 fsp-14 text-secondary'><i className="bi bi-speedometer me-1"></i> Cancle at least 48 hours in advance</span>
                </div>
            </div>
        </div>
    )
}

export default Details