import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
function Register() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [freelancer, setfreelancer] = useState({
    email: "",
    postcode: "",
    address: "",
    fname: "",
    lname: "",
    name: "",
    password: ""
  });

  const saveFreelancer = async (e) => {
    e.preventDefault();

    if (!validateFreeLancer()) {
      return 0;
    }

    freelancer.name=  freelancer.fname + " " + freelancer.lname;
    delete freelancer.fname;
    delete freelancer.lname;

    await fetch('api/auth/signup-freelancer', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(freelancer)
    }).then(res => res.json()).then((data) => {
      if (data.success === true) {
        enqueueSnackbar('Freelancer added successfully.', { variant: 'success' });
        navigate('/freeflexer-signin');
      } else {
        enqueueSnackbar(`Failed to add freelancer.${data.message}`, { variant: 'error' });
      }
    }).catch((error) => {
      enqueueSnackbar('Failed to add freelancer.', { variant: 'error' });
    })
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePostcode = (postcode) => {
    const re = /^[0-9]{6}$/;
    return re.test(postcode);
  }

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(password);
  }

  const validateFreeLancer = () => {
    if (freelancer.email === "" || freelancer.postcode === "" || freelancer.address === "" || freelancer.lname === "" || freelancer.fname === "" || freelancer.password === "") {
      enqueueSnackbar('All fields are required.', { variant: 'error' });
      return 0;
    }
    if (!validateEmail(freelancer.email)) {
      enqueueSnackbar('Invalid email address.', { variant: 'error' });
      return 0;
    }
    if (!validatePostcode(freelancer.postcode)) {
      enqueueSnackbar('Invalid postcode.', { variant: 'error' });
      return 0;
    }

    if (!validatePassword(freelancer.password)) {
      enqueueSnackbar('Password must be at least 8 characters long and contain at least one letter and one number.', { variant: 'error' });
      return 0;
    }
    return 1;
  }

  return (
    <>
      <main>
        <section className='mt-5'>
          <div className='container'>
            <div className='row px-1 px-md-4 m-0'>
              <div className='col-12 col-lg-6 p-3 ps-0 py-lg-5 mt-3'>
                <h1 className='fs-8 fw-bold text-success-dark mt-5 fs-re-55 ms-2 ms-md-0'>Your hours.</h1>
                <h1 className='fs-8 fw-bold text-success fs-re-55 ms-2 ms-md-0'>Your rate.</h1>
                <h1 className='fs-8 fw-bold text-dark fs-re-55 ms-2 ms-md-0'>You Decide.</h1>
                <ul className='list-unstyled ps-2 ps-md-3'>
                  <li className='d-flex'>
                    <div className='me-3'>
                      <img src="assets/images/icons/check.png" className='w-20' alt='...' />
                    </div>
                    <p className='fsp-18 text-secondary'>Find the largest offer of flexible work. Choose <br /> the shift that suits you best.</p>
                  </li>
                  <li className='d-flex'>
                    <div className='me-3'>
                      <img src="assets/images/icons/check.png" className='w-20' alt='...' />
                    </div>
                    <p className='fsp-18 text-secondary'>Work where and when you like. Stay flexible. </p>
                  </li>
                  <li className='d-flex'>
                    <div className='me-3'>
                      <img src="assets/images/icons/check.png" className='w-20' alt='...' />
                    </div>
                    <p className='fsp-18 text-secondary'>Choose what you earn. Every hour.</p>
                  </li>
                </ul>
              </div>
              <div className='col-12 col-lg-6 pt-2 ps-lg-5 mb-3'>
                <div className='card shadow border-1 border-light rounded-3 ms-0 ms-lg-3'>
                  <div className="card-body pp-30">
                    <h5 className="card-title fw-500 pb-2 mt-1 fs-4">Looking for a gig? <Link to="/" className='text-primary-dark fw-700'>Sign up.</Link></h5>
                    <form className='form pb-3' onSubmit={saveFreelancer}>
                      <p className='text-secondary'>You are in control. With a Flexworq profile, you choose from 20,000+ jobs each week - easily and for free.</p>
                      <div className='form-group'>
                        <label className='fw-700 pb-1'>Email Address</label>
                        <input type="text" className="form-control py-3 bg-light-dark border-0" placeholder='Enter your email address' 
                          onChange={(e) => setfreelancer({ ...freelancer, email: e.target.value })}
                        />
                      </div>
                      <div className='form-group mt-3'>
                        <label className='fw-700 d-block'>Where do you live?</label>
                        <span className='text-secondary'>We keep you informed about cool gigs in your neighbourhood.</span>
                        <div className='row mt-2'>
                          <div className='col-12 col-md-6'>
                            <input type="text" className="form-control py-3 bg-light-dark border-0" placeholder='Postcode' 
                              onChange={(e) => setfreelancer({ ...freelancer, postcode: e.target.value })}
                            />
                          </div>
                          <div className='col-12 col-md-6'>
                            <input type="text" className="form-control py-3 bg-light-dark border-0 mt-3 mt-md-0" placeholder='Street no. + addition' 
                              onChange={(e) => setfreelancer({ ...freelancer, address: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='form-group row mt-3 mb-2'>
                        <div className='col-12 col-md-6 mb-2'>
                          <label className='fw-700 d-block'>First Name(on ID)</label>
                          <input type="text" className="form-control py-3 bg-light-dark border-0 mt-2" placeholder='First name(on ID)' 
                            onChange={(e) => setfreelancer({ ...freelancer, fname: e.target.value })}
                          />
                        </div>
                        <div className='col-12 col-md-6'>
                          <label className='fw-700 d-block'>Last Name(on ID)</label>
                          <input type="text" className="form-control py-3 bg-light-dark border-0 mt-2" placeholder='Last name(on ID)' 
                            onChange={(e) => setfreelancer({ ...freelancer, lname: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className='form-group mb-4'>
                        <label className='fw-700 pb-2'>Enter Password</label>
                        <input type="password" className="form-control py-3 bg-light-dark border-0" name="email" placeholder='Enter Password'
                          onChange={(e) => setfreelancer({ ...freelancer, password: e.target.value })}
                        />
                      </div>
                      <div className=''>
                        <button to="/freelancer/profile-complete" className='btn btn-primary w-100 py-2_5 rounded-1'>Sign Up</button>
                      </div>
                      <div className='d-block text-center mt-3'>
                        <p className='fw-500 p-0 m-0'>Don't have an account?</p>
                        <Link to="/freeflexer-signin" className='text-center m-0 p-0 fw-800 fsp-18'>Sign In</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='row m-0'>
            <div className='col-12 col-lg-11 bg-light-dark py-5 rounded-bottom-end-4'>
              <div className='container-fluid mt-5'>
                <div className='row'>
                  <div className='col-12 col-lg-6 py-5 px-4 px-lg-5'>
                    <div className='ms-lg-5'>
                      <h1 className='fs-re-55'><span className='text-primary-dark fw-700'>The freedom</span><br /> you deserve</h1>
                      <p className='fsp-18 pe-5 mt-4'>
                        Do you want to work where and when you like? And set your own hourly rate. Welcome to Flexworq. The platform where independent professionals get hired by great companies - and get paid accordingly. See the opportunities? it's up to you.
                      </p>
                    </div>
                  </div>
                  <div className='col-12 col-lg-6 d-flex justify-content-end px-8'>
                    <img src="assets/images/frontend/u7cmywwi.png" className='w-100' alt='...' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-1'></div>
          </div>
        </section>
        <section>
          <div className='container py-4'>
            <div className='row pb-5 m-0'>
              <div className='col-12 col-md-4 border-end pt-4'>
                <div className='d-flex justify-content-center'>
                  <img src="assets/images/icons/309042_group_users_people_icon.svg" className='w-25' alt='...' />
                </div>
                <h1 className='text-center fw-bold fsp-35 mt-3'>340.000+</h1>
                <p className='text-center fsp-16 text-secondary lh-1'>FreeFlexers using Flexworq</p>
              </div>
              <div className='col-12 col-md-4 border-end'>
                <div className='d-flex justify-content-center'>
                  <img src="assets/images/icons/bag.svg" className='w-25' alt='...' />
                </div>
                <h1 className='text-center fw-bold fsp-35 mt-3'>340.000+</h1>
                <p className='text-center fsp-16 text-secondary lh-1'>FreeFlexers using Flexworq</p>
              </div>
              <div className='col-12 col-md-4 fsp-35 pt-2'>
                <div className='d-flex justify-content-center'>
                  <img src="assets/images/icons/money.svg" className='w-25' alt='...' />
                </div>
                <h1 className='text-center fw-bold mt-3'>340.000+</h1>
                <p className='text-center fsp-16 text-secondary lh-1'>FreeFlexers using Flexworq</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Register