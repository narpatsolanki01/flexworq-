import React from 'react'
import Icon from '../../Components/Icon'
import { Link } from 'react-router-dom'
function Substitute1() {
    return (
        <>
            <section className='mt-0'>
                <div className='container py-5'>
                    <h3 className='fsp-30 fw-bold'>Find A Suitable Substitute</h3>
                    <div className='row'>
                        <div className='col-12 col-md-8 py-4'>
                            <div className='border border-primary rounded px-5 pt-4 pb-3' style={{ background: '#EDF6F6' }}>
                                <h3 className='fsp-20'>Monday, 20 June, 06:000 - 10:00</h3>
                            </div>
                            <h5 className='mt-5 mb-3 fw-bold fsp-20'>Arrange A Substitute</h5>
                            <p className='fsp-13'>You're cancelling this shift while the cancellation period of 24 hours has expire. Therefore, you have to find a substitute via our system.</p>
                            <Link to="/freelancer/substitute1" className='btn btn-primary rounded-1 py-2 px-5'>Find A Substitute</Link>
                        </div>
                        <div className='col-12 col-md-4'>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item fsp-15 py-3 px-4 d-flex"><div><img src='/assets/images/icons/chatBox.png' className='w-30 me-3 mt-2' alt='...' /></div>What happens if I don't find a suitable substitute? <Icon position="position-absolute end-0">chevron-right</Icon></li>
                                <li class="list-group-item fsp-15 py-3 px-4 d-flex"><div><img src='/assets/images/icons/chatBox.png' className='w-30 me-3 mt-2' alt='...' /></div>Ask your question by chat message? <Icon position="position-absolute end-0">chevron-right</Icon></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Substitute1