import React from 'react'

function Statistics() {
    return (
        <section className='mt-0' style={{ background: '#f1f1f1' }}>
            <div className='container pt-4'>
                <div className='d-flex fs-4'>
                    <div className="rounded shadow ms-5 me-3" style={{ height: '80px', width: '128px',background: '#CFCCD1' }}></div>
                    Company Name
                </div>
                <div className='row px-2 px-lg-5 pt-4'>
                    <div className='col-12 col-md-8 col-6'>
                        <div className="accordion my-4 shadow" id="statistics">
                            <div className="accordion-item">
                                <h2 className="accordion-header fsp-15 p-3">
                                    Hours
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed position-relative fsp-15" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Hours published total<span className='position-absolute start-65'>24 hrs</span>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse m-0 p-0" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body position-relative fsp-12 px-5 p-0 pb-2">
                                        Customer service<span className='position-absolute start-65'>24 hrs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Hours filled total <span className='position-absolute start-65'>0 hrs</span>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse position-relative" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body fsp-12 px-5 p-0 pb-2">
                                        Customer service<span className='position-absolute start-65'>0 hrs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Hours worked total <span className='position-absolute start-65'>0 hrs</span>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse position-relative" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body fsp-12 px-5 p-0 pb-2">
                                        Customer service<span className='position-absolute start-65'>0 hrs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Coverage ratio <span className='position-absolute start-65'>0 %</span>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse position-relative" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body fsp-12 px-5 p-0 pb-2">
                                        Customer service<span className='position-absolute start-65'>0 %</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* cost */}
                        <div className="accordion shadow my-4" id="statistics">
                            <div className="accordion-item">
                                <h2 className="accordion-header fsp-15 p-3">
                                    Cost
                                </h2>
                            </div>
                            <div className="accordion-item position-relative">
                                <h2 className="accordion-header fsp-15 p-3" id="headingOne">
                                    Average hourly cost<span className='position-absolute start-65'>€0.00</span>
                                </h2>
                            </div>
                            <div className="accordion-item position-relative">
                                <h2 className="accordion-header fsp-15 p-3" id="headingTwo">
                                    Total amount spent <span className='position-absolute start-65'>€0.00</span>
                                </h2>
                            </div>
                        </div>
                        {/* various */}
                        <div className="accordion shadow my-4" id="statistics">
                            <div className="accordion-item">
                                <h2 className="accordion-header fsp-15 p-3">
                                    Various
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Number of no-shows <span className='position-absolute start-65'>1 no-show</span>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse position-relative" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body fsp-12 px-5 p-0 pb-2">
                                        Customer service<span className='position-absolute start-65'>1 no-show</span>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item position-relative">
                                <h2 className="accordion-header fsp-15 p-3" id="headingOne">
                                    Flexpool usage<span className='position-absolute start-65'>0 %</span>
                                </h2>
                            </div>
                            <div className="accordion-item position-relative">
                                <h2 className="accordion-header fsp-15 p-3" id="headingTwo">
                                    Average reaction time <span className='position-absolute start-65'>3,333 minutes</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics