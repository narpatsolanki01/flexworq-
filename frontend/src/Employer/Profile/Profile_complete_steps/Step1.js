import React from 'react'
import {Link} from 'react-router-dom'

function Step1() {
    return (
        <section className='my-4 px-3'>
            <div className={`col-12 col-md-7 offset-md-3`}>
                <div className='card shadow border-0'>
                    <div className='card-body p-0 py-3'>
                        <div className='text-center'>
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
                            <Link to="/employer/phonenumber" className='btn btn-primary rounded-1 px-5 py-2'>I accepted the agreement</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Step1