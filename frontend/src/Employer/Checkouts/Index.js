import React from 'react'

function Index() {
    return (
        <section className='mt-4'>
            <div className='container'>
                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-4">.col-md-4</div>
                                        <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
                                        <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-9">
                                            Level 1: .col-sm-9
                                            <div class="row">
                                                <div class="col-8 col-sm-6">
                                                    Level 2: .col-8 .col-sm-6
                                                </div>
                                                <div class="col-4 col-sm-6">
                                                    Level 2: .col-4 .col-sm-6
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal End */}
                <div className='row'>
                    <div className="col p-0">
                        <h4 className='fw-700 fsp-30'>Checkouts</h4>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className="col p-0">
                        <h4 className='fw-700 fsp-18'>Marqetize</h4>
                        <p className='fsp-15'>Klantenservice medewerker met ervaring</p>
                    </div>
                </div>
                <div className="card mt-2 row bg-white">
                    <div className='row'>
                        <div className="col-12 col-md-3">
                            <div className="row pt-4">
                                <div className="col-md-4">
                                    <img src="/assets/images/avtar/27.png" alt="" srcset="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-12 fsp-18 fw-700 p-0">Bruce Wayne
                                        </div>
                                        <div className="col-12 p-0 fsp-15 fw-500">Worked: Monday, June1
                                        </div>
                                        <div className="col-12 p-0 fsp-13 text-black-50">(First time)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="table-responsive">
                                <table className="table table-responsive table-bordered m-0">
                                    <thead>
                                        <tr className='text-success'>
                                            <th scope="col" ></th>
                                            <th scope="col" >Start</th>
                                            <th scope="col" >End</th>
                                            <th scope="col" >Break</th>
                                            <th scope="col" >Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <td  className='fw-600 text-end ps-1 pe-2'>Planned</td> 
                                            {/* scope="row" */}
                                            <td >01:00</td>
                                            <td >01:30</td>
                                            <td >-</td>
                                            <td >0h:00m</td>
                                        </tr>
                                        <tr className="">
                                            <td  className='fw-600 ps-1 pe-2 text-end'>Checked&nbsp;out</td> 
                                            {/* scope="row" */}
                                            <td >01:00</td>
                                            <td >02:00</td>
                                            <td >0h:30m</td>
                                            <td >0h:30m</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row mt-5">
                                <div className="col-5 ps-0"><button className="btn btn-lg btn-primary fsp-13 rounded-1">Accept&nbsp;Chekout</button></div>
                                <div className="col-5 me-3"><button className="btn btn-lg fsp-13 rounded-1 btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Counter&nbsp;Proposal</button></div>
                                <div className="col-1"><button className="btn btn-lg btn-outline-primary fsp-13 rounded-1"><i className='bi bi-flag-fill'></i></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index