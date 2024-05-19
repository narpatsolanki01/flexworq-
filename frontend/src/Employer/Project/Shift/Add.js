import React from "react";
import { useSnackbar } from 'notistack';
import {useNavigate}  from "react-router-dom"
import { useState,useEffect } from "react";

const Add = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    const[addShift, setAddshift] = useState({
        job: '',
        duration_from: '',
        duration_to: '',
        price:'',
        // visual: ''
    })
    useEffect(() => {
        fetch('/api/employer/jobs', { 
            //GET mothod
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem('token')
            }}).then(response =>response.json()).then(data =>{setJobs(data.data)})
            .catch(error => {
                enqueueSnackbar('Failed to fetch jobs', { variant: 'error' });
            })
    }, [enqueueSnackbar]);

    //save shift
    const saveShift = (e) => {
        e.preventDefault();

        if(!addShift.job || !addShift.duration_to || !addShift.duration_from || !addShift.price){
            enqueueSnackbar('Please enter all fields', { variant: 'error' });
            return 0;
        }

        fetch('/api/employer/addshift', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(addShift)
        }).then(response => response.json()).then(data => {
            if (data.success) {
                enqueueSnackbar(data.message, { variant: 'success' });
                // navigate('/clients/project/id/');
            }
            else {
                enqueueSnackbar(data.message, { variant: 'error' });
            }
        }).catch((error) => {
            enqueueSnackbar('An error occurred while adding job', { variant: 'error' });
        });
    }
    // console.log(addShift);
    return (

        <section className='mt-0 py-5 px-3 px-lg-5' style={{ background: '#f1f1f1' }}>
        <div className='container bg-white px-0'>
            <h6 className='pt-4 fw-bold ps-3'>Add new Shift</h6>
            <form className='client-job-form' onSubmit={saveShift}>
                <div className='row py-5 px-3 px-lg-5'>
                    <div className='col-12 col-md-3  text-lg-end mt-0  mt-lg-2 fw-500'>Project</div>
                    <div className='col-12 col-md-9  mt-1 mt-lg-0 mb-3'>
                        <select className='form-select rounded-0 border-secondary' 
                            onChange={(e) => setAddshift({...addShift, job: e.target.value})} placeholder="">
                            <option>Select Project</option>
                            {
                                jobs.map((job,index) => (
                                    <option value={job._id}>{job.project}</option>
                                ))
                            }
                        </select>
                    </div>
                    
                    {/* Time */}
                    <div className='col-12 col-md-3 text-lg-end mt-3 mb-3 mt-lg-4 fw-500'>Project Duration</div>
                    <div className='col-12 col-md-9 mt-1 mt-lg-4'>
                    <div className='row'>
                                <div className='col-12 col-md-4'>
                                    <input type="time" placeholder="" className="form-control rounded-1 border-secondary"
                                        onChange={(e) => setAddshift({...addShift, duration_from: e.target.value})}/>
                                </div>
                                <div className='col-12 col-md-4'>
                                    <input type="time" placeholder="" className="form-control rounded-1 border-secondary"
                                        onChange={(e) => setAddshift({...addShift, duration_to: e.target.value})}/>
                                </div>
                            </div>
                    </div>
                
                    {/* Price */}
                    <div className='col-12 col-md-3 text-lg-end mt-3 mt-lg-4 fw-500'>Price</div>
                    <div className='col-12 col-md-9 mt-1 mt-lg-4'>
                        <input type="number" placeholder="Enter Price  Ex. $10" className="form-control rounded-1 border-secondary"
                            onChange={(e) => setAddshift({...addShift, price: e.target.value})}/>
                    </div>
                </div>
                <button className='btn btn-primary w-100 py-3 rounded-0 text-white'>Save Job</button>
            </form>
        </div>
    </section>
    )
}
export  default Add;
