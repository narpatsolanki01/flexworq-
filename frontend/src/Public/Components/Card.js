import React from 'react'
function Card(props) {
    return (
        <>
            <div className='item pb-5 px-3'>
                <div className={props.shadow ? 'card border-0 shadow' : 'card border-0'}>
                    <img src={"/assets/" + props.image} className="card-img-top" alt='...' style={{ aspectRatio: '3/2', objectFit: 'cover' }} />
                    <div className={props.title ? '' : 'card-body'}>
                        {
                            props.heading ? (
                                <div className="card-title fw-600 text-primary fsp-18 ffp px-1 text-center text-md-start    ">{props.heading}<span className="float-end"><i className="bi bi-chevron-right d-none d-md-inline"></i></span></div>
                            ) : ('')
                        }
                        {
                            props.list ? (
                                <ul className="list-unstyled">
                                    {
                                        props.list.map((val, index) => {
                                            return (
                                                <li className="lh-1 fw-500 my-1 ffp text-center text-md-start" key={index}><i className="bi bi-check me-2  fw-bold fs-5 d-none d-md-inline"></i><span className='fsp-13' style={{ color: '#000' }}>{val}</span></li>
                                            )
                                        })
                                    }
                                </ul>
                            ) : ('')
                        }
                        {
                            props.title ? (
                                <h6 className='mt-0 text-center fsp-15 fw-900'>{props.title}</h6>
                            ) : ('')
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card