import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../Components/Icon';
import ReactTooltip from 'react-tooltip'
function Index() {
    return (
        <section className='mt-5 mb-10'>
            <div className='container px-3 px-lg-5 pb-5 position-relative'>
                <p><Link to="/dashboard/clients" className='me-1'>My Company</Link> <Icon>chevron-double-right</Icon> Marqetize </p>
                <div className='row my-5'>
                    <div className='col-6'>
                        <h5>Company Name</h5>
                    </div>
                </div>
                <div className="tab-container">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item active"><button className="nav-link active" data-bs-target="#home" role="tab" aria-controls="home" data-bs-toggle="tab">Company profile</button></li>
                        <li className="nav-item"><button className="nav-link" data-bs-target="#profile" role="tab" aria-controls="profile" data-bs-toggle="tab">Payment details</button></li>
                        <li className="nav-item"><button className="nav-link" data-bs-target="#messages" role="tab" aria-controls="messages" data-bs-toggle="tab">User roles</button></li>
                    </ul>
                    <div className="tab-content">
                        {/* tab 1 */}
                        <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className='row border-bottom'>
                                <div className='col-12 col-md-3 py-4'>
                                    <span className='text-secondary'>Company description *<i className="bi bi-question-circle ms-2" data-text-color="white" data-tip='Tell FreeFlexers a bit more<br/> about the company and what your<br/> organization stands for, so that they<br/> know what to expect when they work for you.'></i></span>
                                </div>
                                <div className='col-12 col-md-9 py-4'>
                                    <p>Marqetize is een marketing organisatie dat variërende projecten uitvoert voor opdrachtgevers. Van toffe online marketing projecten tot onderhoud van social media.</p>
                                    <span className='text-primary'> <Icon>pencil</Icon> Edit description</span>
                                </div>
                            </div>
                            <div className='row border-bottom'>
                                <div className='col-12 col-md-3 py-4'>
                                    <span className='text-secondary'>Company photos *<i className="bi bi-question-circle ms-2" data-text-color="white" data-tip='Upload a sharp, preferably horizontally <br/>oriented photo of max. 10 MB that represents your company.<br/> The photo will appear in the cards FreeFlexers<br/> see on the Temper platform.'></i></span>
                                </div>
                                <div className='col-12 col-md-9 py-4 d-flex'>
                                    <span className='text-primary me-3'>Add a photo</span><p>Add a photo to give FreeFlexers an impression of where they will be working.</p>
                                </div>
                            </div>
                            <div className='row border-bottom'>
                                <div className='col-12 col-md-3 py-4'>
                                    <span className='text-secondary'>Documents * <i className="bi bi-question-circle ms-2" data-text-color="white" data-tip='If you’d like to share a document <br/>(like a menu, dress code or floor plan) for all your<br/> jobs in this company, you can upload it here.'></i></span>
                                </div>
                                <div className='col-12 col-md-9 py-4'>
                                    <span className='text-primary'><Icon position="me-2">file-earmark</Icon>Add a document</span>
                                </div>
                            </div>
                        </div>
                        {/* tab 2 */}
                        <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className='justify-content-end align-items-end d-flex'>
                                <Link to="/" className='float-end mt-4'><Icon position="me-2">pencil</Icon>Edit payment details</Link>
                            </div>
                            <div className='row border-bottom'>
                                <div className='col-12 col-md-4 py-3 text-secondary'>Company name on invoice</div>
                                <div className='col-12 col-md-8 py-3'>Marqetize</div>
                            </div>
                            <div className='row border-bottom'>
                                <div className='col-12 col-md-4 py-3 text-secondary'>Chamber of Commerce number</div>
                                <div className='col-12 col-md-8 py-3'>62575074</div>
                            </div>
                            <div className='row border-bottom'>
                                <div className='col-12 col-md-4 py-3 text-secondary'>IBAN <i className="bi bi-question-circle ms-2" data-text-color="white" data-tip='Your company IBAN is used<br/> for the payment of FreeFlexers and invoicing.'></i></div>
                                <div className='col-12 col-md-8 py-3'>nl76ingb0007088867</div>
                            </div>
                            <div className='row border-bottom'>
                                <div className='col-12 col-md-4 py-3 text-secondary'>VAT number <i className="bi bi-question-circle ms-2" data-text-color="white" data-tip='To publish your first shift,<br/> we need a VAT number.'></i></div>
                                <div className='col-12 col-md-8 py-3'>NL225848399B02</div>
                            </div>
                            <div className='row border-bottom'>
                                <div className='col-12 col-md-4 py-3 text-secondary'>Company address</div>
                                <div className='col-12 col-md-8 py-3'>Galvanistraat 7773029AD Rotterdam</div>
                            </div>
                            <div className='row border-bottom'>
                                <div className='col-12 col-md-4 py-3 text-secondary'>Invoice address</div>
                                <div className='col-12 col-md-8 py-3'>Same as business address</div>
                            </div>
                            <div className='row border-bottom'>
                                <div className='col-12 col-md-4 py-3 text-secondary'>Split invoices</div>
                                <div className='col-12 col-md-8 py-3'>No (lowest frequency possible)</div>
                            </div>
                            <div className='row border-bottom'>
                                <div className='col-12 col-md-4 py-3 text-secondary'>Split per project</div>
                                <div className='col-12 col-md-8 py-3'>No</div>
                            </div>
                        </div>
                        <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                            <table className="table mt-4 user-roles">
                                <thead>
                                    <tr className='bg-light'>
                                        <th className='py-3' scope="col">User</th>
                                        <th className='py-3 text-center' scope="col">Represent.</th>
                                        <th className='py-3 text-center' scope="col">User manager</th>
                                        <th className='py-3 text-center' scope="col">Finance</th>
                                        <th className='py-3 text-center' scope="col">Planner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="User" className='pt-3'>
                                            <p className='lh-1 mb-0 fw-bold'>Pedram Alinia</p>
                                            <span className='d-block'>info@marqetize.com</span>
                                            <span className='d-block'>+31641116460</span>
                                        </td>
                                        <td data-label="Represent" className='text-center pt-4'><input type="checkbox" /></td>
                                        <td data-label="User manager" className='text-center pt-4'><input type="checkbox" /></td>
                                        <td data-label="Finance" className='text-center pt-4'><input type="checkbox" /></td>
                                        <td data-label="Planner" className='text-center pt-4'><input type="checkbox" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to="/"><Icon>person-plus</Icon> Add a user </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ReactTooltip multiline={true} textColor='#000' backgroundColor='#f1f1f1' effect='solid' borderColor="#000" />
        </section>
    )
}
export default Index