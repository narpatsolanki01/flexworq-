import React, {useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom';
// import Icon from '../../../Components/Icon';
import { useSnackbar } from 'notistack';

function Details() {
    //route parameter
    const { id } = useParams();

    //state variable
    const [job, setJob] = useState({});
    const [shift, setShift] = useState([]);

    //snackbar
    const { enqueueSnackbar } = useSnackbar();

    //fetching job details
    useEffect(() => {
        fetch(`/api/employer/job/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => response.json()).then(data =>setJob(data.data))
        .catch((error) => {
            enqueueSnackbar('An error occurred while fetching job', { variant: 'error' });
        });

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
    }, [enqueueSnackbar,id]);  
    // console.log(shift);



    return (
        <section className='mt-0 pt-3 pb-10 px-3' style={{ background: '#f1f1f1' }}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 m-0 p-0 px-3 px-lg-0'>
                        <span className='d-block'>{job.project}</span>
                        <h4>{job.category}</h4>
                    </div>
                    {/* <div className='col-12 col-md-6 pb-3'>
                        <button className='btn btn-outline-dark rounded-1 float-md-end mx-1 my-1'> Archive Job</button>
                        <Link to="/clients/project/id/jobs/add" className='btn btn-primary rounded-1 float-md-end mx-1 my-1'>Duplicate</Link>
                        <button className='btn btn-primary rounded-1 float-md-end mx-1 my-1'>Edit</button>
                    </div> */}
                    {/* //// */}
                    <div className='row bg-white p-0 m-0 pb-4'>
                        <span className='my-3'>Customer service</span>
                        <div className='col-12 col-lg-3 text-secondary'>Skills</div>
                        <div className='col-12 col-lg-9'>
                            {
                                job.skills && job.skills.map((skill, index) => (
                                    <>
                                        <p className='bg-light-dark me-2 rounded-1 p-1 d-inline text-secondary' style={{ lineHeight: '35px' }}>{job.skills[index]}</p>
                                    </>
                                ))}
                        </div>
                        {/* <div className='col-12 col-lg-3 text-secondary mt-4 mt-lg-2'>Appearance and clothing</div>
                        <div className='col-12 col-lg-9 mt-2'>
                            <p className='bg-light-dark me-2 rounded-1 p-1 d-inline text-secondary' style={{ lineHeight: '35px' }}>Clothing of own choosing</p>
                            <p className='bg-light-dark me-2 rounded-1 p-1 d-inline text-secondary' style={{ lineHeight: '35px' }}>Neat trousers</p>
                            <p className='bg-light-dark me-2 rounded-1 p-1 d-inline text-secondary' style={{ lineHeight: '35px' }}>Trimmed beard</p>
                        </div> */}
                        <div className='col-12 col-lg-3 text-secondary mt-4 mt-lg-2'>Additional briefing</div>
                        <div className='col-12 col-lg-9 mt-2'>
                            {job.additionalBriefing}
                        </div>
                        <div className='col-12 col-lg-3 text-secondary mt-4 mt-lg-2'>Location</div>
                        <div className='col-12 col-lg-9 mt-2'>
                            Boompjes 40 <br />3011XB Rotterdam
                        </div>
                        <div className='col-12 col-lg-3 text-secondary mt-4 mt-lg-2'>Contactperson at location....</div>
                        <div className='col-12 col-lg-9 mt-2'>
                           {job.contactPersonAtLocation}
                        </div>
                        {/* <div className='col-12 col-lg-3 text-secondary mt-4 mt-lg-2'>Who receives TemperMail?....</div>
                        <div className='col-12 col-lg-9 mt-2'>
                            Pedram Alinia
                        </div> */}
                        <div className='col-12 col-lg-3 text-secondary mt-4 mt-lg-3'>Visual</div>
                        <div className='col-12 col-lg-9 mt-3'>
                            <img src='https://tmpr-photos2.fra1.digitaloceanspaces.com/hero/406339.jpg' className='w-50' alt='...' />
                        </div>
                    </div>

                    {/* //// */}
                    <div className='row mt-5'>
                        <div className='col-4'>
                            <h3>Schedule</h3>
                        </div>
                        <div className='col-8'>
                            <button className='btn btn-primary float-end'>Recurring shift</button>
                        </div>
                    </div>
                    <div className='row bg-white p-0 m-0 pb-4 mt-2'>
                        <div className="tab-container">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item active"><a className="nav-link active" href="#home" role="tab" aria-controls="home" data-bs-toggle="tab">Active schedules</a></li>
                                <li className="nav-item"><a className="nav-link" href="#profile" role="tab" aria-controls="profile" data-bs-toggle="tab">Inactive schedules</a></li>
                            </ul>
                            <div className="tab-content">
                                {/* tab 1 */}
                                <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className='d-flex justify-content-center align-items-center p-5'>
                                        <div className='d-block text-center'>
                                            <img src='https://temper.works/images/vendor/temper-components/src/cactus.svg' className='bg-light-dark p-3 rounded-circle' alt='...' />
                                            <span className='d-block lh-lg'>There are no active schedules for this job.</span>
                                        </div>
                                    </div>
                                </div>
                                {/* tab 2 */}
                                <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className='d-flex justify-content-center align-items-center p-5'>
                                        <div className='d-block text-center'>
                                            <img src='https://temper.works/images/vendor/temper-components/src/cactus.svg' className='bg-light-dark p-3 rounded-circle' alt='...' />
                                            <span className='d-block lh-lg'>There are no inactive schedules for this job.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='row mt-5'>
                        <div className='col-3'>
                            <h3>Shifts</h3>
                        </div>
                        <div className='col-9'>
                            <button className='btn btn-outline-dark float-end mx-1 my-1'>View archive</button>
                            <Link to={`/clients/project/id/shift/add`} className='btn btn-primary float-end mx-1 my-1'>Add shift</Link>
                            {/* <button className='btn btn-primary float-end mx-1 my-1'>Add shift</button> */}
                        </div>
                    </div>
                    <div className='row bg-white p-0 m-0 pb-4 mt-2'>
                        <div className='col-12'>
                            {
                                shift.map((shift, index) => (
                                    <div className='row bg-white mt-3 p-3'>
                                        <div className='col-6 col-sm-4'>
                                            {
                                             shift.job===job._id?job.project:"Hello"
                                            }
                                        </div>
                                        <div className='col-3 col-sm-4'>
                                            {`${shift.duration_from} - ${shift.duration_to}`} <ppan className="text-warning">Duration</ppan>
                                        </div>
                                        <div className='col-3 col-sm-4 pt-2 mt-lg-0'>
                                            {shift.price} <span className='text-danger'>$</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br /><br /><br />
        </section>
    )
}

export default Details