import React, { useState, useCallback, useEffect, useRef } from 'react'
import DropzoneField from '../../Components/Dropzone/Index';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';


function ProfileComplete() {

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    // set User data, active tabs and files
    const [userData, setUserData] = useState({
        phoneNumber: '',
        dob: '',
        industry: '',
        company: '',
        location: '',
        experienceTime: { from: '', to: '' },
        position: ''
    })
    const fileInputRef =useRef(null)
    const backInputRef =useRef(null)

    const [activeStep, setActiveStep] = useState(1);
    const [userPicture, setUserPicture] = useState(null);

    const[frontpic,setfrontpic]=useState(null);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetch('/api/freelacer/profile', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                method: 'GET'
            }).then(response => response.json()).then(data => {
                if (data.success) {
                    if (data.data) {
                        if (!data.data.phoneNumber) {
                            setActiveStep(1);
                        }

                        if (!data.data.avatar) {
                            setActiveStep(2);
                        }

                        if (!data.data.dob) {
                            setActiveStep(3);
                        }

                        navigate('/freelancer/dashboard');

                    }
                }
            }).catch(error => {
                enqueueSnackbar(`Error 505 : ${error.message}`, { variant: 'error' });
            });
        }
    }, [navigate, enqueueSnackbar])

    // On Drop Fiction For upload files
    const onDrop = useCallback(acceptedFiles => {
        setUserPicture(acceptedFiles)
    }, [])

    // set User Data
    let name, value;
    const inputsValueHandel = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }
    //  Upload Profile Picture ....
    const uploadPicture = async () => {
        // setActiveStep(3);
        if (userPicture) {
            const [file] = userPicture;
            let formData = new FormData();
            formData.append("file", file);
            try {
                fetch('/api/freelacer/upload-avatar', {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': localStorage.getItem('token')
                    },
                    method: 'POST',
                    body: formData
                }).then(response => response.json()).then(data => {
                    if (data.success) {
                        enqueueSnackbar("Picture Uploaded Successfully.", { variant: 'success' });
                        setActiveStep(4);
                    }
                }).catch(error => {
                    enqueueSnackbar(`Error 505 : ${error.message}`, { variant: 'error' });
                });
            }
            catch (error) {
                console.log(error)
                enqueueSnackbar("Error 505 : Server Not Connect. ", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("Please upload your picture.", { variant: 'error' });
        }
    }
    //save and next
    const idPicture =(e)=>{
        if(fileInputRef===null || backInputRef===null){
            enqueueSnackbar("Please upload your picture.", { variant: 'error' });
        }
        else{
            enqueueSnackbar("Picture Uploaded Successfully.", { variant: 'success' });
            setActiveStep(5)
        }
    }

    //upload Id front Picture
    const handleforntimg=()=>{
        fileInputRef.current.click();
    }
    const  frontPicture= async (e) => {
        // setActiveStep(3);
        const selectedFiles = fileInputRef.current.files;
        // setTimeout(()=>{
            if (selectedFiles) {
                const [file] = selectedFiles;
                let formData = new FormData();
                formData.append("file", file);
                try {
                    fetch('/api/freelacer/upload-front', {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': localStorage.getItem('token')
                        },
                        method: 'POST',
                        body: formData
                    }).then(response => response.json()).then(data => {
                        if (data.success) {
                            enqueueSnackbar("Picture Uploaded Successfully.", { variant: 'success' });
                            // setActiveStep(4);
                            // fileInputRef=null;
                            
                        }
                    }).catch(error => {
                        enqueueSnackbar(`Error 505 : ${error.message}`, { variant: 'error' });
                    });
                }
                catch (error) {
                    console.log(error)
                    enqueueSnackbar("Error 505 : Server Not Connect. ", { variant: 'error' });
                }
            } else {
                enqueueSnackbar("Please upload your picture.", { variant: 'error' });
            }
        // },2000)
        console.log("hello")
    }

    //back picture upload
    const backHandle=()=>{
        backInputRef.current.click();
    }

    const backPicture = ()=>{
        const selectedFiles = backInputRef.current.files;
        // setTimeout(()=>{
            if (selectedFiles) {
                const [file] = selectedFiles;
                let formData = new FormData();
                formData.append("file", file);
                try {
                    fetch('/api/freelacer/upload-back', {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': localStorage.getItem('token')
                        },
                        method: 'POST',
                        body: formData
                    }).then(response => response.json()).then(data => {
                        if (data.success) {
                            enqueueSnackbar("Picture Uploaded Successfully.", { variant: 'success' });
                            // setActiveStep(4);
                            // backInputRef=null
                        }
                    }).catch(error => {
                        enqueueSnackbar(`Error 505 : ${error.message}`, { variant: 'error' });
                    });
                }
                catch (error) {
                    console.log(error)
                    enqueueSnackbar("Error 505 : Server Not Connect. ", { variant: 'error' });
                }
            } else {
                enqueueSnackbar("Please upload your picture.", { variant: 'error' });
            }
        // },2000)
        console.log("hello")
    }

    const savePersonDetails = async () => {

        // setActiveStep(5);

        if (!userData.phoneNumber && !userData.dob) {
            enqueueSnackbar("Please Enter your phone number.", { variant: 'error' });
            enqueueSnackbar("Please Enter your Dob.", { variant: 'error' });
        }
        else if (!userData.phoneNumber)
            enqueueSnackbar("Please Enter your phone number.", { variant: 'error' });
        else if (!userData.dob)
            enqueueSnackbar("Please Enter your Dob.", { variant: 'error' });
        else {

            fetch('/api/freelacer/profile', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                method: 'POST',
                body: JSON.stringify(userData)
            }).then(response => response.json()).then(data => {
                if (data.success) {
                    enqueueSnackbar("Data Saved Successfully.", { variant: 'success' });
                    setActiveStep(3);
                }
            }).catch(error => {
                enqueueSnackbar(`Error 505 : ${error.message}`, { variant: 'error' });
            });

        }
    }



    return (
        <>
            <main>
                <section className='mt-8'>
                    <div className='container'>
                        <div className='row p-0'>
                            {/* step one */}
                            <div className={`col-12 col-md-8 offset-md-2 ${activeStep === 1 ? 'd-block' : 'd-none'}`}>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-0 py-3'>
                                        <div className='text-center'>
                                            <span className='text-secondary fsp-13'>STEP 1 OF 5</span>
                                            <span className='d-block text-success fw-800 mt-1'>Read the user agreement below</span>
                                        </div>
                                        <hr />
                                        <div className='px-3 overflow-scroll scrollbar-sm' style={{ height: '350px' }}>
                                            <p className='fsp-13'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <div className='mt-4'>
                                                <span className='fw-700 fsp-14'>Nunc hendrerit dignissim orci sed egestas</span>
                                                <p className='fsp-13 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            </div>
                                            <div className='mt-4'>
                                                <span className='fw-700 fsp-14'>Sed enim risus, fringilla et massa</span>
                                                <p className='fsp-13 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            </div>
                                            <div className='mt-4'>
                                                <span className='fw-700 fsp-14'>Nunc hendrerit dignissim orci sed egestas</span>
                                                <p className='fsp-13 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            </div>
                                            <div className='mt-4'>
                                                <span className='fw-700 fsp-14'>Sed enim risus, fringilla et massa</span>
                                                <p className='fsp-13 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            </div>
                                            <div className='mt-4'>
                                                <span className='fw-700 fsp-14'>Nunc hendrerit dignissim orci sed egestas</span>
                                                <p className='fsp-13 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            </div>
                                            <div className='mt-4'>
                                                <span className='fw-700 fsp-14'>Sed enim risus, fringilla et massa</span>
                                                <p className='fsp-13 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            </div>
                                            <div className='mt-4'>
                                                <span className='fw-700 fsp-14'>Nunc hendrerit dignissim orci sed egestas</span>
                                                <p className='fsp-13 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            </div>
                                            <div className='mt-4'>
                                                <span className='fw-700 fsp-14'>Sed enim risus, fringilla et massa</span>
                                                <p className='fsp-13 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-center align-items-center py-2'>
                                            <button onClick={() => setActiveStep(2)} className='btn btn-primary rounded-1 px-5 py-2'>I accepted the agreement</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Step two */}
                            <div className={`col-12 col-md-8 offset-md-2 ${activeStep === 3 ? 'd-block' : 'd-none'}`}>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-0 py-2'>
                                        <div className='text-center'>
                                            <span className='text-secondary fsp-13'>STEP 3 OF 5</span>
                                            <span className='d-block text-success fw-800 mt-1'>Upload Proile Picture</span>
                                        </div>
                                        <hr />
                                        <div className='px-md-3 pb-4'>
                                            <div className='text-center px-md-5 mb-5'>
                                                <p className='px-4'>Client wants to know who you are. Upload your photo where your face is clearly visible. Say Cheese!</p>
                                            </div>
                                            <div className='d-flex justify-content-center align-items-center position-relative'>
                                                {
                                                    userPicture ? <div className='w-75 justify-content-center align-items-center d-flex border p-5 rounded'> <img src={userPicture.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))[0].preview} alt="..." className='w-50 rounded' /> </div>
                                                        : <img src='/assets/images/avtar/upload_avtar.svg' alt="..." />
                                                }
                                                <div className='position-absolute bottom-0'>
                                                    <DropzoneField designType={1} onDrop={onDrop} text={userPicture ? 'Change Picture' : 'Browse Picture'} className="btn btn-outline-primary bg-white text-hover-primary mb-n2  px-4 rounded-1" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-center align-items-center py-2'>
                                            <button onClick={uploadPicture} className='btn btn-primary rounded-1 px-5 py-2'>Save and Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Step three */}
                            <div className={`col-12 col-md-8 offset-md-2 ${activeStep === 2 ? 'd-block' : 'd-none'}`}>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-0 py-2'>
                                        <div className='text-center'>
                                            <span className='text-secondary fsp-13'>STEP 2 OF 5</span>
                                            <span className='d-block text-success fw-800 mt-1'>Phone Number & Date Of Birth</span>
                                        </div>
                                        <hr />
                                        <div className='px-3 pb-4'>
                                            <div className='text-center px-lg-5 mb-5'>
                                                <p className='px-lg-4'>Your profile is your business card. So client wants to know about your phone number and date of birth</p>
                                            </div>
                                            <div className='mt-3 px-lg-5'>
                                                <form className='px-lg-5'>
                                                    <div className='form-group px-lg-5'>
                                                        <label className='fw-700'>Phone Number</label>
                                                        <input type="text" name='phoneNumber' onChange={inputsValueHandel} className='form-control py-2 bg-light-dark border-0 rounded-1 mt-2' placeholder="Enter your phone number" />
                                                    </div>
                                                    <div className='form-group mt-4 px-lg-5'>
                                                        <label className='fw-700'>Date of Birth</label>
                                                        <input type="date" name='dob' onChange={inputsValueHandel} className='form-control py-2 bg-light-dark border-0 rounded-1 mt-2' placeholder="Enter your phone number" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-center align-items-center py-2'>
                                            <div className='d-flex'>
                                                <button onClick={() => setActiveStep(2)} className='btn btn-secondary mx-2 px-3'><i className="bi bi-arrow-left"></i></button>
                                                <button onClick={savePersonDetails} className='btn btn-primary rounded-1 px-5 py-2_5 px-5'>Save and Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Step four */}
                            <div className={`col-12 col-md-8 offset-md-2 ${activeStep === 4 ? 'd-block' : 'd-none'}`}>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-0 py-2'>
                                        <div className='text-center'>
                                            <span className='text-secondary fsp-13'>STEP 4 OF 5</span>
                                            <span className='d-block text-success fw-800 mt-1'>ID Verification</span>
                                        </div>
                                        <hr />
                                        <div className='text-center px-2 px-lg-5 my-4'>
                                            <span className='text-primary fw-700 fs-6'>Select the documents you want to upload</span>
                                            <p className='px-lg-4 fsp-13'>We will use this to verify your account</p>
                                        </div>
                                        <hr />
                                        <div className='px-3 pb-4'>
                                            <div className='container px-lg-5'>
                                                <div className='row mb-4'>
                                                    <div className='col-12 col-md-6 ps-lg-4 pe-4'>
                                                        <div className='row border rounded-1 p-3'>
                                                            <div className='col-2 justify-content-center align-items-center d-flex'>
                                                                <img src='/assets/images/icons/awesome-passport.svg' alt="..." />
                                                            </div>
                                                            <div className='col-10'>
                                                                <span className='d-block lh-1'>Passport</span>
                                                                <span className='fsp-11 text-secondary lh-1'>Lorem ipsum dolore</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-md-6 pe-4 pe-lg-5 ps-lg-4 mt-3 mt-md-0'>
                                                        <div className='row border rounded-1 p-3'>
                                                            <div className='col-2 justify-content-center align-items-center d-flex'>
                                                                <img src='/assets/images/icons/Subtraction.svg' alt="..." />
                                                            </div>
                                                            <div className='col-10'>
                                                                <span className='d-block lh-1'>ID Card</span>
                                                                <span className='fsp-11 text-secondary lh-1'>Dolore set amet</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Divider className='text-primary fw-700'>Upload ID Card</Divider>
                                                <div className='row mt-3 px-lg-5'>
                                                    <div className='col-12 col-md-6 text-center'>
                                                        <span className='text-secondary fw-500'>FRONT SIDE</span>
                                                        <div className='mt-3'>
                                                            <div className='rounded-3 py-4' style={{ border: '2px dashed #f1f1f1' }}>
                                                                <img src='/assets/images/icons/feather-upload-cloud.svg' alt="..." />
                                                                <span className='d-block fsp-13'>Drag and drop your files here or</span>
                                                                <input type="file" ref={fileInputRef} name='front' onChange={frontPicture} style={{ display: 'none' }} 
      />
                                                                <button className='btn border-0 bg-white text-primary' onClick={handleforntimg}>Upload file</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-md-6 text-center mt-4 mt-md-0'>
                                                        <span className='text-secondary fw-500'>BACK SIDE</span>
                                                        <div className='mt-3'>
                                                            <div className='rounded-3 py-4' style={{ border: '2px dashed #f1f1f1' }}>
                                                                <img src='/assets/images/icons/feather-upload-cloud.svg' alt="..." />
                                                                <span className='d-block fsp-13'>Drag and drop your files here or</span>
                                                                <input type="file" ref={backInputRef} name='front' onChange={backPicture} style={{ display: 'none' }}/> 
                                                                <button className='btn border-0 bg-white text-primary' onClick={backHandle}>Upload file</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-center align-items-center py-2'>
                                            <div className='d-flex'>
                                                <button onClick={() => setActiveStep(3)} className='btn btn-secondary mx-2 px-3'><i className="bi bi-arrow-left"></i></button>
                                                <button onClick={() =>idPicture()} className='btn btn-primary rounded-1 px-5 py-2_5 px-5'>Save and Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Step five */}
                            <div className={`col-12 col-md-8 offset-md-2 ${activeStep === 5 ? 'd-block' : 'd-none'}`}>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-0 py-2'>
                                        <div className='text-center'>
                                            <span className='text-secondary fsp-13'>STEP 5 OF 5</span>
                                            <span className='d-block text-success fw-800 mt-1'>ID Verification</span>
                                        </div>
                                        <hr />
                                        <div className='px-4'>
                                            <span className='text-primary fw-600'>Add Your Work Experience</span>
                                            <p className='fsp-14'>Adding you work experience increase your chance to be chosen by employers</p>
                                            <form>
                                                <div className='form-group row'>
                                                    <div className='col-12 col-md-6'>
                                                        <label className='fw-600'>In which industry?</label>
                                                        <select className='form-select border-0 rounded-1 py-2_5 bg-light-dark'>
                                                            <option>Select</option>
                                                        </select>
                                                    </div>
                                                    <div className='col-12 col-md-6'>
                                                        <label className='fw-600'>At which company?</label>
                                                        <select className='form-select border-0 rounded-1 py-2_5 bg-light-dark'>
                                                            <option>Select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='form-group mt-3'>
                                                    <label className='fw-600'>Location</label>
                                                    <input type="text" className='form-control border-0 rounded-1 py-2_5 bg-light-dark' />
                                                </div>
                                                <div className='form-group row mt-3 mb-5'>
                                                    <div className='col-12 col-md-6'>
                                                        <label className='fw-600'>From</label>
                                                        <input type="date" className="form-control border-0 rounded-1 py-2_5 bg-light-dark" />
                                                    </div>
                                                    <div className='col-12 col-md-6'>
                                                        <label className='fw-600'>To</label>
                                                        <input type="date" className="form-control border-0 rounded-1 py-2_5 bg-light-dark" />
                                                    </div>
                                                </div>
                                                <span className='text-primary fw-600'>In which position(s) did you work here?</span>
                                                <div className='form-group row mt-3 mb-4'>
                                                    <div className='col-4 mt-1'>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                Delivery Forklift driver
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='col-4 mt-1'>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                Mover
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='col-4 mt-1'>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                Order Picker
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='col-4 mt-1'>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                Forklift driver
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='col-4 mt-1'>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                Warehouse Assistant
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <button className='btn btn-outline-primary rounded-1 px-5 py-2_5'><i className="bi bi-plus-circle-fill me-2"></i>Add Another Experience</button>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-center align-items-center py-2'>
                                            <div className='d-flex'>
                                                <button onClick={() => setActiveStep(4)} className='btn btn-secondary mx-2 px-3'><i className="bi bi-arrow-left"></i></button>
                                                <Link to="/freelancer/dashboard" className='btn btn-primary rounded-1 px-5 py-2_5 px-5'>Save and Next</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProfileComplete