import React from 'react'
import Icon from '../../Components/Icon'
import {Link} from 'react-router-dom'
function Step1() {
  return (
    <>
      <div className='w-100 mb-2 mb-md-5' style={{ background: 'url(/assets/images/background/group-young-people-sitting-conference-together.svg) 0% 0% / auto no-repeat' }}>
        <div className='container p-5'>
          <span className='fsp-30 fw-bold text-white'>Checkout</span>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-9'>
            <p className='lh-0 mb-0'>Please answer these question about your shift to get paid:</p>
            <p className='lh-0 mb-0 fw-bold'>Monday 20 June 2022 | 01:00 PM - 01:30 at Marqetize</p>
            <div className='my-4'>
              <ul className='list-inline steper'>
                <li className='list-inline-item rounded-circle bg-success text-white me-5'>1</li>
                <li className='list-inline-item rounded-circle bg-white border ms-4'>2</li>
              </ul>
            </div>
            <div className='row'>
              <div className='col-12 col-md-3'>
                <div className='form-group'>
                  <label>I worked from</label>
                  <input type="time" className='form-control bg-light-dark py-2_5 mt-1' />
                </div>
              </div>
              <div className='col-12 col-md-3'>
                <div className='form-group'>
                  <label>Until</label>
                  <input type="time" className='form-control bg-light-dark py-2_5 mt-1' />
                </div>
              </div>
              <div className='col-12 col-md-5'>
                <div className='form-group'>
                  <label>How long did you break?</label>
                  <select className='form-select py-2_5 mt-1'>
                    <option>Select</option>
                  </select>
                </div>
              </div>
            </div>
            <p className='text-success-dark fsp-20 fw-600 my-3'>When do you want to get paid?</p>
            <div class="form-check">
              <input class="form-check-input" type="radio" checked value="" id="flexCheckDefault" />
              <label class="form-check-label fw- fsp-14" for="flexCheckDefault">
                As soon as the client pays
              </label>
              <p className='fsp-13'>A payment term of 14 days has been agreed with the client. If the client doesn't pay on time or doesn't pat at all, this falls under your own risk.</p>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label fw-400 fsp-14" for="flexCheckDefault">
                The information above is correct. Abuse will lead to removal from Flexworq.
              </label>
            </div>
            <Link to="/freelancer/checkout-2" className='btn btn-primary px-5 py-2_5 my-4 rounded-1'>Save and Continue to Next Step</Link>
          </div>
          <div className='col-12 col-md-3 mb-5 px-4'>
            <div className='row rounded border py-3'>
              <div className='col-2 justify-content-center align-items-center d-flex'>
                <img src='/assets/images/icons/chatBox.png' className='w-100' alt='' />
              </div>
              <div className='col-8'>
                <p className='fsp-15 mb-0'>Ask your Question by</p>
                <span className='fsp-16 fw-bold'>Chat Message</span>
              </div>
              <div className='col-1 justify-content-center align-items-center d-flex'>
                <Icon>chevron-right</Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step1