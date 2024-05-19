import React from 'react'

function Ourstory() {
    return (
        <>
            <section className="mt-2 mt-lg-4 mt-xl-5">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-7 pt-6 px-3 px-lg-0'>
                            <div className="py-lg-5">
                                <h1 className="fw-400 fs-re-55">Lorem ipsum <span className="fw-bold text-primary-dark">dolor set amet</span></h1>
                                <p className="fsp-18 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus nisi eu risus consectetur maximus. Maecenas consectetur nisl a arcu aliquam, convallis varius augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus nisi eu risus Consectetur.</p>
                                <button className="btn btn-primary px-5 py-3 ffp rounded-1 mt-2 fsp-13">Get Started</button>
                            </div>
                        </div>
                        <div className='col-12 col-lg-5 mt-4 ps-lg-5 ps-lg-3 p-0 '>
                            <div className='w-100 h-100 rounded-4' style={{ background: 'url(assets/images/frontend/vpd5qvfm@2x.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sectionBg mt-6' style={{ backgroundImage: "url('assets/images/frontend/background/Group677@2x.png')" }} >
                <div className='d-flex px-4'>
                    <div className='d-block m-auto pt-5'>
                        <h1 className='py-3 fs-7 text-light fw-300 text-center fs-re-55'>Making the <span className='fw-bold text-light'>world better</span></h1>
                        <div className='d-flex py-2 px-5 pb-5'>
                            <p className='text-center text-white fw-300 fsp-18'>Working? You could be happier and fitter. With more variety. And more appreciation. Our platform therefore gives people and companies more resilience and energy. So everyone can respond better and faster to the changing job market. Our technology helps by making the job market fairer, more accessible and more efficient.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-5 mt-6'>
                <div className='container d-flex'>
                    <div className='row p-0 m-auto'>
                        <h1 className='text-center fs-re-55 mb-4 mb-5'>Lorem ipsum <span className='text-success-dark fw-bold'>title here</span></h1>
                        <div className='col-12 col-md-4 px-4'>
                            <h3 className='fw-bold fsp-25'>A fair chance for all</h3>
                            <p className='mt-3 fsp-15'>As freelancers are not considered permanent staff, employee contributions and requirements are not part of the deal.</p>
                        </div>
                        <div className='col-12 col-md-4 px-4'>
                            <h3 className='fw-bold fsp-25'>Plenty of access to the labour market</h3>
                            <p className='mt-3 fsp-15'>Post gig for only €13 per hour (minimum), this Is the amount that the freelancer will receive for thew work. We charge €3.50 per hour worked. No cure, no pay.</p>
                        </div>
                        <div className='col-12 col-md-4 px-4'>
                            <h3 className='fw-bold fsp-25'>Leave the paperwork to us</h3>
                            <p className='mt-3 fsp-15'>You'll receive a collective Invoice on a weekly basis. The Invoice shows the number of worked hours and the related rates, the total freelancers fees and costs towards flexors. We handle all payments made to the freelancers.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ourstory