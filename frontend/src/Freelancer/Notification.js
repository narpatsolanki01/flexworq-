import React from 'react'
import End from '../Components/Positions/End'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';


function Notification() {

  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#1A73E8',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  return (
    <>
      <section className='mt-4 px-3'>
        <div className='container px-0'>
          <h3 className='fw-bold mb-4'>Notification Settings</h3>
          <div className='row my-2'>
            <div className='col-8'>
              <span className='text-success-dark fs-5 fw-bold ms-0'>Promotional messages</span>
            </div>
            <div className='col-4'>
              <End>
                <span className='me-2'>Email</span>
                <span className='mx-3 me-4'>Mobile</span>
              </End>
            </div>
          </div>
        </div>
        <div className='container shadow border px-2 py-1 rounded-3'>
          <ul className="list-group list-group-flush">
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Someone in your flexpool requested a substitute
                </div>
                <div className='col-3'>
                  <div className='d-flex justify-content-end'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Daily overview of interesting shifts
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Direct message for new sift in your flexfool
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Shift avilable after cancellation of accepted FreeFlexer
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  And a fifth one
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='container mt-5'>
          <div className='row my-2'>
            <div className='col-8'>
              <span className='text-success-dark fs-5 fw-bold ms-0'>Messages about enrollments</span>
            </div>
            <div className='col-4'>
              <End>
                <span className='me-2'>Email</span>
                <span className='mx-3 me-4'>Mobile</span>
              </End>
            </div>
          </div>
        </div>
        <div className='container shadow border px-2 py-1 rounded-3 mt-3'>
          <ul className="list-group list-group-flush">
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Accepted for a shift
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Your shift is cancelled by client
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Overlapping enrollments is cancelled
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Accepted for a shift as substitute
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Shift cancelled completely
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Not selected for a shift
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-8'>
              <span className='text-success-dark fs-5 fw-bold ms-0'>Messages about checkouts</span>
            </div>
            <div className='col-4'>
              <End>
                <span className='me-2'>Email</span>
                <span className='mx-3 me-4'>Mobile</span>
              </End>
            </div>
          </div>
        </div>
        <div className='container shadow border px-2 py-1 rounded-3 mt-3'>
          <ul className="list-group list-group-flush">
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Someone wants substitute for you
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Substitute has received a rating
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Someone is looking for a substitute
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-8'>
              <span className='text-success-dark fs-5 fw-bold ms-0'>Important reminders</span>
            </div>
            <div className='col-4'>
              <End>
                <span className='me-2'>Email</span>
                <span className='mx-3 me-4'>Mobile</span>
              </End>
            </div>
          </div>
        </div>
        <div className='container shadow border px-2 py-1 rounded-3 mt-3'>
          <ul className="list-group list-group-flush">
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Someone wants substitute for you
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Substitute has received a rating
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Someone is looking for a substitute
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-8'>
              <span className='text-success-dark fs-5 fw-bold ms-0'>Flexpools</span>
            </div>
            <div className='col-4'>
              <End>
                <span className='me-2'>Email</span>
                <span className='mx-3 me-4'>Mobile</span>
              </End>
            </div>
          </div>
        </div>
        <div className='container shadow border px-2 py-1 rounded-3 mt-3'>
          <ul className="list-group list-group-flush">
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Someone wants substitute for you
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Substitute has received a rating
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item fsp-13 position-relative py-3">
              <div className='row'>
                <div className='col-9 pe-5'>
                  Someone is looking for a substitute
                </div>
                <div className='col-3'>
                  <div className='justify-content-end d-flex'>
                    <FormControlLabel control={<IOSSwitch defaultChecked className="p-0 me-4" />} />
                    <FormControlLabel control={<IOSSwitch />} className="p-0" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*  */}<br />
        <div className='container mt-4 position-relative shadow px-4 py-3 mb-5'>
          <div className='row'>
            <div className='col-9 pe-5'>
              <span className='fs-5 fw-bold ms-0'>Unsubscribe from all Notification</span>
            </div>
            <div className='col-3'>
              <div className='justify-content-end d-flex'>
                <FormControlLabel control={<IOSSwitch />} className="p-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Notification

