import React, { useEffect, useState } from 'react';
import Icon from '../../Components/Icon';
import {Link} from 'react-router-dom';
import { useSnackbar } from 'notistack';
function Applied() {
    const [applyjob,setapplyjob]=useState([]);

    const { enqueueSnackbar } = useSnackbar();
    
    const freelacer_id = localStorage.getItem('user');
    const id = JSON.parse(freelacer_id);
    useEffect( async()=>{
        await fetch(`/api/freelacer/applied/${id._id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then((res)=>res.json()).then(data=>setapplyjob(data.data))
        .catch(err=>{
            enqueueSnackbar('Failed to fetch job', { variant: 'error' });
        })
    },[])
    return (
        <>
            <section className='mt-0'>
                <div className='container py-5'>
                    <h3 className='fsp-30'>You signed up for shift(s) at Marqetize</h3>
                    <div className='row'>
                        <div className='col-12 col-md-8 py-4'>
                            {
                                applyjob.map((job)=>{
                                    return(
                                        <div className='border rounded shadow px-5 pt-4 pb-3 mb-4 position-relative'>
                                            <span className="position-absolute bg-primary rounded-5 start-0 top-0 he-100 mx-2 mt-2" style={{ width: '10px', height: '90%' }}></span>
                                            <h3>{job.job_id.project}</h3>
                                            <h6>{job.job_id.category}</h6>
                                            <p>Cancellation Policy: Strict 3 days for both parties</p>
                                        </div>
                                    )
                                })
                            }
                            <h5 className='text-success-dark mt-5 mb-3 fw-bold fsp-16'>Spread your chances</h5>
                            <p className='fsp-16'>Do you want to be sure that you can work? Increase this chance by responding to multiple shifts at the same time. Overlapping shifts will automatically expire if you are chosen. No worries.</p>
                            <div class="form-check mb-5">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Notify me about published shifts on the same day
                                </label>
                            </div>
                            <hr/>
                            <Link to="/freelancer/explore" className='btn btn-primary rounded-1 py-2_5 px-5'>Find More Shifts</Link>
                        </div>
                        <div className='col-12 col-md-4'>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item fsp-15 py-3 px-4">When do I hear if I am accepted for a shift? <Icon position="position-absolute end-0">chevron-right</Icon></li>
                                <li class="list-group-item fsp-15 py-3 px-4">What is the best way to prepare for a shift? <Icon position="position-absolute end-0">chevron-right</Icon></li>
                                <li class="list-group-item fsp-15 py-3 px-4">How can I withdraw my enrollment? <Icon position="position-absolute end-0">chevron-right</Icon></li>
                                <li class="list-group-item fsp-15 py-3 px-4">A fourth item <Icon position="position-absolute end-0">chevron-right</Icon></li>
                                <li class="list-group-item fsp-15 py-3 px-4">Ask your question by chat message <Icon position="position-absolute end-0">chevron-right</Icon></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Applied