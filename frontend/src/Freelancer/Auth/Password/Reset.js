import React from 'react'
import { Link } from 'react-router-dom'
function Reset() {
    return (
        <>
            <main>
                <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 py-1 px-3 mb-5'>
                    <div className='card shadow border-0 mt-6 rounded-3 border-top'>
                        <div className="card-body p-4">
                            <h5 className="card-title text-success-dark fw-600 mt-3">Reset Password</h5>
                            <form className='form py-1 pb-2 mt-4'>
                                <div className='form-group position-relative'>
                                    <label className='fw-700 pb-2'>Email Address</label>
                                    <input type="text" className="form-control px-5 py-3 bg-light-dark border-0" placeholder='Enter your email address' />
                                    <i className='bi bi-envelope-fill position-absolute top-50 ms-3 fsp-20 text-secondary '></i>
                                </div>
                                <div className='mt-3'>
                                    <Link to="/jobs" className='btn btn-primary w-100 py-2_5 rounded-1'>Send Link</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Reset