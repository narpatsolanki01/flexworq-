import React from 'react'

function RegistrationsRow(props) {
    return (
        <div className='row'>
            <div className='col-3 py-2'>
                <div className='w-100 h-100 rounded-2' style={{ background: `url(/assets/images/jobs/${props.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
            <div className='col-9 pt-2 ps-0'>
                <p className={`fsp-13 fw-600 mb-0 text-primary`}>{props.type} - {props.payment}</p>
                <p className='fsp-13 fw-bold mb-0'>{props.company}</p>
                <p>{props.to} - {props.from}</p>
            </div>
        </div>
    )
}

export default RegistrationsRow