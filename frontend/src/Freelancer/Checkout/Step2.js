import React from 'react'
import Icon from '../../Components/Icon'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import {Link} from 'react-router-dom'

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};


function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


function Step2() {

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <>
            <div className='w-100 mb-2 mb-md-5' style={{ background: 'url(/assets/images/background/group-young-people-sitting-conference-together.svg) 0% 0% / auto no-repeat' }}>
                <div className='container p-5'>
                    <span className='fsp-30 fw-bold text-white'>Checkout</span>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-9'>
                        <p className='lh-0 mb-0'>Let us know what you think of this client. This way you can help others find better jobs and encourage good employership.</p>
                        <div className='my-4'>
                            <ul className='list-inline steper'>
                                <li className='list-inline-item rounded-circle bg-white border me-5'>1</li>
                                <li className='list-inline-item rounded-circle bg-success text-white ms-4'>2</li>
                            </ul>
                        </div>

                        <p className='text-success-dark fsp-20 fw-600 mt-3 mb-0'>Overall Rating</p>
                        <span>Rate you experience with Marqetize during this shift</span>

                        <Box className='my-2' sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                            <Rating name="hover-feedback" value={value} precision={0.5} getLabelText={getLabelText}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                size="large"
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {value !== null && (<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>)}
                        </Box>

                        <div class="form-group">
                            <label class="fsp-14 fw-bold">Do you have something you'd like to share with Marqtize?</label>
                            <textarea className='form-control mt-2' rows={5} placeholder="This message is sent directly to Marqetize"></textarea>
                        </div>
                        <div class="form-group mt-3">
                            <label class="fsp-14 fw-bold">Is there anything you'd like to share with us?</label>
                            <textarea className='form-control mt-2' rows={5} placeholder="For example : Are you concern about workplace hygiene?"></textarea>
                        </div>
                        <Link to="/freelancer/checkout-3" className='btn btn-primary px-8 py-2_5 my-4 rounded-1'>Finish</Link>
                    </div>
                    <div className='col-12 col-md-3 mb-5 px-4'>
                        <div className='row rounded border py-3'>
                            <div className='col-2 justify-content-center align-items-center d-flex'>
                                <img src='/assets/images/icons/chatBox.png' className='w-100' alt='' />
                            </div>
                            <div className='col-8'>
                                <p className='fsp-15 mb-0'>Ask your Question by</p>
                                <span className='fsp-16 fw-bold'>Chat Message</span>
                            </div>
                            <div className='col-1 justify-content-center align-items-center d-flex'>
                                <Icon>chevron-right</Icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step2