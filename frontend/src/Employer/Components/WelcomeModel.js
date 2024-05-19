import React from 'react'

function WelcomeModel(props) {
    return (
        <>
            <div className={`modal fade ${props.step < 6 ? 'show d-block' : ''}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{ background: 'rgba(0,0,0,0.6)' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div>
                                <img src={`/assets/images/employer/${props.step}.png`} className='w-100 rounded-top' alt='...' />
                                <div className='text-center my-3 p-3 overflow-auto smallScrollBar' style={{ height: '105px' }}>
                                    {
                                        props.step === 1 ?
                                            (
                                                <>
                                                    <h4>Welcome to Flexworq, Username</h4>
                                                    <p>Congratulations, you now have access to Temper's digital notice board. After completing your account you'll be able to take care of your own shifts and select the professionals you need.</p>
                                                </>
                                            ) : props.step === 2 ? (
                                                <>
                                                    <h4>FreeFlexers work with a Contract of Assignment</h4>
                                                    <p>FreeFlexers are self-employed and work with a Contract of Assignment, approved by the Dutch Tax and Customs Administration. This means that there is no contract of employment</p>
                                                </>
                                            ) : props.step === 3 ? (
                                                <>
                                                    <h4>FreeFlexers may cancel their shift, but you set the rules</h4>
                                                    <p>Both you and the FreeFlexer can cancel a shift for free before the cancellation period expires (you can manage this in your shift Settings). If either party violates the cancellation policy, there will be consequences.</p>
                                                </>
                                            ) : props.step === 4 ? (
                                                <>
                                                    <h4>FreeFlexers have the right to replace</h4>
                                                    <p>Because FreeFlexers are self-employed, they have the right to replace themselves by an equally qualified professional. You will receive a notification when this happens, prior to the shit.</p>
                                                </>
                                            ) : props.step === 5 ? (
                                                <>
                                                    <h4>Your company can be held liable for damages caused by FreeFlexers</h4>
                                                    <p>When it comes to liability. FreeFlexers are often eauated with</p>
                                                </>
                                            ) : (
                                                <>
                                                
                                                </>
                                            )
                                    }
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center my-3">
                                {
                                    props.step > 1 ? (
                                        <button type="button" onClick={props.back} className="btn btn-secondary mx-1 rounded-1 " data-bs-dismiss="modal">Back</button>
                                    ) : (
                                        ""
                                    )
                                }
                                {
                                    props.step === 5 ? (
                                        <button type="button" onClick={props.next} className="btn btn-primary mx-1 rounded-1 ">Got it</button>
                                    ):(
                                        <button type="button" onClick={props.next} className="btn btn-primary mx-1 rounded-1 ">Next</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomeModel