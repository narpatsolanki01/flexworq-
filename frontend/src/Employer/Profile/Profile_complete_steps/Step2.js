import React, { useState } from 'react'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

function Step2() {

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const [phone, setPhone] = useState('');

    const savePhone = (e) => {

        e.preventDefault();

        if (!validatePhone(phone)) {
            enqueueSnackbar('Please enter a valid phone number', { variant: 'error' });
            return;
        }

        console.log(localStorage.getItem('token'));

        fetch('http://localhost:5000/api/employer/phone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({ phone: phone }),
        }).then(response => response.json()).then(data => {
            if (data.success) {
                navigate('/employer/company_details');
                enqueueSnackbar('Phone number saved successfully', { variant: 'success' });
            } else {
                enqueueSnackbar(data.message, { variant: 'error' });
            }
        }).catch((error) => {
            enqueueSnackbar('An error occurred while saving phone number', { variant: 'error' });
        });

    }

    const validatePhone = (phone) => {
        // phone number validation regex -> start with 6,7,8,9 and total 10 digits
        const re = /^[6-9]\d{9}$/;
        return re.test(phone);
    }


    return (
        <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 p-3 p-md-0'>
            <div className='card shadow border-0 mt-6 rounded-3 border-top my-5'>
                <div className="card-body pp-30">
                    <h4 className="card-title fw-400">Complete your Flexworq ID</h4>
                    <form className='form mt-4' onSubmit={savePhone}>
                        <div className='form-group row mt-3'>
                            <div className='col-12'>
                                <label className='fw-700 pb-2'>Phone Number</label>
                                <input type="text" className="form-control pyp-13 bg-light-dark border-0" placeholder='Enter your Phone number'
                                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-primary w-100 pyp-15 rounded-1'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Step2