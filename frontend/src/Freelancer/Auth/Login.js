import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'universal-cookie';

function Login() {

  const navigate = useNavigate();
  // const cookies = new Cookies();
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState({ email: '', password: '' });

  let name, value;

  const inputsValueHandel = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  const login = (e) => {
    e.preventDefault();
    if (!validateUser()) {
      return;
    }

    fetch('api/auth/login-freelancer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res => res.json()).then(data => {
      if (data.success) {
        localStorage.setItem('token', data.token);
        // Set user data in local storage
        localStorage.setItem('user', JSON.stringify(data.user));
        enqueueSnackbar(data.message, { variant: 'success' });
        navigate('/freelancer/profile-complete');
      } else {
        enqueueSnackbar(data.message, { variant: 'error' });
      }
    }).catch(err => {
      enqueueSnackbar('An error occurred, please try again', { variant: 'error' });
    })

  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(password);
  }

  const validateUser = () => {
    if (user.email === '' || user.password === '') {
      enqueueSnackbar('Please fill all fields', { variant: 'error' });
      return false;
    }

    if (!validateEmail(user.email)) {
      enqueueSnackbar('Invalid email address', { variant: 'error' });
      return false;
    }

    if (!validatePassword(user.password)) {
      enqueueSnackbar('Password must be 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter', { variant: 'error' });
      return false;
    }

    return true;
  }
  return (
    <>
      <main>
        <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 py-1 px-3'>
          <div className='card shadow border-0 mt-6 rounded-3 border-top'>
            <div className="card-body pp-25">
              <h5 className="card-title text-success-dark fw-600 pb-4 mt-3">Login With Email</h5>
              <form className='form py-1 pb-3' onSubmit={login}>
                <div className='form-group position-relative'>
                  <label className='fw-700 pb-2 fsp-13'>Email Address</label>
                  <input type="text" name='email' className="form-control px-5 py-3 bg-light-dark border-0 fsp-13" onChange={inputsValueHandel} value={user.email} placeholder='Enter your email address' />
                  <i className='bi bi-envelope-fill position-absolute top-50 ms-3 fsp-20 text-secondary '></i>
                </div>
                <div className='form-group position-relative mt-4'>
                  <label className='fw-700 pb-2 fsp-13'>Password</label>
                  <input type="password" name='password' className="form-control px-5 py-3 bg-light-dark border-0 fsp-13" onChange={inputsValueHandel} value={user.password} placeholder='Enter your password' />
                  <i className='bi bi-key-fill position-absolute top-50 ms-3 fsp-20 text-secondary '></i>
                </div>
                <div className='my-3'>
                  <p className='fsp-13'>Forgot password? You can either choose to <Link to="/login-without-password" className='text-primary fw-600'>Login without a password</Link> or <Link to="/password-reset" className='text-primary fw-600'>Reset Your password.</Link></p>
                </div>
                <div className=''>
                  <button type='submit' className='btn btn-primary w-100 py-2_5 rounded-1 fsp-15'>Sign In</button>
                </div>
              </form>
            </div>
          </div>
          <div className='d-block text-center my-5'>
            <p className='fw-500 p-0 m-0 fsp-13'>Don't have an account?</p>
            <Link to="/freeflexer-signup" className='text-center m-0 p-0 fw-bold fsp-18'>Sign Up</Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Login