import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
function Index({ type }) {

  const navigate = useNavigate();


  return (
    <>
        <div className='justify-content-center align-items-center d-flex'>
           <img src="/assets/images/errors/404.svg" className='W-100' style={{height:'500px'}}alt="..." />
        </div>
        <hr />
        <div className='d-flex justify-content-center align-items-ceter py-3'>
           <button onClick={() => navigate(-1)} className='btn btn-primary mx-3'><i className="bi bi-arrow-left"></i> </button>
           <Link to="/" className='btn btn-outline-primary'>Back To Home Page</Link>
        </div>
    </>
  )
}

export default Index