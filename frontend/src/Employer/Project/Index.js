import React, {useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import Icon from '../../Components/Icon';
import { useSnackbar } from 'notistack';
function Index() {
    const [jobs, setJobs] = useState([]);
    const[shift,setShift]=useState([]);
    const { enqueueSnackbar } = useSnackbar();
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
        //shifts
        fetch('/api/employer/shifts', { 
            //GET mothod
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem('token')
            }}).then(response =>response.json()).then(data =>{setShift(data.data)})
            .catch(error => {
                enqueueSnackbar('Failed to fetch shifts', { variant: 'error' });
        })
    }, [enqueueSnackbar]);
    // console.log(jobs)
    return (
        <section className='mt-0 pt-5 pb-10' style={{ background: '#f1f1f1' }}>
            <div className='container py-5 px-3'>
                <div className='row'>
                    <div className='col-12 col-sm-3'>
                        <h4>Projects</h4>
                    </div>
                    <div className='col-12 col-sm-9'>
                        <button className='btn btn-outline-dark rounded-1 float-md-end mx-2 my-1'> Show archive</button>
                        <Link to="/clients/project/id/jobs/add">
                            <button className='btn btn-primary rounded-1 float-md-end mx-2 my-1'> <Icon>plus</Icon> Create new project</button>
                        </Link>
                    </div>
                    {/* projects */}
                    {
                        jobs.map((job,index) => (
                            <>
                                    <div className='row bg-white mt-3 p-3'>
                                        <div className='col-6 col-sm-4'>
                                            {job.project}
                                        </div>
                                        <div className='col-3 col-sm-4'>
                                            {job.category}
                                        </div>
                                        <div className='col-3 col-sm-4 pt-2 mt-lg-0'>
                                        <Link to={`/clients/project/id/job/${job._id}`}>
                                            <button className='btn btn-outline-secondary float-sm-end py-0 px-2 rounded-0'><Icon position="me-0 me-md-2">archive-fill</Icon><span className='d-none d-md-inline'>archive project</span></button>
                                        </Link>
                                        </div>
                                    </div>
                            </>
                        ))
                    }
                </div>
            </div><br /><br /><br /><br /><br /><br />
        </section>
    )
}

export default Index