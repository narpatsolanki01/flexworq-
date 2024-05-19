import React from 'react'
import Icon from '../../Components/Icon'
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
// import { Link } from 'react-router-dom'

// const labels = {
//     0.5: 'Useless',
//     1: 'Useless+',
//     1.5: 'Poor',
//     2: 'Poor+',
//     2.5: 'Ok',
//     3: 'Ok+',
//     3.5: 'Good',
//     4: 'Good+',
//     4.5: 'Excellent',
//     5: 'Excellent+',
// };


// function getLabelText(value) {
//     return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }


function Step3() {

    // const [value, setValue] = React.useState(2);
    // const [hover, setHover] = React.useState(-1);

    return (
        <>
            <div className='w-100 mb-2 mb-md-5' style={{ background: 'url(/assets/images/background/group-young-people-sitting-conference-together.svg) 0% 0% / auto no-repeat' }}>
                <div className='container p-5'>
                    <span className='fsp-30 fw-bold text-white'>Checkout Success</span>
                </div>
            </div>
            <div className='container my-5 pb-8 px-4'>
                <div className='row'>
                    <div className='col-12 col-md-9'>
                        <h4 className='fsp-22'>You have successfully checked out</h4>
                    </div>
                    <div className='col-12 col-md-3 mb-5'>
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

export default Step3