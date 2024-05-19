import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForEmployers() {

  const [askUsFormData, setAskUsFormData] = useState({ firstName: '', lastName: '', company: '', email: '', phoneNumber: '', sector: '', workforce: '' });
  const inputsValueHandel = (e) => {
    setAskUsFormData({ ...askUsFormData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <section className="mt-0 mt-lg-4">
        {/* <div className="container">
          <div className="row px-3 px-lg-0">
            <div className="col-12 col-lg-6 pt-5 pt-lg-7">
              <div className="py-lg-5 pe-lg-5">
                <h1><span className="fw-bold fs-re-55 text-primary-dark">Get freelancers</span> for your gigs</h1>
                <ul className="list-unstyled mt-4">
                  <li className="lh-sm my-3 fw-500 fsp-18"><img src='assets/images/icons/check.png' className='me-3 w-18' alt="check-icon" />Extra staff in every industry</li>
                  <li className="lh-sm my-3 fw-500 fsp-18"><img src='assets/images/icons/check.png' className='me-3 w-18' alt="check-icon" />From as little as €17</li>
                  <li className="lh-sm my-3 fw-500 fsp-18"><img src='assets/images/icons/check.png' className='me-3 w-18' alt="check-icon" />Paperwork handled by us</li>
                </ul>
                <div className='mt-5 mb-5 mb-lg-0'>
                  <button className="btn btn-primary px-5 px-lg-4 py-2_5 rounded-1 me-3 mb-lg-0 fsp-13">Plan your first GIG</button>
                  <button className="btn btn-success-dark-1 text-light px-5 px-lg-4 rounded-1 ms-0 ms-lg-3 py-2_5 mt-3 mt-md-0 fsp-13">Let our team help you</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 justify-content-center align-items-center d-flex p-lg-4">
              <img src='assets/images/frontend/employers/NoPath.png' className="rounded-4 w-100" alt="home page" />
            </div>
          </div>
        </div> */}
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-7 pt-6 px-3 px-lg-0'>
              <div className="py-lg-5">
                <h1 className="fw-500 fs-re-55 mt-0 mt-lg-2"><span className="fw-bold text-primary-dark">Get freelancers</span> for your gigs</h1>
                <p className="fsp-18 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus nisi eu risus consectetur maximus. Maecenas consectetur nisl a arcu aliquam, convallis varius augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus nisi eu risus Consectetur.</p>
                <div className='mt-5 mb-5 mb-lg-0'>
                  <button className="btn btn-primary px-5 px-lg-4 py-2_5 rounded-1 me-1 mb-lg-0 fsp-13">Plan your first GIG</button>
                  <button className="btn btn-success-dark-1 text-light px-5 px-lg-4 rounded-1 ms-0 ms-lg-2 py-2_5 mt-3 mt-md-0 fsp-13">Let our team help you</button>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-5 mt-4 ps-lg-5 ps-lg-3 p-0 '>
              <div className='w-100 h-100 rounded-4' style={{ background: 'url(assets/images/frontend/employers/NoPath.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize:'cover' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-7' style={{ background: '#f1f1f1' }}>
        <div className='container'>
          <div className='row p-0'>
            <div className='col-12 col-lg-6 px-4 pe-lg-5 pt-3'>
              <img src='assets/images/frontend/employers2.png' className="rounded-4 w-100" alt="home page" />
            </div>
            <div className='col-12 col-lg-6 px-4 px-lg-0'>
              <div className='mt-5'>
                <h2 className='fw-bold fsp-30'>Backup is just one click away</h2>
                <p className='mt-4 fsp-18'>In urgent need of additional staff for you even, retail, logistics, delivery, cleaning or hospitality gig? Find freelancers via Flexworq with just one click.</p>
              </div>
              <div className='mt-5'>
                <h2 className='fw-bold fsp-30'>Select your freelancer</h2>
                <p className='mt-4 fsp-18'>Your online dashboard allows you to carefully select the best freelancers without involvement of an employer agency. Our platform never sleeps and you're always in charge. Would you rather have some help. We here for you.</p>
              </div>
              <div className='mt-5'>
                <h2 className='fw-bold fsp-30'>Transparent costs</h2>
                <p className='mt-4 fsp-18'>Find people you need vie Flemvong - motivated end qualified. And the cote? You pay C3.50 per worked hour to Temper, regardless of the hourly rate. Nothing else.</p>
              </div>
              <div className='mt-4 d-block d-md-flex'>
                <button className='btn btn-primary px-4 py-3 rounded-1 fsp-13 fw-500 d-block mb-2'>Find motivated people</button>
                <Link to='/' className='mt-3 text-decoration-none ms-0 ms-md-4 fw-600 fsp-13'>Let our team help you <i className="bi bi-chevron-right ms-2"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-7 pb-5 mt-1'>
        <div className='container'>
          <div className='row p-0'>
            <h1 className='text-center fs-re-55 mb-6 fw-300'>Enjoy the <span className='text-success-dark fw-bold'>benefits of Flexworq</span></h1>
            <div className='col-12 col-md-4 py-4 px-3'>
              <h1 className='fsp-25 fw-bold'>No Strings Attached</h1>
              <p className='mt-4 fsp-15'>As freelancers are not considered permanent staff, employee contributions and requirements are not pert of the deal.</p>
            </div>
            <div className='col-12 col-md-4 py-4 px-3'>
              <h1 className='fsp-25 fw-bold'>Rates from €3.50 per hour</h1>
              <p className='mt-4 fsp-15'>Post gig for only €13 per hour (minimum), this Is the amount that the freelancer will receive for thew work. We charge €3.50 per hour worked. No cure, no pay.</p>
            </div>
            <div className='col-12 col-md-4 py-4 px-3'>
              <h1 className='fsp-25 fw-bold'>Leave the paperwork to us</h1>
              <p className='mt-4 fsp-15'>You'll receive a collective Invoice on a weekly basis. The Invoice shows the number of worked hours and the related rates, the total freelancers fees and costs towards flexors. We handle all payments made to the freelancers.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='sectionBg mt-0' style={{ backgroundImage: "url('assets/images/background/Group.png')" }} >
        <div className='d-flex'>
          <div className='d-block m-auto pt-5'>
            <h1 className='py-3 fsp-45 text-light fw-600 text-center'>Start finding flexible freelancers</h1>
            <div className='d-flex pb-5 pt-3'>
              <button className='btn btn-light text-success-dark fw-600 py-3 px-6 m-auto fsp-13'>Get started right away</button>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-7 pb-4 mt-1'>
        <div className='container d-flex'>
          <div className='row p-0 m-auto'>
            <h1 className='text-center fs-re-55 mb-4'>Ask us <span className='text-success-dark fw-bold'>anything</span></h1>
            <p className='text-center fsp-18 fw-500'>The process? The product or the pricing? We're here to answer any question you might have. Please leave your details, then we will get back to you as soon as possible.</p>
            <div className='d-flex mt-4'>
              <form className='wrv-50 m-auto'>
                <div className='form-group mb-2'>
                  <label className='my-1 fw-bold fsp-13'>Name</label>
                  <div className='row'>
                    <div className='col-12 col-lg-6'>
                      <input type="text" name="firstName" onChange={inputsValueHandel} className='form-control py-2 mt-2' placeholder="Enter your first name" value={askUsFormData.firstName} />
                    </div>
                    <div className='col-12 col-lg-6'>
                      <input type="text" name="lastName" onChange={inputsValueHandel} className='form-control py-2 mt-2' placeholder="Enter your last name" value={askUsFormData.lastName} />
                    </div>
                  </div>
                </div>
                <div className='form-group mb-3'>
                  <label className='fw-bold fsp-13'>Company</label>
                  <input type="text" name="company" onChange={inputsValueHandel} className='form-control py-2' placeholder="Enter your company name" value={askUsFormData.company} />
                </div>
                <div className='form-group mb-3'>
                  <label className='fw-bold fsp-13'>Email Address</label>
                  <input type="text" name="email" onChange={inputsValueHandel} className='form-control py-2' placeholder="Enter your email address" value={askUsFormData.email} />
                </div>
                <div className='form-group mb-3'>
                  <label className='fw-bold fsp-13'>Phone number</label>
                  <input type="text" name="phoneNumber" onChange={inputsValueHandel} className='form-control py-2' placeholder="Enter your phone number" value={askUsFormData.emaphoneNumberil} />
                </div>
                <div className='form-group mb-3'>
                  <label className='fw-bold fsp-13'>Sector</label>
                  <select className='form-select py-2 select-arrow-dark'>
                    <option>Select</option>
                  </select>
                </div>
                <div className='form-group mb-3'>
                  <label className='fw-bold fsp-13'>Size of flexible workforce</label>
                  <select className='form-select py-2 select-arrow-dark'>
                    <option>Select</option>
                  </select>
                </div>
                <div className='form-check'>
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label ms-2 fsp-15">I give Flexworq permission to keep me informed about relevant updates and developments via marketing e-mails. You can always unsubscribe from this.</label>
                </div>
                <div className='d-flex pt-5'>
                  <button className='btn btn-primary px-4 py-2_5 m-auto rounded-1 fsp-13'>Contact me about Flexworq</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ForEmployers