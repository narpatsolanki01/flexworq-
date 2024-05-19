import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';


function Register() {

   const { enqueueSnackbar } = useSnackbar();
   const navigate = useNavigate();

   const [client, setClient] = useState({
      company: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
   })


   const saveClient = (e) => {
      e.preventDefault()

      if (!validateClient()) {
         return;
      }

      // merge first and last name and assign to name and remove first and last name
      const name = client.firstName + ' ' + client.lastName;
      delete client.firstName;
      delete client.lastName;
      client.name = name;

      fetch('api/auth/signup-client', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(client)
      }).then(res => res.json()).then(data => {
         if (data.success) {
            enqueueSnackbar(data.message, { variant: 'success' });
            navigate('/company-signin');
         }
         else {
            enqueueSnackbar(data.message, { variant: 'error' });
         }
      }).catch(err => console.log(err))
   }


   const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
   }

   const validatePassword = (password) => {
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      return re.test(password);
   }

   const validateClient = () => {
      if (client.company === '' || client.firstName === '' || client.lastName === '' || client.email === '' || client.password === '') {
         enqueueSnackbar('All fields are required.', { variant: 'error' });
         return false;
      }
      if (!validateEmail(client.email)) {
         enqueueSnackbar('Invalid email address.', { variant: 'error' });
         return false;
      }
      if (!validatePassword(client.password)) {
         enqueueSnackbar('Password must be 6-20 characters long and include at least one numeric digit, one uppercase and one lowercase letter.', { variant: 'error' });
         return false;
      }
      return true;
   }


   return (
      <>
         <div className='row m-0'>
            <div className='col-12 col-md-6 col-lg-4 offset-md-0 offset-lg-1 p-3 p-md-0 ps-md-3 ps-lg-0'>
               <div className='card shadow border-0 mt-6 rounded-3 border-top my-5'>
                  <div className="card-body pp-30">
                     <h4 className="card-title fw-400">Sign up as <span className='text-primary-dark fw-700'>a client</span></h4>
                     <form className='form mt-4' onSubmit={saveClient}>
                        <div className='form-group position-relative'>
                           <label className='fw-700 pb-2'>Company name or CoC number*</label>
                           <input type="text" className="form-control px-5 pyp-13 bg-light-dark border-0" placeholder='Company name or CoC number'
                              onChange={(e) => setClient({ ...client, company: e.target.value })} value={client.company}
                           />
                           <i className='bi bi-search position-absolute top-50 mt-1 ms-3 fsp-15 text-secondary '></i>
                        </div>
                        <div className='form-group row mt-3'>
                           <div className='col-12 col-md-6'>
                              <label className='fw-700 pb-2'>First Name*</label>
                              <input type="text" className="form-control pyp-13 bg-light-dark border-0" placeholder='Enter your first name'
                                 onChange={(e) => setClient({ ...client, firstName: e.target.value })} value={client.firstName}
                              />
                           </div>
                           <div className='col-12 col-md-6 mt-2 mt-md-0'>
                              <label className='fw-700 pb-2'>Last Name*</label>
                              <input type="text" className="form-control pyp-13 bg-light-dark border-0" placeholder='Enter your last name'
                                 onChange={(e) => setClient({ ...client, lastName: e.target.value })} value={client.lastName}
                              />
                           </div>
                        </div>
                        <div className='form-group position-relative mt-3'>
                           <label className='fw-700 pb-2'>Email Address*</label>
                           <input type="text" className="form-control pyp-13 bg-light-dark border-0" placeholder='Enter your Email address'
                              onChange={(e) => setClient({ ...client, email: e.target.value })} value={client.email}
                           />
                        </div>
                        <div className='form-group position-relative mt-3'>
                           <label className='fw-700 pb-2'>Password*</label>
                           <input type="password" className="form-control pyp-13 bg-light-dark border-0" placeholder='Enter your password'
                              onChange={(e) => setClient({ ...client, password: e.target.value })} value={client.password}
                           />
                        </div>
                        <div className='form-check my-4'>
                           <input type="checkbox" className="form-check-input" required />
                           <label className="form-check-label ms-2">I give Flexworq consent to keep me informed of relevant updates and developments via marketing emails. I can always unsubscribe from these emails.</label>
                        </div>
                        <div className=''>
                           <button className='btn btn-primary w-100 pyp-13 rounded-1'>Sign Up</button>
                        </div>
                        <div className='d-block text-center my-2'>
                           <p className='fw-500 p-0 m-0'>Don't have an account?</p>
                           <Link to="/company-signin" className='text-center m-0 p-0 fw-800 fsp-18'>Sign In</Link>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div className='col-12 col-md-5 offset-md-1 offset-lg-2 justify-content-end d-flex px-0'>
               <div className='shadow-lg p-5'>
                  <div className='row d-block'>
                     <div className='col-12'>
                        <div className='d-flex justify-content-start mb-4 mt-4'>
                           <AvatarGroup total={24}>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                           </AvatarGroup>
                        </div>
                        <h4 className='fsp-18'>Start filling hours today</h4>
                        <p>Experience the power of Temper, just like thousands of other clients before you.</p>
                     </div>
                     <div className='col-12'>
                        <div className='d-flex justify-content-start mb-4 mt-4'>
                           <AvatarGroup total={24}>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                           </AvatarGroup>
                        </div>
                        <h4 className='fsp-18'>200.000+ qualified professionals</h4>
                        <p>More than 200.000 professionals already registered on our digital shifts board.</p>
                     </div>
                     <div className='col-12'>
                        <div className='d-flex justify-content-start mb-4 mt-4'>
                           <AvatarGroup total={24}>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                           </AvatarGroup>
                        </div>
                        <h4 className='fsp-18'>No additional costs</h4>
                        <p>You pay 3.50 EUR per worked hour to Temper — that’s it. There are no hidden costs.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Register