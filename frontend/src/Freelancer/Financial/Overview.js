import React from 'react'
import Icon from '../../Components/Icon'
import CanvasJSReact from '../../Assets/Canvas/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Overview() {

    const options = {
        title: {
            text: "Invoice overview excluding VAT"
        },
        animationEnabled: true,
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: [
                    { label: "Jan", y: 20 },
                    { label: "Fab", y: 25 },
                    { label: "Mar", y: 30 },
                    { label: "Apr", y: 85 },
                    { label: "May", y: 10 },
                    { label: "Jun", y: 30 },
                    { label: "Aug", y: 40 },
                    { label: "Sep", y: 35 },
                    { label: "Oct", y: 31 },
                    { label: "Nov", y: 40 },
                    { label: "Dec", y: 30 }
                ]
            }
        ]
    }

    return (
        <>
            <section className='mt-5 mb-9'>
                <div className='container'>
                    <h2 className='fw-bold'>Financial Overview</h2>
                    <div className='row'>
                        <div className='col-12 col-md-8'>
                            <div className='p-4 shadow rounded-2 border border-success text-success mt-3'>
                                <Icon position="me-3">cash-stack</Icon><span className='fsp-16'>Total earnings on our platform</span>
                            </div>
                            <div className='my-4'>
                                <CanvasJSChart options={options} />
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='shadow p-3 rounded-3'>
                                <span className='text-success-dark fw-bold'>Total for turnover taxes</span>
                                <form className='mt-2'>
                                    <select className='form-select py-2_5'>
                                        <option>2022 Q3</option>
                                    </select>
                                </form>
                                <p className='fsp-13 my-3'>You've worked without a VAT-number this quarter. Please note: if you have an active VAT-number you still need to declare your VAT, even if you had no earnings.</p>
                                <div className='border-top border-bottom py-4'>
                                    <span className='text-success-dark fw-bold'>Revenue</span>
                                </div>
                                <div>
                                    <span className='text-success-dark fw-bold'>Costs</span>
                                    <div className='row py-1'>
                                        <div className='col-6'>Factoring</div>
                                        <div className='col-6 text-end'>€ 0.00</div>
                                    </div>
                                    <div className='row py-1'>
                                        <div className='col-6'>Substitution</div>
                                        <div className='col-6 text-end'>€ 0.00</div>
                                    </div>
                                    <div className='row py-1'>
                                        <div className='col-6 fw-bold'>SUB-TOTAL</div>
                                        <div className='col-6 text-end'>€ 0.00</div>
                                    </div>
                                    <div className='row py-1'>
                                        <div className='col-6'>VAT</div>
                                        <div className='col-6 text-end'>€ 0.00</div>
                                    </div>
                                </div>
                                <button className='btn btn-primary w-100 mt-3 py-2_5'>Declare Turnover Tax</button>
                            </div>
                        </div>
                        <span className='py-5 fs-3 text-success-dark fw-bold'>Your Invoices</span>
                        <div className='row'>
                            <div className='col-2 d-none d-md-block text-secondary fw-600'>Factuurdatum</div>
                            <div className='col-2 d-none d-md-block text-secondary fw-600'>Reference</div>
                            <div className='col-2 d-none d-md-block text-secondary fw-600'>Excl. VAT</div>
                            <div className='col-2 d-none d-md-block text-secondary fw-600'>Betaalstatus</div>
                        </div>
                        <div className='row pe-0'>
                            <div className="accordion mt-4" id="your_invoice">
                                <div className="accordion-item mt-4 pe-0 border border-2 rounded">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            June 2022
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#your_invoice">
                                        <div className="accordion-body">
                                            <div className='row'>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Factuurdatum</span></div>
                                                        <div className='col-6 com-md-12 px-0'><span className='float-end'>23-6-2022</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Reference</span></div>
                                                        <div className='col-6 com-md-12'><span className='float-end'>g2060327</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Excl. VAT</span></div>
                                                        <div className='col-6 com-md-12'><span className='float-end'>€ 7.25</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Betaalstatus</span></div>
                                                        <div className='col-6 com-md-12'><span className='float-end'>€ 7.25</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-3 py-3 py-md-0 fsp-13'>You have not chosen factoring, and will receive the payment as soon as the client fulfils the invoice citing g2060327.</div>
                                                <div className='col-12 col-md-1'><button className='btn btn-success float-end'><Icon>download</Icon></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-4 border border-2 rounded">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            June 2022
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#your_invoice">
                                        <div className="accordion-body">
                                            <div className='row'>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Factuurdatum</span></div>
                                                        <div className='col-6 com-md-12 px-0'><span className='float-end'>23-6-2022</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Reference</span></div>
                                                        <div className='col-6 com-md-12'><span className='float-end'>g2060327</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Excl. VAT</span></div>
                                                        <div className='col-6 com-md-12'><span className='float-end'>€ 7.25</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Betaalstatus</span></div>
                                                        <div className='col-6 com-md-12'><span className='float-end'>€ 7.25</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-3 py-3 py-md-0 fsp-13'>You have not chosen factoring, and will receive the payment as soon as the client fulfils the invoice citing g2060327.</div>
                                                <div className='col-12 col-md-1'><button className='btn btn-success float-end'><Icon>download</Icon></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-4 border border-2 rounded">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            August 2022
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#your_invoice">
                                        <div className="accordion-body">
                                            <div className='row'>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Factuurdatum</span></div>
                                                        <div className='col-6 com-md-12 px-0'><span className='float-end'>23-6-2022</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Reference</span></div>
                                                        <div className='col-6 com-md-12'><span className='float-end'>g2060327</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Excl. VAT</span></div>
                                                        <div className='col-6 com-md-12'><span className='float-end'>€ 7.25</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-2 border-sm-bottom py-3 py-md-0'>
                                                    <div className='row px-0'>
                                                        <div className='col-6 d-block d-md-none px-0'><span>Betaalstatus</span></div>
                                                        <div className='col-6 com-md-12'><span className='float-end'>€ 7.25</span></div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-3 py-3 py-md-0 fsp-13'>You have not chosen factoring, and will receive the payment as soon as the client fulfils the invoice citing g2060327.</div>
                                                <div className='col-12 col-md-1'><button className='btn btn-success float-end'><Icon>download</Icon></button></div>
                                            </div>
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