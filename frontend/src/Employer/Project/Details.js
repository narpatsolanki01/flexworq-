import React from 'react'
import { Link } from 'react-router-dom';
import Icon from '../../Components/Icon';

function Details() {
    return (
        <section className='mt-0 pt-3 pb-10 px-3' style={{ background: '#f1f1f1' }}>
            <div className='container py-5 px-3'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h4>Projects</h4>
                    </div>
                    <div className='col-12 col-md-6'>
                        <button className='btn btn-outline-dark rounded-1 float-end mx-1 my-1'> View archive</button>
                        <Link to="/clients/project/id/jobs/add" className='btn btn-primary rounded-1 float-end mx-1 my-1'>New Job</Link>
                        <button className='btn btn-primary rounded-1 float-end mx-1 my-1'> Edit Project</button>
                    </div>
                    {/* projects */}
                    <Link to="/clients/project/id/job/id">
                        <div className='row bg-white mt-3 p-3'>
                            <div className='col-12 col-lg-5'>
                                <p className='mb-0 fw-bold'>Klantenservice medewerker met ervaring</p>
                                <span className='text-secondary fsp-11'>Customer service</span>
                            </div>
                            <div className='col-12 col-sm-2 col-lg-2 pt-2'>
                                Marqetize
                            </div>
                            {/* <div className='col-6 col-sm-5 col-lg-3'>
                                <button className='btn btn-success py-0 px-1 mt-2 ms-0 ms-sm-2'>9 open enrollments</button>
                            </div> */}
                            <div className='col-12 col-sm-10 col-lg-5'>
                                <button className='btn btn-outline-secondary float-sm-end py-0 px-2 rounded-0 mt-2 mx-1'><Icon position="pe-1">clipboard</Icon>duplicate</button>
                                <button className='btn btn-outline-secondary float-sm-end py-0 px-2 rounded-0 mt-2 mx-1'><Icon position="pe-1">archive-fill</Icon> archive job</button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div><br /><br /><br /><br /><br /><br />
        </section>
    )
}

export default Details