import React from 'react'
import RegistrationsRow from '../Component/RegistrationsRow';
import ShiftRow from '../Component/ShiftRow';

function Index() {
  return (
    <>
      {/* Desktop Design */}
      <div className='w-100 mb-2 mb-md-5 d-none d-md-block' style={{ background: 'url(/assets/images/background/group-young-people-sitting-conference-together.svg) 0% 0% / auto no-repeat' }}>
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
                <ShiftRegistrationTabs type="desktop" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <section className='d-block d-md-none mt-1'>
        <ShiftRegistrationTabs type="mobile" />
      </section>
    </>
  )
}

function ShiftRegistrationTabs(props) {

  const upcoming_shifts = [
    { type: 'Canceled by client', date: '7 sep ', time: { to: '09:00', from: '17:00' }, day: 'Wednesday' },
    { type: 'Canceled by client', date: '8 sep ', time: { to: '09:00', from: '14:00' }, day: 'Thursday' },
  ];

  const wait_for_payment = [
    { type: 'Waiting for confirmation checkout', date: '7 sep ', time: { to: '09:00', from: '17:00' }, day: 'Sunday' },
  ];

  const completed_shift = [
    { type: 'No Show fine', date: '2 aug ', time: { to: '13:15', from: '13:45' }, day: 'Tuesday' },
    { type: '€ 7,25 has been paid', date: '20 jun ', time: { to: '01:00', from: '01:30' }, day: 'Monday' },
  ]

  return (
    <div className='dashboard-mobile-tab-container'>
      <div className='tab-navs py-2 px-3 border-bottom'>
        <ul className="nav nav-tabs py-1 px-1 px-md-2" id="myTab" role="tablist">
          <li className="nav-item active"><a className="nav-link active fsp-13 px-2" href={`#shift-${props.type}`} role="tab" aria-controls="shift" data-bs-toggle="tab">Shifts</a></li>
          <li className="nav-item"><a className="nav-link fsp-13 px-2" href={`#register-${props.type}`} role="tab" aria-controls="aanmeldingen" data-bs-toggle="tab">Registrations</a></li>
        </ul>
      </div>
      <div className="tab-content px-3 pb-5">
        {/* tab 1 */}
        <div className="tab-pane active" id={`shift-${props.type}`} role="tabpanel" aria-labelledby="shift-tab">
          <p className='p-2 ps-0 mt-3 text-muted mb-0 fsp-18'>2 upcoming shifts</p>
          {
            upcoming_shifts.map((val, index) => (
              <ShiftRow key={index} shift={val} />
            ))
          }
          <p className='p-2 ps-0 mt-2 text-muted mb-0 fsp-18'>wait for payment</p>
          {
            wait_for_payment.map((val, index) => (
              <ShiftRow key={index} shift={val} />
            ))
          }
          <p className='p-2 ps-0 mt-2 text-muted mb-0 fsp-18'>Completed shifts</p>
          {
            completed_shift.map((val, index) => (
              <ShiftRow key={index} shift={val} />
            ))
          }
        </div>
        <div className="tab-pane" id={`register-${props.type}`} role="tabpanel" aria-labelledby="register-tab">
          <p className='p-2 ps-0 mt-3 text-muted mb-0 fsp-18'>Monday, 12 September</p>
          {
            <RegistrationsRow image="Group_395@2x.png" type="Warehouse worker" payment="€ 19,00/h" company="Van Kekem Fruit" to="03:00" from="12:00" />
          }
          <p className='p-2 ps-0 ps-0 mt-3 text-muted mb-0 fsp-18'>Thursday, 15 September</p>
          {
            <RegistrationsRow image="Group_398@2x.png" type="Warehouse worker" payment="€ 16,00/h" company="DHL parcel Utrecht Rutherfordweg" to="03:00" from="07:30" />
          }
          <p className='p-2 ps-0 ps-0 mt-3 text-muted mb-0 fsp-18'>Friday, 16 September</p>
          {
            <RegistrationsRow image="Group_395@2x.png" type="Warehouse worker" payment="€ 17,50/h" company="Van Kekem Fruit" to="08:00" from="16:30" />
          }
          <p className='p-2 ps-0 ps-0 mt-3 text-muted mb-0 fsp-18'>Saturday, 17 September</p>
          {
            <RegistrationsRow image="Group_395@2x.png" type="Warehouse worker" payment="€ 17,50/h" company="Van Kekem Fruit" to="08:00" from="16:00" />
          }
        </div>
      </div>
    </div>
  )
}

export default Index