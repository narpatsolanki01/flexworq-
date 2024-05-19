import React from 'react'
import { Link } from 'react-router-dom'
function DidYourWork() {
  return (
    <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 px-3 mb-5'>
      <div className='card shadow border-0 mt-6 rounded-3 border-top'>
        <div className="card-body pp-25">
          <h5 className="card-title pb-2">In order to get paid we need the following information</h5>
          <form className='form py-1 pb-3'>
            <div className='form-group position-relative'>
              <label className='fw-700 pb-2 fsp-13'>IBAN</label>
              <input type="text" name='email' className="form-control py-2_5 bg-light-dark border-0 fsp-13" placeholder='NL606654835843541' />
            </div>
            <div className='form-group position-relative mt-2'>
              <label className='fw-700 pb-2 fsp-13'>VAT-identification number (optional)</label>
              <input type="password" name='password' className="form-control py-2_5 bg-light-dark border-0 fsp-13" placeholder='VAT-identification number' />
            </div>
            <div className='form-group position-relative mt-2 mb-4'>
              <label className='fw-700 pb-2 fsp-13'>Citizen service number</label>
              <input type="password" name='password' className="form-control py-2_5 bg-light-dark border-0 fsp-13" placeholder='Is stated on your ID (backside)' />
            </div>
            <span className='text-success-dark fw-bold fsp-18'>Invoice address</span>
            <div className='row mb-2'>
              <div className='col-12 col-md-4'>
                <div className='form-group position-relative mt-2'>
                  <label className='fw-700 pb-2 fsp-13'>Postcode</label>
                  <input type="password" name='password' className="form-control py-2_5 bg-light-dark border-0 fsp-13" placeholder='Zipcode' />
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='form-group position-relative mt-2'>
                  <label className='fw-700 pb-2 fsp-13'>Huisnummer</label>
                  <input type="password" name='password' className="form-control py-2_5 bg-light-dark border-0 fsp-13" placeholder='Number' />
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='form-group position-relative mt-2'>
                  <label className='fw-700 pb-2 fsp-13'>Toevoeg</label>
                  <input type="password" name='password' className="form-control py-2_5 bg-light-dark border-0 fsp-13" placeholder='Addit' />
                </div>
              </div>
            </div>
            <span>Sint-Andriesstraat, Rotterdam</span>
          </form>
          <div className=''>
            <Link to='/freelancer/checkout-1' className='btn btn-primary w-100 py-2_5 rounded-1 fsp-15'>Next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DidYourWork