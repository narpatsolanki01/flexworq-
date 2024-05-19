import React from 'react'
import Calendar from './Calendar'
import Slider from '@mui/material/Slider';

function JobFilter() {
    return (
        <>
            <Calendar />
            <div className='my-0'>
                <form>
                    <div className='form-group'>
                        <label className='mb-1 fw-600'>Location</label>
                        <input type="text" className='form-control py-2_5 bg-light-dark border-0 rounded-1' placeholder="Enter your location" />
                    </div>
                    <div className='form-group mt-4'>
                        <label className='mb-1 fw-600'>Client</label>
                        <input type="text" className='form-control py-2_5 bg-light-dark border-0 rounded-1' placeholder="Enter client's name" />
                    </div>
                    <div className='form-group mt-4'>
                        <label className='mb-1 fw-600 position-relative w-100 mb-2'>Minimum hourly rate <span className='position-absolute end-0'>€11.00</span></label>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </div>
                    <label className='mb-1 fw-600 position-relative w-100 mb-2 mt-4'>Required languages</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">English</label>
                    </div>
                    <div className='form-check mb-4  mt-2'>
                        <input className="form-check-input" type="checkbox" value="" id="Dutch" />
                        <label className="form-check-label" htmlFor="Dutch">Dutch</label>
                    </div>
                    <label className='mb-1 fw-600 position-relative w-100 mb-2'>Categories</label>
                    <span className='text-secondary fs-6'>CARE</span>
                    <div className="form-check mt-2 mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Corona Support</label>
                    </div>
                    <span className='text-secondary fs-6'>CONSTRUCTION</span>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Construction worker</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Painter</label>
                    </div>
                    <div className="form-check mb-3 mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Wood worker</label>
                    </div>
                    <span className='text-secondary fs-6'>HOSPITALITY</span>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Assistant cook</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Barista</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Bartending</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Catering</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Cleaning</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Delivery - Hospitality</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Hosting</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Housekeeping</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Independent chef</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Roomservice</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Serving</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Sitecrew - Hospitality</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Training</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">User research</label>
                    </div>
                    <div className="form-check mb-3 mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Wardrobe</label>
                    </div>

                    <span className='text-secondary fs-6'>PROMOTION</span>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Product promotion</label>
                    </div>
                    <div className="form-check mb-3 mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Street vendor</label>
                    </div>
                    <span className='text-secondary fs-6'>RETAIL</span>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Customer service</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Hosting</label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Salesclerk</label>
                    </div>
                    <div className="form-check mb-3 mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Sitecrew - Retail</label>
                    </div>

                    <span className='text-secondary fs-6'>VOLUNTEER WORK</span>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="English" />
                        <label className="form-check-label" htmlFor="English">Volunteer work</label>
                    </div>
                </form>
                <br /><br /><br />
            </div>
        </>
    )
}

export default JobFilter