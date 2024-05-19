import React from 'react'
import Icon from '../../Components/Icon'
import { Link } from 'react-router-dom'
function Substitute2() {
  return (
    <>
      <section className='mt-0'>
        <div className='container py-5'>
          <h3 className='fsp-30 fw-bold'>Find A Substitute</h3>
          <div className='row'>
            <div className='col-12 col-md-8 py-4'>
              <div className='border border-primary rounded px-5 pt-4 pb-3' style={{ background: '#EDF6F6' }}>
                <h3 className='fsp-20'>Monday, 20 June, 06:000 - 10:00</h3>
              </div>
              <p className='fsp-13 mt-3'>Your shift at Marcietize is now live on Flexqorq! Increase the chance of finding a substitute by sharing the link to the shift: <Link to="https://flexworq.com/f-9vrgiyi">Https://flexworq.com/f-9vrgiyi</Link></p>
              <h5 className='mt-5 fw-bold fsp-13 mb-0'>Finding the right substitute: </h5>
              <p className='fsp-13'>FreeFlexers that apply to your shift will appear below but you're responsible for finding the best substitute for the shift.</p>
              <h5 className='mt-5 fw-bold fsp-13 mb-0'>A few things to keep in mind: <span className='fw-400'>t on your profile.</span></h5>
              <ul className='my-2'>
                <li className='fsp-13'>Review the FreeFlexers profile to make the best decision who should work on behalf of you — for example the attendance percentage is a good indication of how reliable the FreeFlexer is. </li>
                <li className='fsp-13'>The substitutes rating for this shift will also reflect on your profile.</li>
              </ul>
              <div className='col-4 border rounded my-3'>
                <button className='btn btn-primary rounded-0 py-2 w-100 mt-4'>Find A Substitute</button>
                <p className='fsp-13 my-2 mx-4 text-center'>If a freelancer applies you will be able to select them here</p>
                <div className='text-center bg-light-dark fsp-13 rounded-bottom py-2'>
                  Cancel and work the shift myself
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <ul class="list-group list-group-flush">
                <li class="list-group-item fsp-15 py-3 px-4 d-flex"><div><img src='/assets/images/icons/chatBox.png' className='w-30 me-3 mt-2' alt='...' /></div>What happens if I don't find a suitable substitute? <Icon position="position-absolute end-0">chevron-right</Icon></li>
                <li class="list-group-item fsp-15 py-3 px-4 d-flex"><div><img src='/assets/images/icons/chatBox.png' className='w-30 me-3 mt-2' alt='...' /></div>Ask your question by chat message? <Icon position="position-absolute end-0">chevron-right</Icon></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Substitute2