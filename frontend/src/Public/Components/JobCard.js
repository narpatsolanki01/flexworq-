import React from 'react'
import { Link } from 'react-router-dom'

function JobCard({cardDetails}) {
  return (
      <>
        <div className='card border-0'>
          <Link to={`/freelancer/explore/${cardDetails._id}`}>
              <div className='card-bg rounded-4' style={{backgroundImage:`url(/assets/images/jobs/Group_389.png)`,width:'100%',height:'200px'}} ></div>
              <Link to="job-details" className='mt-2 fsp-15 text-primary-dark'>{ cardDetails.project }</Link>
              <h6 className='mt-2 fw-600 position-relative text-dark'>{ cardDetails.name }<span className='position-absolute end-0'>€45</span></h6>
              <p className='lh-1 fsp-14 text-secondary'>00</p>
           </Link>
        </div>
      </>
  )
}

export default JobCard