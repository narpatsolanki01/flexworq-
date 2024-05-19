import  React,{useEffect, useState} from 'react'
import JobCard from '../Components/JobCard'
import Icon from '../../Components/Icon'
import { Link } from 'react-router-dom'
import JobFilter from '../Components/JobFilter'

function Index() {
    const [alljobs,setalljobs]=useState([]);
    // const cards = [
    //     { type: 'Zelfstanding werkend kok', name: 'Dennenlucht Breda', image: 'Group_389.png', prize: '11.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Intratuin Zoetertmeer', image: 'Group_390.png', prize: '14.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'San Blas', image: 'Group_391@2x.png', prize: '26.50', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Beachclub Texel', image: 'Group_392@2x.png', prize: '20.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Promodukties', image: 'Group_393@2x.png', prize: '15.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Buitenplaats kameryck', image: 'Group_394@2x.png', prize: '14.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Zelfstanding werkend kok', image: 'Group_395@2x.png', prize: '11.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Intratuin Zoetertmeer', image: 'Group_396@2x.png', prize: '26.50', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'San Blas', image: 'Group_397@2x.png', prize: '20.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Beachclub Texel', image: 'Group_398@2x.png', prize: '15.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Promodukties', image: 'Group_399@2x.png', prize: '11.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Zelfstanding werkend kok', image: 'Group_400@2x.png', prize: '14.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Intratuin Zoetertmeer', image: 'Group_391@2x.png', prize: '26.50', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'San Blas', image: 'Group_392@2x.png', prize: '20.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Beachclub Texel', image: 'Group_393@2x.png', prize: '15.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Promodukties', image: 'Group_394@2x.png', prize: '14.00', time: { from: 11, to: 21 } },
    //     { type: 'Catering', name: 'Intratuin Zoetertmeer', image: 'Group_395@2x.png', prize: '11.00', time: { from: 11, to: 21 } },
    // ];

    //get all jobs
    useEffect(()=>{
        fetch('/api/freelacer/jobs',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(response=>response.json()).then(data=>setalljobs(data.data))
        .catch(error=>console.log(error))
    
    },[]);
    return (
        <>
            <main>
                <div className='container mt-0 mt-lg-4 pb-5 px-0'>
                    <div className='position-sticky bg-white w-100 py-3 px-4 border-bottom border-top d-block d-lg-none' style={{ top: '0px', zIndex: '997' }}>
                        <div className='row mt-2'>
                            <div className='col-6'>
                                Explore
                            </div>
                            <div className='col-6 justify-content-end d-flex pe-3'>
                                <Link to="/" data-bs-toggle="modal" data-bs-target="#exampleModal"> Filters <Icon position="ms-2">filter</Icon></Link>
                            </div>
                        </div>
                        <div className='mt-2 d-flex overflow-auto'>
                            <button className='text-center btn btn-primary py-0 mx-1'><span className='d-block fsp-10'>WED</span><span className='d-block fsp-18'>31</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>THU</span><span className='d-block fsp-18'>01</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>FRI</span><span className='d-block fsp-18'>02</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>SAT</span><span className='d-block fsp-18'>03</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>SUN</span><span className='d-block fsp-18'>04</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>MON</span><span className='d-block fsp-18'>05</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>TUE</span><span className='d-block fsp-18'>06</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>WED</span><span className='d-block fsp-18'>07</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>THU</span><span className='d-block fsp-18'>08</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>FRI</span><span className='d-block fsp-18'>09</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>SAT</span><span className='d-block fsp-18'>10</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>SUN</span><span className='d-block fsp-18'>11</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>MON</span><span className='d-block fsp-18'>12</span></button>
                            <button className='text-center btn btn-light py-0 mx-1'><span className='d-block fsp-10'>TUE</span><span className='d-block fsp-18'>13</span></button>

                        </div>
                    </div>
                    <div className='row px-0 m-0'>
                        <div className='col-12 col-lg-3 overflow-scroll scrollbar-hidden px-4 px-2 d-none d-lg-block' style={{ height: '100vh' }}>
                            <JobFilter />
                        </div>
                        <div className='col-12 col-lg-9 px-4 pt-1'>
                            <h1 className='fs-5 d-none d-md-block'>Friday 28, September</h1>
                            <div className='row overflow-scroll scrollbar-hidden' style={{ height: '100vh' }}>
                                {
                                    alljobs.map((card, index) => (
                                        <div className='col-12 col-md-4 p-3' key={index}> <JobCard cardDetails={card} /> </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* filter model */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Filters</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <JobFilter />
                            </div>
                            <div class="modal-footer justify-content-center">
                                <button type="button" class="btn btn-outline-light text-primary fw-bold" data-bs-dismiss="modal">Clear Selection</button>
                                <button type="button" class="btn btn-primary px-5">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export default Index