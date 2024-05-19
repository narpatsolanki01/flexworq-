import React from 'react'
import { Link } from 'react-router-dom'
function ShiftRow(props) {
    return (
        <Link to={props.shift.type === 'Canceled by client' ? '/freelancer/shift/id/cancel' : props.shift.type === 'Waiting for confirmation checkout' ? '/freelancer/complete-checkout' : '#'}>
            <div className='row'>
                <div className='col-3 py-2'>
                    <div className='bg-secondary w-100 h-100 rounded-2'></div>
                </div>
                <div className='col-9 pt-2 ps-0'>
                    <p className={`fsp-13 fw-600 mb-0 text-${props.shift.type === 'Canceled by client' ? 'danger' : props.shift.type === 'Waiting for confirmation checkout' ? 'primary' : 'success'}`}>{props.shift.type}</p>
                    <p className='fsp-13 fw-bold mb-0'>Marqetize</p>
                    <p>{props.shift.day}, {props.shift.date}.{props.shift.time.to} - {props.shift.time.from}</p>
                </div>
            </div>
        </Link>
    )
}

export default ShiftRow