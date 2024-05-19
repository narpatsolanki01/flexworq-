import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../Components/Icon'
import WelcomeModel from '../../Components/WelcomeModel'

function Step3() {

    const [welcomeModelStep, setWelcomeModelStep] = useState(localStorage.getItem('welcomeModelStep') ? parseInt(localStorage.getItem('welcomeModelStep')) : 1);

    const naxtStep = () => {

        if (welcomeModelStep === 5) {
            localStorage.setItem('welcomeModelStep', 6);
        }

        setWelcomeModelStep(welcomeModelStep + 1)

    }

    return (
        <>
            <div className='w-100 mb-10' style={{ background: 'url(/assets/images/background/group-young-people-sitting-conference-together.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'auto' }}>
                <div className='container'>
                    <h2 className='text-white fw-700 py-4'>Let's make some money</h2>
                    <p className='text-white mb-2 ms-2'>Recommended next step for you</p>
                    <div className='bg-white rounded-4 shadow'>
                        <div className='row'>
                            <div className='col-12 col-md-4 border-end'>
                                <ul className='list-unstyled p-4 profile_complete_steps_chek'>
                                    <li className='complete'> <span></span>Activate your account</li>
                                    <li className='complete'> <span></span>Add company details</li>
                                    <li> <span></span>Assign a finance user</li>
                                    <li> <span></span>Create a job description</li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-8 p-5'>
                                <h5 className='fsp-18'>We need to know some more details about your company, then you're ready to plan shifts.</h5>
                                <p className='text-secondary mt-4'>Before you and your team can start planning shifts we need you to add some more details about your company. This includes a description and photo of your company to attract the attention of FreeFlexers, an address and invotce details,</p>
                                <Link to="/clients/project/id" className='btn btn-primary py-2_5 rounded fsp-13'>Add Company Details</Link>
                            </div>
                        </div>
                    </div>
                    <h4 className='mt-5 fsp-25 fw-bold mb-4'>How Flexworq Works</h4>
                    <div className='bg-white rounded-4 shadow'>
                        <div className='row'>
                            <div className='col-12 col-md-4 p-5'>
                                {/* steps */}
                                <h4 className='text-secondary fsp-13 mb-4'>FINDING FREEFLEXERS</h4>
                                <ul className='list-unstyled how_to_flexworq_work'>
                                    <li className='active' type="button" data-bs-toggle="collapse" data-bs-target="#li_one" aria-controls="collapse_ex">Quick Intro to Flexworq <Icon>arrow-right-short</Icon></li>
                                    <li type="button" data-bs-toggle="collapse" data-bs-target="#li_two" aria-controls="collapse_ex">How. plan a shift? <Icon>arrow-right-short</Icon></li>
                                    <li type="button" data-bs-toggle="collapse" data-bs-target="#li_three" aria-controls="collapse_ex">How to quickly accept FreeFlesers? <Icon>arrow-right-short</Icon></li>
                                </ul>
                                <h4 className='text-secondary fsp-13 mb-4 mt-5'>PAYING FREFFLEXERS</h4>
                                <ul className='list-unstyled how_to_flexworq_work'>
                                    <li type="button" data-bs-toggle="collapse" data-bs-target="#li_four" aria-controls="collapse_ex">What are the costs? <Icon>arrow-right-short</Icon></li>
                                    <li type="button" data-bs-toggle="collapse" data-bs-target="#li_five" aria-controls="collapse_ex">How. accept checkouts? <Icon>arrow-right-short</Icon></li>
                                    <li type="button" data-bs-toggle="collapse" data-bs-target="#li_six" aria-controls="collapse_ex">How to view my invoices? <Icon>arrow-right-short</Icon></li>
                                </ul>
                                <h4 className='text-secondary fsp-13 mb-4 mt-5'>FLEXIBLE AGREEMENT</h4>
                                <ul className='list-unstyled how_to_flexworq_work'>
                                    <li type="button" data-bs-toggle="collapse" data-bs-target="#li_seven" aria-controls="collapse_ex">What Is the cancellation policy? <Icon>arrow-right-short</Icon></li>
                                    <li type="button" data-bs-toggle="collapse" data-bs-target="#li_eight" aria-controls="collapse_ex">How do replacements work? <Icon>arrow-right-short</Icon></li>
                                    <li type="button" data-bs-toggle="collapse" data-bs-target="#li_nine" aria-controls="collapse_ex">Can I be held liable for damages? <Icon>arrow-right-short</Icon></li>
                                </ul>
                                {/* end steps */}
                            </div>
                            <div className='col-12 col-md-8 py-5 pe-5 ps-5 ps-lg-0'>
                                {/* steps body */}
                                <div class="collapse show" id="li_one">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                                <div class="collapse" id="li_two">
                                    123
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 text-center'>
                        <h1 className='fs-re-55'>Need <span className='text-primary fw-bold'>Help?</span></h1>
                        <p className='w-100 mt-4'>First check if you can find an answer to your question on our FAQ page. There you'll find answers on common questions from the Flexworq Team.</p>
                        <Link to="/">Go to our FAQ section</Link>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 col-md-4 mb-5'>
                            <div className='shadow rounded-2 p-4'>
                                <h4 className='fsp-20'>Send us a message</h4>
                                <p className='text-secondary fsp-13 mb-4'>The quickest way to reach us is through chat. 7 days a week. between 9 AM to 7 PM on weekdays. and 10 AM to 4 PM on weekends.</p>
                                <Link to="/">Open Chat</Link>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 mb-5'>
                            <div className='shadow rounded-2 p-4'>
                                <h4 className='fsp-20'>Send us an email</h4>
                                <p className='text-secondary fsp-13 mb-4'>The quickest way to reach us is through chat. 7 days a week. between 9 AM to 7 PM on weekdays. and 10 AM to 4 PM on weekends.</p>
                                <Link to="/">Open Email</Link>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 mb-5'>
                            <div className='shadow rounded-2 p-4'>
                                <h4 className='fsp-20'>Call our support team</h4>
                                <p className='text-secondary fsp-13 mb-4'>The quickest way to reach us is through chat. 7 days a week. between 9 AM to 7 PM on weekdays. and 10 AM to 4 PM on weekends.</p>
                                <Link to="/">Call our support team</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br />
            <WelcomeModel step={welcomeModelStep} next={naxtStep} back={() => setWelcomeModelStep(welcomeModelStep - 1)} />
        </>
    )
}

export default Step3