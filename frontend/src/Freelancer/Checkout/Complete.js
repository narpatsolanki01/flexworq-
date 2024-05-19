import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../../Components/Icon'

function Complete() {

  const navigate = useNavigate();
  return (
    <>
      <section className='mt-0 py-5'>
        <div className='container px-3'>
          <div className='row'>
            <div className='col-12 col-md-8'>
              <div className='border-bottom'>
                <span className='text-success-dark'>29 Jun · 09:00 - 17:00</span>
                <button className='btn btn-warning py-0 float-end'>Complete Checkout</button>
                <h3 className='fsp-22'>Klantenservice medewerker met ervaring</h3>
                <p className='fsp-18 fw-bold my-4'>€17.50 <span className='fsp-12 text-secondary'>· Customer Care</span></p>
              </div>
              <div className='row py-3 border-bottom'>
                <div className='col-12 col-md-3'>
                  <img src='/assets/images/jobs/Group_389.png' className='w-75' alt='' />
                </div>
                <div className='col-12 col-md-9 px-0'>
                  <h4 className='fsp-15'>Marqetize</h4>
                  <p className='fsp-13 mb-0'>Marqetize is een marketing organisatie dat variërende projecten uitvoert voor opdrachtgevers. Van toffe online marketing projecten tot onde…</p>
                  <Link to="/">View more info.</Link>
                </div>
              </div>
              <div className='py-4'>
                <h4 className='fsp-13 fw-bold'>Appearance and outfit</h4>
                <button className='btn btn-outline-dark py-2_5 me-2'>Clothing of own choosing</button>
                <button className='btn btn-outline-dark py-2_5 ms-0 mx-md-2'>Neat trousers</button>
                <button className='btn btn-outline-dark py-2_5 ms-0 mt-2 mt-md-0 mx-md-2'>Trimmed beard</button>
              </div>
              <div className='py-2'>
                <h4 className='fsp-13 fw-bold'>Briefing</h4>
                <p className='fsp-13'>Als Klantenservicemedewerker neem je de telefoon op en help en begeleid je de klant of potentiële klant met zijn vraag. Het is de bedoeling dat je de klant doorschakelt of een een afspraak inplant met de juiste collega van sales of techniek.</p>
              </div>
              <div className='py-2'>
                <h4 className='fsp-13 fw-bold'>Skills</h4>
                <button className='btn btn-outline-dark py-2_5 me-2 mb-2'>Quick service</button>
                <button className='btn btn-outline-dark py-2_5 mx-md-2 mb-2 ms-0'>Stress resistant</button>
                <button className='btn btn-outline-dark py-2_5 mx-md-2 ms-0 mb-2'>Social hygiene</button>
                <button className='btn btn-outline-dark py-2_5 mx-md-2 mb-2 ms-0'>Reduce sauces</button>
                <button className='btn btn-outline-dark py-2_5 me-2'>Operating kitchen appliances</button>
                <button className='btn btn-outline-dark py-2_5 mx-md-2 ms-0 mt-2 mt-md-0'>Portionering</button>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <img src="/assets/images/maps/map.png" className='w-100 mt-2' alt='...' />
              <div className='row border-bottom my-2'>
                <div className='col-2 mx-0 pe-0'>
                  <img src="/assets/images/icons/map-pin.svg" className='w-50 mt-2' alt='...' />
                </div>
                <div className='col-8 mx-0 px-0'>
                  <span className='text-primary'>Boompjes 40</span>
                  <p className='text-secondary'>3011XB Rotterdam</p>
                </div>
                <div className='col-1 pt-3'>
                  <Icon>chevron-right</Icon>
                </div>
              </div>
              <span className='text-success-dark'>Contact Person on Site</span>
              <div className='row border-bottom my-2'>
                <div className='col-2 mx-0 pe-0'>
                  <img src="/assets/images/icons/map-pin.svg" className='w-50 mt-2' alt='...' />
                </div>
                <div className='col-8 mx-0 px-0'>
                  <span className='fw-600'>John Wick</span>
                  <p className='text-secondary'>065468797</p>
                </div>
                <div className='col-1 pt-3'>
                  <Icon>chevron-right</Icon>
                </div>
              </div>
              <div className='row border-bottom my-2'>
                <div className='col-2 mx-0 pe-0'>
                  <img src="/assets/images/icons/document.svg" className='w-20 mt-3' alt='...' />
                </div>
                <div className='col-8 mx-0 px-0 py-3'>
                  <p>Open assignment agreement</p>
                </div>
                <div className='col-1 pt-3'>
                  <Icon>chevron-right</Icon>
                </div>
              </div>
              <span className='text-success-dark'>Your Checkout</span>
              <div class="stepper d-flex flex-column mt-5 ms-2 mb-4">
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center active">
                    <div class="rounded-circle py-1 px-1 bg-secondary mb-1 circle"></div>
                    <div class="line h-100"></div>
                  </div>
                  <div>
                    <p class="lead text-muted fsp-13 ms-4" style={{ marginTop: '-5px' }}>Checkout for this shift</p>
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div class="rounded-circle py-1 px-1 bg-secondary mb-1"></div>
                    <div class="line h-100"></div>
                  </div>
                  <div>
                    <p class="lead text-muted fsp-13 ms-4" style={{ marginTop: '-5px' }}>Waiting for client approval</p>
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div class="rounded-circle py-1 px-1 bg-secondary mb-1"></div>
                    <div class="line h-100"></div>
                  </div>
                  <div>
                    <p class="lead text-muted fsp-13 ms-4" style={{ marginTop: '-5px' }}>Your invoice will be created</p>
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div class="rounded-circle py-1 px-1 bg-secondary mb-1"></div>
                    <div class="line h-100 d-none"></div>
                  </div>
                  <div>
                    <p class="lead text-muted fsp-13 ms-4" style={{ marginTop: '-5px' }}>Your invoice will be created</p>
                  </div>
                </div>
              </div>
              <Link to="/" className='text-primary w-100 px-2 px-md-4 py-2_5 rounded' style={{ background: '#E8F1FD' }}>File an insurance claim <Icon position="ms-3 ms-ms-5">chevron-right</Icon></Link>
            </div>
          </div>
        </div>

        <div className='position-fixed bg-white pt-3 pb-3 w-100 shadow bottom-0 mb-5 mb-md-0'>
          <div className='container d-flex'>
            <p className='m-auto'>Klantenservice medewerker met ervaring 01:00 - 01:30 - €17.50</p>
            <button className='btn btn-warning m-auto rounded-1' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Complete Checkout</button>
          </div>
        </div>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-sm modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body text-center py-4">
                <p className='fsp-16 fw-bold mb-4'>Did you work?</p>
                <button className='btn btn-secondary mx-1 px-4' data-bs-toggle="collapse" data-bs-target="#resoneCancle">No</button>
                <Link to="/freelancer/did-you-work" onClick={() => navigate('/freelancer/did-you-work')} data-bs-dismiss="modal" className='btn btn-primary mx-1 px-4'>Yes</Link>
                <div className='collapse' id="resoneCancle">
                  <p className='fsp-16 fw-bold mb-3 mt-4'>Why didn't your work?</p>
                  <button className='btn btn-secondary w-75 py-2_5 my-1 fsp-13' data-bs-dismiss="modal">I didn't make it</button>
                  <button className='btn btn-secondary w-75 py-2_5 my-1 fsp-13' data-bs-dismiss="modal">The shift was cancelled</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Complete