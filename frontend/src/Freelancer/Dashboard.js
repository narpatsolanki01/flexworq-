import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
function Dashboard() {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className='w-100 mb-2 mb-md-5' style={{ background: 'url(/assets/images/background/group-young-people-sitting-conference-together.svg) 0% 0% / auto no-repeat' }}>
        <div className='container'>
          <h2 className='text-white fw-700 py-4'>Let's make some money</h2>
          <div className='row'>
            <div className='col-12 col-lg-4 mb-3'>
              <div className='bg-white rounded shadow' style={{ height: '50%' }}>
                <div className='p-3'>
                  <h5 className='text-success-dark'>My Actions & Reminders</h5>
                </div>
                <ul className='list-unstyled px-0 m-0'>
                  <li className='bg-light-dark'>
                    <div className='row'>
                      <div className='col-2'>
                        <img src='/assets/images/icons/my_actions_and_reminders.svg' alt="..." className='ms-3 mt-5' />
                      </div>
                      <div className='col-8 px-0 py-3'>
                        <span className='d-block fw-700 mb-1 ms-2'>Stand Up for paltform work</span>
                        <p className='fsp-10 fw-600 ms-2'>A number of enthusiasts who earn extra money through Flexworq, set up a foundation to stand up for this flexible way of working. no spam and completely free.</p>
                      </div>
                      <div className='col-1 p-0 justify-content-center align-items-center d-flex'>
                        <img src='/assets/images/icons/right_arrow.svg' alt="" className='ms-3' />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-lg-8'>
              <div className='bg-white rounded dashboard-nav shadow'>
                <nav className="nav d-lg-flex pt-2 px-4 border-bottom">
                  <Link onClick={() => setActiveTab(0)} className={`nav-link position-relative fsp-14 ${activeTab === 0 ? 'active' : ''}`} to="#">
                    Future Shifts
                    <span className='position-absolute bottom-0 pt-1 bg-primary w-100 start-0 rounded-top'></span>
                  </Link>
                  <Link onClick={() => setActiveTab(1)} className={`nav-link position-relative fsp-14 ${activeTab === 1 ? 'active' : ''}`} to="#">
                    Past Shifts
                    <span className='position-absolute bottom-0 pt-1 bg-primary w-100 start-0 rounded-top'></span>
                  </Link>
                </nav>
                <div className={activeTab === 0 ? 'd-block' : 'd-none'}>
                  <div className='px-4 py-3 border-bottom d-flex d-md-inline-block overflow-auto future-shift-status-btn'>
                    <NavLink to="#">All 0</NavLink>
                    <NavLink to="#">Applied 0</NavLink>
                    <NavLink to="#">Hired 0</NavLink>
                    <NavLink to="#">Cancelled 0</NavLink>
                    <NavLink to="#">Substituted 0</NavLink>
                    <NavLink to="#">Not chosen 0</NavLink>
                    <NavLink to="#">Rejected 0</NavLink>
                  </div>
                  <div className='d-flex justify-content-center aling-items-center p-5'>
                    <img src='/assets/images/icons/heistory.svg' alt='' />
                  </div>
                  <div className='d-block text-center text-secondary'>
                    <span className='fsp-12'>Pssst, find your first shifts!</span>
                  </div>
                  <div className='d-flex justify-content-center align-items-center rounded-1 py-4'>
                    <button className='btn btn-primary px-5'>Let's apply for some shifts</button>
                  </div>
                </div>
                <div className={activeTab === 1 ? 'd-block' : 'd-none'}>
                  <div className='px-4 py-3 border-bottom d-flex d-md-inline-block overflow-auto future-shift-status-btn'>
                    <NavLink to="#">All 0</NavLink>
                    <NavLink to="#">Cancelled 0</NavLink>
                    <NavLink to="#">Checkout 0</NavLink>
                    <NavLink to="#">Completed 0</NavLink>
                    <NavLink to="#">Substituted 0</NavLink>
                  </div>
                  <br />
                  <span className='bg-success text-white px-2 py-1' style={{ borderTopRightRadius: '7px', borderBottomRightRadius: '7px' }}>
                    JUNE 2022
                  </span>
                  <div className='row'>
                    <div className='col-12 col-md-2 p-3 px-4'>
                      <div className='text-center py-4 rounded-3 text-white' style={{ background: '#EAF6EF' }}>
                        <span className='d-block text-success'>29</span>
                        <span className='text-dark'>WED</span>
                      </div>
                    </div>
                    <div className='col-12 col-md-10 px-4 px-md-2 px-md-0'>
                      <div className='row pe-0 pe-md-5'>
                        <div className='col-12 py-3 border-bottom'>
                          <span>09:00 - 17:00</span>
                          <button className='btn btn-danger float-end py-0 px-2'>Cancelled</button>
                        </div>
                        <div className='col-12 position-relative'>
                          <span className='fsp-14 fw-bold'>Marqetize</span>
                          <p className='fsp-13'>Boompjes 40 3011XB Rotterdam</p>
                          <div className='d-flex justify-content-end position-absolute end-0 top-0 mt-1'>
                            <div className='d-block text-end pe-2'>
                              <span className='fsp-18 fw-bold'>€16.50</span>
                              <p className='fsp-12 text-secondary'>Customer Care</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className={activeTab === 1 ? 'd-block' : 'd-none'}>
                <div className='bg-white rounded shadow mt-3'>
                  <div className='row'>
                    <div className='col-12 col-md-2 p-3 px-4'>
                      <div className='text-center py-4 rounded-3 text-white' style={{ background: '#EAF6EF' }}>
                        <span className='d-block text-success'>29</span>
                        <span className='text-dark'>WED</span>
                      </div>
                    </div>
                    <div className='col-12 col-md-10 px-4 px-md-2 px-md-0'>
                      <Link to="/freelancer/shift/id/cancel">
                        <div className='row pe-0 pe-md-5'>
                          <div className='col-12 py-3 border-bottom'>
                            <span>09:00 - 17:00</span>
                            <button className='btn btn-primary float-end py-0 px-2'>Hired</button>
                          </div>
                          <div className='col-12 position-relative'>
                            <span className='fsp-14 fw-bold'>Marqetize</span>
                            <p className='fsp-13'>Boompjes 40 3011XB Rotterdam</p>
                            <div className='d-flex justify-content-end position-absolute end-0 top-0 mt-1'>
                              <div className='d-block text-end pe-2'>
                                <span className='fsp-18 fw-bold'>€16.50</span>
                                <p className='fsp-12 text-secondary'>Customer Care</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='bg-white rounded shadow mt-3'>
                  <div className='row'>
                    <div className='col-12 col-md-2 p-3 px-4'>
                      <div className='text-center py-4 rounded-3 text-white' style={{ background: '#EAF6EF' }}>
                        <span className='d-block text-success'>29</span>
                        <span className='text-dark'>WED</span>
                      </div>
                    </div>
                    <div className='col-12 col-md-10 px-4 px-md-2 px-md-0'>
                      <div className='row pe-0 pe-md-5'>
                        <div className='col-12 py-3 border-bottom'>
                          <span>09:00 - 17:00</span>
                          <button className='btn btn-danger float-end py-0 px-2'>You  Cancelled</button>
                        </div>
                        <div className='col-12 position-relative'>
                          <span className='fsp-14 fw-bold'>Marqetize</span>
                          <p className='fsp-13'>Boompjes 40 3011XB Rotterdam</p>
                          <div className='d-flex justify-content-end position-absolute end-0 top-0 mt-1'>
                            <div className='d-block text-end pe-2'>
                              <span className='fsp-18 fw-bold'>€16.50</span>
                              <p className='fsp-12 text-secondary'>Customer Care</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-white rounded shadow mt-3'>
                  <div className='row'>
                    <div className='col-12 col-md-2 p-3 px-4'>
                      <div className='text-center py-4 rounded-3 text-white' style={{ background: '#EAF6EF' }}>
                        <span className='d-block text-success'>29</span>
                        <span className='text-dark'>WED</span>
                      </div>
                    </div>
                    <div className='col-12 col-md-10 px-4 px-md-2 px-md-0'>
                      <Link to="/freelancer/complete-checkout">
                        <div className='row pe-0 pe-md-5'>
                          <div className='col-12 py-3 border-bottom'>
                            <span>09:00 - 17:00</span>
                            <button className='btn btn-warning float-end py-0 px-2'>Complete Checkout</button>
                          </div>
                          <div className='col-12 position-relative'>
                            <span className='fsp-14 fw-bold'>Marqetize</span>
                            <p className='fsp-13'>Boompjes 40 3011XB Rotterdam</p>
                            <div className='d-flex justify-content-end position-absolute end-0 top-0 mt-1'>
                              <div className='d-block text-end pe-2'>
                                <span className='fsp-18 fw-bold'>€16.50</span>
                                <p className='fsp-12 text-secondary'>Customer Care</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='bg-white rounded shadow mt-3'>
                  <div className='row'>
                    <div className='col-12 col-md-2 p-3 px-4'>
                      <div className='text-center py-4 rounded-3 text-white' style={{ background: '#EAF6EF' }}>
                        <span className='d-block text-success'>29</span>
                        <span className='text-dark'>WED</span>
                      </div>
                    </div>
                    <div className='col-12 col-md-10 px-4 px-md-2 px-md-0'>
                      <div className='row pe-0 pe-md-5'>
                        <div className='col-12 py-3 border-bottom'>
                          <span>09:00 - 17:00</span>
                          <button className='btn btn-success float-end py-0 px-2'>Complete</button>
                        </div>
                        <div className='col-12 position-relative'>
                          <span className='fsp-14 fw-bold'>Marqetize</span>
                          <p className='fsp-13'>Boompjes 40 3011XB Rotterdam</p>
                          <p className='text-secondary fsp-13'>Checked out: 01:00 - 02:00 (30m break)<br /> Checkout accepted at 20/6/2022 <br />No factoring. Will be paid as soon as the client has paid</p>
                          <div className='d-flex justify-content-end position-absolute end-0 top-0 mt-1'>
                            <div className='d-block text-end pe-2'>
                              <span className='fsp-18 fw-bold'>€16.50</span>
                              <p className='fsp-12 text-secondary'>Customer Care</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* change Date */}
                <div className='bg-white rounded shadow mt-3'>
                  <br />
                  <span className='bg-success text-white px-2 py-1' style={{ borderTopRightRadius: '7px', borderBottomRightRadius: '7px' }}>
                    FEBRUARY 2022
                  </span>
                  <div className='row'>
                    <div className='col-12 col-md-2 p-3 px-4'>
                      <div className='text-center py-4 rounded-3 text-white' style={{ background: '#EAF6EF' }}>
                        <span className='d-block text-success'>29</span>
                        <span className='text-dark'>WED</span>
                      </div>
                    </div>
                    <div className='col-12 col-md-10 px-4 px-md-2 px-md-0'>
                      <div className='row pe-0 pe-md-5'>
                        <div className='col-12 py-3 border-bottom'>
                          <span>09:00 - 17:00</span>
                          <button className='btn btn-secondary float-end py-0 px-2'>Not Chosen</button>
                        </div>
                        <div className='col-12 position-relative'>
                          <span className='fsp-14 fw-bold'>Marqetize</span>
                          <p className='fsp-13'>Boompjes 40 3011XB Rotterdam</p>
                          <div className='d-flex justify-content-end position-absolute end-0 top-0 mt-1'>
                            <div className='d-block text-end pe-2'>
                              <span className='fsp-18 fw-bold'>€16.50</span>
                              <p className='fsp-12 text-secondary'>Customer Care</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-white rounded shadow mt-3'>
                  <div className='row'>
                    <div className='col-12 col-md-2 p-3 px-4'>
                      <div className='text-center py-4 rounded-3 text-white' style={{ background: '#EAF6EF' }}>
                        <span className='d-block text-success'>29</span>
                        <span className='text-dark'>WED</span>
                      </div>
                    </div>
                    <div className='col-12 col-md-10 px-4 px-md-2 px-md-0'>
                      <div className='row pe-0 pe-md-5'>
                        <div className='col-12 py-3 border-bottom'>
                          <span>09:00 - 17:00</span>
                          <button className='btn btn-danger float-end py-0 px-2'>You  Cancelled</button>
                        </div>
                        <div className='col-12 position-relative'>
                          <span className='fsp-14 fw-bold'>Marqetize</span>
                          <p className='fsp-13'>Boompjes 40 3011XB Rotterdam</p>
                          <div className='d-flex justify-content-end position-absolute end-0 top-0 mt-1'>
                            <div className='d-block text-end pe-2'>
                              <span className='fsp-18 fw-bold'>€16.50</span>
                              <p className='fsp-12 text-secondary'>Customer Care</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><br />
    </>
  )
}

export default Dashboard