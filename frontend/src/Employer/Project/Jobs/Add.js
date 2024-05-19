import React, { useState } from 'react'
import DropZone from '../../../Components/Dropzone/Index';
import { useSnackbar } from 'notistack';
import {useNavigate}  from "react-router-dom"

function Add() {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const[addJob, setAddJob] = useState({
        project: '',
        category: '',
        skills:'',
        additionalBriefing: '',
        zipcode: '',
        number: '',
        contactPersonAtLocation: '',
        canBeReachedAt: '',
        // visual: ''
    })
    const AddJob = async (e) => {
        e.preventDefault();
        if (!validateJob()) {
            return 0;
        }
        //skils array required
        addJob.skills=addJob.skills.split(',');
        fetch('/api/employer/addjob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(addJob)
        }).then(res=>res.json()).then(data => {
            if (data.success) {
                enqueueSnackbar(data.message, { variant: 'success' });
                navigate('/clients/projects');
            } else {
                enqueueSnackbar(data.message, { variant: 'error' });
            }
        }).catch(err => {
            enqueueSnackbar(err.message, { variant: 'error' });
        })
    }
    //validating the request
    const validatezipcode = (zipcode) => {
        const re = /^[0-9]{6}$/;
        return re.test(zipcode);
      }
    const validateJob = () => {
        if (!addJob.project || !addJob.category || !addJob.additionalBriefing || !addJob.skills || !addJob.zipcode || !addJob.number || !addJob.contactPersonAtLocation || !addJob.canBeReachedAt) {
            enqueueSnackbar('Please enter all fieldsa', { variant: 'error' });
            return 0;
        }
        if (!validatezipcode(addJob.zipcode)) {
            enqueueSnackbar('Please enter a valid zipcode', { variant: 'error' });
            return 0;
        }  
      
        return 1;
    }

    return (
        <section className='mt-0 py-5 px-3 px-lg-5' style={{ background: '#f1f1f1' }}>
            <div className='container bg-white px-0'>
                <h6 className='pt-4 fw-bold ps-3'>Add new job</h6>
                <form className='client-job-form' onSubmit={AddJob}>
                    <div className='row py-5 px-3 px-lg-5'>
                        <div className='col-12 col-md-3 text-lg-end mt-0 mt-lg-2 fw-500'>Project</div>
                        <div className='col-12 col-md-9 mt-1 mt-lg-0'>
                            <select className='form-select rounded-0 border-secondary' 
                                onChange={(e) => setAddJob({...addJob, project: e.target.value})}>
                                <option></option>
                                <option value="Identra">Identra - General</option>
                                <option value="Marqetize">Marqetize - General</option>
                            </select>
                        </div>
                        {/*  */}
                        <div className='col-12 col-md-3 text-lg-end mt-3 mt-lg-4 fw-500'>Category</div>
                        <div className='col-12 col-md-9 mt-1 mt-lg-4'>
                            <select className="form-select rounded-0 border-secondary" 
                                onChange={(e) => setAddJob({...addJob, category: e.target.value})}>
                                <option value=""></option><option value="g8e9r8">Assistant cook</option>
                                <option value="v8we98">Barista</option><option value="vp87vx">Bartending</option>
                                <option value="98zrv8">Catering</option><option value="e9xygx">Cleaning</option>
                                <option value="9xywgx">Construction worker</option>
                                <option value="gxvar8">Corona Support</option>
                                <option value="gxewrx">Customer service</option>
                                <option value="v8wz9x">Delivery </option>
                                <option value="qxpvrx">Delivery - Hospitality</option>
                                <option value="78gyr8">Forklift driver</option>
                                <option value="w78grx">Hosting</option>
                                <option value="vxq77x">Hosting</option>
                                <option value="98yyg8">Housekeeping</option>
                                <option value="6vxw9x">Independent chef</option>
                                <option value="vxww9x">Mover</option>
                                <option value="ex6pwx">Orderpicker</option>
                                <option value="9xawqx">Painter</option>
                                <option value="g8ezrx">Product promotion</option>
                                <option value="q8prr8">Roomservice</option>
                                <option value="qxpgr8">Salesclerk</option>
                                <option value="z9xaqx">Serving</option>
                                <option value="9xzqv8">Sitecrew - Hospitality</option>
                                <option value="vxwv98">Sitecrew - Retail</option>
                                <option value="7xgarx">Street vendor</option>
                                <option value="rx9v78">Training</option>
                                <option value="e86wwx">User research</option>
                                <option value="98aeq8">Volunteer work</option>
                                <option value="qgxvrx">Wardrobe</option>
                                <option value="e86ewx">Warehouse assistant</option>
                                <option value="r89w78">Wood worker</option>
                            </select>
                        </div>
                        {/* Skills */}
                        <div className='col-12 col-md-3 text-lg-end mt-3 mt-lg-4 fw-500'>Skills</div>
                        <div className='col-12 col-md-9 mt-1 mt-lg-4'>
                            <input type="text" placeholder="Example: skill1 , skill2 " className="form-control rounded-1 border-secondary"
                                onChange={(e) => setAddJob({...addJob, skills: e.target.value})}/>
                        </div>
                        {/*  */}
                        {/* <div className='col-12 col-md-3 text-lg-end mt-3 mt-lg-4 fw-500'>Wanted:</div>
                        <div className='col-12 col-md-9 mt-1 mt-lg-4'>
                            <input type="text" placeholder="Example: Hospitality heroes for bartending" className="form-control rounded-1 border-secondary" />
                        </div> */}
                        {/*  */}
                        <div className='col-12 col-md-3 text-lg-end mt-3 mt-lg-4 fw-500'>Additional briefing</div>
                        <div className='col-12 col-md-9 mt-1 mt-lg-4'>
                            <textarea className='form-control rounded-1' rows="3" cols="50" placeholder="Describe in 800 characters what the freelancer can expect from you and what you expect from the freelancer. For example: how many minutes should the freelancer be present before the start of a shift? Is there (free) parking? Can the freelancer join for lunch/dinner?" style={{ minHeight: '50px', overflow: ' hidden', overflowWrap: 'break-word', resize: 'none', height: ' 100px' }}
                                onChange={(e) => setAddJob({...addJob, additionalBriefing: e.target.value})}></textarea>
                        </div>
                        {/*  */}
                        <div className='col-12 col-md-3 text-lg-end mt-3 mt-lg-4 fw-500'>Report at adress</div>
                        <div className='col-12 col-md-9 mt-1 mt-lg-4'>
                            <div className='row'>
                                <div className='col-12 col-md-4'>
                                    <input type="text" className="form-control rounded-1" placeholder="Zipcode" 
                                        onChange={(e) => setAddJob({...addJob, zipcode: e.target.value})}/>
                                </div>
                                <div className='col-12 col-md-4'>
                                    <input type="text" className="form-control rounded-1 mt-2 mt-md-0" placeholder="Number" 
                                        onChange={(e) => setAddJob({...addJob,  number: e.target.value})}/>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/* <div className='col-12 col-md-3 text-lg-end mt-3 mt-lg-4 fw-500'>Who receives TemperMail?</div>
                        <div className='col-12 col-md-9 mt-1 mt-lg-4 d-flex'>
                            <input type="checkbox" className='form-check' /> <span className='ms-3 mt-2 mt-lg-2 mt-xl-0'>Pedram Alinia</span>
                        </div> */}
                        {/*  */}
                        <div className='col-12 col-md-3 text-lg-end mt-3 mt-lg-4 fw-500'>Contactperson at location</div>
                        <div className='col-12 col-md-9 mt-1 mt-lg-4'>
                            <input type="text" className="form-control rounded-1" 
                                onChange={(e) => setAddJob({...addJob, contactPersonAtLocation: e.target.value})}/>
                        </div>
                        {/*  */}
                        <div className='col-12 col-md-3 text-lg-end mt-3 mt-lg-4 fw-500'>Can be reached at</div>
                        <div className='col-12 col-md-9 mt-1 mt-lg-4'>
                            <input type="text" className="form-control rounded-1" placeholder='06-' 
                                onChange={(e) => setAddJob({...addJob, canBeReachedAt: e.target.value})}/>
                        </div>
                        {/*  */}
                        {/* <div className='col-12 col-md-3 text-lg-end mt-3 mt-lg-4 fw-500'>Tips shared?</div>
                        <div className='col-12 col-md-9 mt-1 mt-lg-4'>
                            <select name="tips" id="tips" className="form-control">
                                <option value="no">No, tipping is not shared with freelancer</option>
                                <option value="yes">Yes, tipping is shared</option>
                            </select>
                        </div> */}
                        {/*  */}
                        <div className='col-12 col-md-3 text-lg-end mt-3 mt-lg-4 fw-500'>Visual</div>
                        <div className='col-12 col-md-9 mt-1 mt-lg-4'>
                            <DropZone />
                        </div>
                        {/*  */}
                    </div>
                    <button className='btn btn-primary w-100 py-3 rounded-0 text-white'>Save Job</button>
                </form>
            </div>
        </section>
    )
}

export default Add