import React from 'react'
function Overview() {
    return (
        <>
            <section className='mt-5 mb-9'>
                <div className='container'>
                    <h2 className='fw-bold'>Financial Overview</h2>
                    <div className="tab-container mt-4">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item active"><a className="nav-link active" href="#home" role="tab" aria-controls="home" data-bs-toggle="tab">Invoices</a></li>
                            <li className="nav-item"><a className="nav-link" href="#profile" role="tab" aria-controls="profile" data-bs-toggle="tab">Credit</a></li>
                        </ul>
                        <div className="tab-content">
                            {/* tab 1 */}
                            <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <form className='my-3'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <select className='form-select py-3'>
                                                <option>Marqetize</option>
                                            </select>
                                        </div>
                                        <div className='col-2'>
                                            <input className='form-control py-3' placeholder='search for refrence' />
                                        </div>
                                        <div className='col-2'>
                                            <button className='btn btn-primary py-2_5'>Search</button>
                                        </div>
                                    </div>
                                </form>

                                <div className='row my-2'>
                                    <div className='col-12 col-md-3'>Sent</div>
                                    <div className='col-12 col-md-2'>Refrence</div>
                                    <div className='col-12 col-md-2'>Incl. VAT</div>
                                    <div className='col-12 col-md-3'>State</div>
                                </div>
                                <div className='row border rounded my-3'>
                                    <div className='col-12 col-md-3 py-3'>June 23,2022</div>
                                    <div className='col-12 col-md-2 py-3'>654987654</div>
                                    <div className='col-12 col-md-2 py-3'>€26.50</div>
                                    <div className='col-12 col-md-3 py-3'>PAID</div>
                                    <div className='col-12 col-md-1 py-3'>Download</div>
                                    <div className='col-12 col-md-1 py-3'>UBL</div>
                                </div>

                            </div>
                            {/* tab 2 */}
                            <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h1 className='fsp-20 fw-bold my-4'>Marqetize</h1>
                                <div className='row my-3'>
                                    <div className='col-12 col-md-3'>
                                        <div className='rounded-3 p-4' style={{background:'#3F8ECE'}}>
                                            <span className='fsp-13 d-block'>Total Credit</span>
                                            <span className='fsp-20'>€25.35</span>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-3'>
                                        <div className='rounded-3 p-4' style={{background:'#EE5656'}}>
                                            <span className='fsp-13 d-block'>Used Credit</span>
                                            <span className='fsp-20'>€25.35</span>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-3'>
                                        <div className='rounded-3 p-4' style={{background:'#35A460'}}>
                                            <span className='fsp-13 d-block'>Remaining Credit</span>
                                            <span className='fsp-20'>€25.35</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Overview