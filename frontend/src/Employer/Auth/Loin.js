import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSnackbar } from 'notistack'
function Loin() {

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [conmany, setCompany] = React.useState({
    email: '',
    password: ''
  });

  const companylogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await fetch('api/auth/login-client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(conmany)
    }).then(response => response.json()).then(data => {
      if (data.success === true) {
        enqueueSnackbar(`Welcome ${data.message}`, { variant: 'success' });
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/employer/agreement');
      } else {
        enqueueSnackbar(`invalid credentials ${data.message}!`, { variant: 'error' });
      }
    })
  }

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePassword = (password) => {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(password);
  }

  const validateForm = () => {
    if (conmany.email === '' || conmany.password === '') {
      enqueueSnackbar('All fields are required!', { variant: 'error' });
      return false;
    } else if (!validateEmail(conmany.email)) {
      enqueueSnackbar('Invalid email address!', { variant: 'error' });
      return false;
    } else if (!validatePassword(conmany.password)) {
      enqueueSnackbar('Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter!', { variant: 'error' });
      return false;
    }
    return true;
  }


  return (
    <>
      <main>
        <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 py-1 px-3'>
          <div className='card shadow border-0 mt-6 rounded-3 border-top'>
            <div className="card-body p-4">
              <h5 className="card-title text-success-dark fw-600 pb-4 mt-3">Login With Email</h5>
              <form className='form py-1 pb-3' onSubmit={companylogin}>

                <div className='form-group position-relative'>
                  <label className='fw-700 pb-2'>Email Address</label>
                  <input type="text" name='email' className="form-control px-5 py-3 bg-light-dark border-0" placeholder='Enter your email address'
                    onChange={(e) => setCompany({ ...conmany, email: e.target.value })} value={conmany.email}
                  />
                  <i className='bi bi-envelope-fill position-absolute top-50 ms-3 fsp-20 text-secondary '></i>
                </div>

                <div className='form-group position-relative mt-4'>
                  <label className='fw-700 pb-2'>Password</label>
                  <input type="password" name='password' className="form-control px-5 py-3 bg-light-dark border-0" placeholder='Enter your password'
                    onChange={(e) => setCompany({ ...conmany, password: e.target.value })} value={conmany.password}
                  />
                  <i className='bi bi-key-fill position-absolute top-50 ms-3 fsp-20 text-secondary '></i>
                </div>

                <div>
                  <p>Forgot password? You can either choose to <Link to="/login-without-password" className='text-primary fw-600'>Login without a password</Link> or <Link to="/password-reset" className='text-primary fw-600'>Reset Your password.</Link></p>
                </div>
                <div className=''>
                  <button className='btn btn-primary w-100 py-2_5 rounded-1'>Sign In</button>
                </div>
              </form>
            </div>
          </div>
          <div className='d-block text-center my-5'>
            <p className='fw-500 p-0 m-0'>Don't have an account?</p>
            <Link to="/freeflexer-signup" className='text-center m-0 p-0 fw-800 fs-4'>Sign Up</Link>
          </div>
        </div>

      </main>

      {/* <div className='justify-content-center align-items-center d-flex'>
        <div className='text-center'>
          <img src='assets/images/errors/Working-bro.svg' style={{ height: '400px' }} alt="..." />
          <h4 className='text-primary-dark'>Working On this Page....</h4>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-ceter py-3 mb-5'>
        <button onClick={() => navigate(-1)} className='btn btn-primary mx-3'><i className="bi bi-arrow-left"></i> </button>
        <Link to="/" className='btn btn-outline-primary'>Back To Home Page</Link>
      </div> */}
    </>
  )
}

export default Loin

// 