import React, { useEffect, useState } from 'react'
import Icon from '../../Components/Icon'
import { Link,useParams,useNavigate} from 'react-router-dom'
import { useSnackbar } from 'notistack';
//message show 

function Apply() {
    const {id} =useParams();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [job ,setjob]=useState({});
    useEffect(() => {
        fetch(`/api/freelacer/job/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => response.json()).then(data =>setjob(data.data))
            .catch(error =>{
                enqueueSnackbar('Failed to fetch job', { variant: 'error' });
            })
    }, []);
    // console.log(job);

    // save work 
    //api/freelacer/work api 
    const freelacer_id = localStorage.getItem('user');
    const userData = JSON.parse(freelacer_id);
    const savework = () => {
        fetch('/api/freelacer/work', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({ freelancer_id:userData._id, job_id: id })
        }).then(response => response.json()).then(data =>{
            if(data.success===true){
                enqueueSnackbar(data.message, { variant: 'success' });
                navigate(`/freelancer/explore/${id}/applied`);
            }
            else{
                enqueueSnackbar(data.message, { variant: 'error' });
            }
        })
            .catch(error =>{
                enqueueSnackbar(`An error occurred while adding job ${error.message}`, { variant: 'error' });
            })
    }
    return (
        <>
            <div className='w-100 mb-2 mb-md-5' style={{ background: 'url(/assets/images/background/group-young-people-sitting-conference-together.svg) 0% 0% / auto no-repeat' }}>
                <div className='container px-4 px-md-5 pt-3'>
                    <h2 className='text-white fw-700 py-4'>You are applying for {job.project}</h2>
                    <div className='row bg-white rounded shadow w-auto w-md-75 mt-4'>
                        <div className='row pt-4'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-4 col-md-2 '>
                                        <div className='rounded text-center text-white py-2' style={{ background: '#EAF6EF' }}>
                                            <span className='d-block fsp-20 text-success'>29</span>
                                            <span className='fsp-11 text-dark'>WED</span>
                                        </div>
                                    </div>
                                    <div className='col-8 col-md-10'>
                                        <div className='border-bottom py-2 position-relative'>
                                            <span className='fw-600'>{job.category}</span>
                                            <span className='position-absolute end-0 fw-600'><Icon position="me-2">person</Icon>1 Spot</span>
                                        </div>
                                        <div className='py-1'>
                                            {/* <p className='text-secondary fw-bold'>Cancellation Policy: <span className='text-dark fw-400 ms-1'>3 Days</span></p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-5 py-3 ps-4 ps-md-3 pe-0 d-flex'>
                                <div className='bg-light-dark text-center p-3 rounded m-auto w-100'>
                                    <span className='w-100'>€20.50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 w-100 w-md-75'>
                        <h1 className='fsp-16 text-success-dark'>The following sills are needed for this shift. Please check all of them to preceed</h1>
                        <div className='mt-4 applying-list-checkbox'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="dutch" />
                                <label class="form-check-label" for="dutch">
                                    Dutch
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="customer_oriented" />
                                <label class="form-check-label" for="customer_oriented">
                                    Customer Oriented
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="welcome_customers" />
                                <label class="form-check-label" for="welcome_customers">
                                    Welcome Customers
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="social" />
                                <label class="form-check-label" for="social">
                                    Social
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="service_oriented" />
                                <label class="form-check-label" for="service_oriented">
                                    Service Oriented
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="answering_emails" />
                                <label class="form-check-label" for="answering_emails">
                                    Answering Emails
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="communicative" />
                                <label class="form-check-label" for="communicative">
                                    Communicative
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 pb-4 w-100 w-md-75'>
                        <h1 className='fsp-16 text-success-dark'>Clothing Regulations</h1>
                        <div className='mt-2 applying-list-checkbox'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="neat_trousers" />
                                <label class="form-check-label" for="neat_trousers">
                                    Neat trousers
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="trimmed_beard" />
                                <label class="form-check-label" for="trimmed_beard">
                                    Trimmed beard
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="clothing_of_own_choosing" />
                                <label class="form-check-label" for="clothing_of_own_choosing">
                                    Clothing of own choosing
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-2 border-bottom w-100 w-md-75'>
                        <div className='col-12 my-2'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="requirements" />
                                <label class="form-check-label" for="requirements">
                                    I meet all the requirements and agree to the assignment agreement
                                </label>
                            </div>
                        </div>
                        <div className='col-12 my-2'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="client" />
                                <label class="form-check-label" for="client">
                                    I accept that the client can pay the Invoice within 14 days from the invoice release date.
                                </label>
                            </div>
                        </div>
                        <div className='col-12 my-2'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="application" />
                                <label class="form-check-label" for="application">
                                    Cancel my application automatically if I'm not accepted yet 8 hours before the shift starts.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='float-end'>
                        <button className='btn btn-primary py-2_5 my-4  rounded-1' onClick={savework}>Confirm</button>
                    </div>
                    <div className='text-start'>
                        <Link to="/freelancer/explore">
                            <button className='btn btn-danger py-2_5 my-4  rounded-1'>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Apply