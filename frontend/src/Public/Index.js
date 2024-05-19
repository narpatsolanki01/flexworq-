import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import Item from './Components/Card';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Icon from '../Components/Icon';
import Center from '../Components/Positions/Center';
function Index() {

  /* owl-carousel options for Industries */
  const options = {
    loop: true,
    margin: -10,
    center: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: { 0: { items: 1 }, 350: { items: 1.7 }, 500: { items: 2.5 }, 1000: { items: 4 } }
  };
  /* owl-carousel options for companies */
  const companieoptions = {
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: { 0: { items: 2 }, 300: { items: 3 }, 600: { items: 4 }, 700: { items: 4 }, 1000: { items: 7 } }
  };

  const [showMoreEarning, setShowMoreEarning] = useState(false);

  return (
    <>
      <section className='mt-2 mt-lg-3 mt-xl-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-7 pt-6 px-3 px-lg-0'>
              <div className="py-lg-5">
                <h1 className="fw-500 fs-re-55 mt-0 mt-lg-4"><span className="fw-bold text-primary-dark">This is the title </span>of the homepage</h1>
                <p className="fsp-18 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque mi. Phasellus tincidunt accumsan tempus. Pellentesque dapibus condimentum lacus ut finibus. Quisque arcu elit, vehicula vel sapien ac, accumsan dictum massa. Maecenas enim urna, vulputate et egestas ut.</p>
                <button className="btn btn-primary px-5 py-2_5 ffp fsp-13 fw-500 rounded-1">Sign Up</button>
                <p className="text-primary-light mt-3 fw-600 fsp-13">For companies: find the best talent<Icon position="ms-2">chevron-right</Icon></p>
              </div>
            </div>
            <div className='col-12 col-lg-5 mt-5 pt-3 ps-lg-5 ps-lg-3 p-0 '>
              <div className='w-100 h-100 rounded-4' style={{ background: 'url(assets/images/frontend/beautiful-family-standing-cash-counter.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h1 className='text-center fs-re-55 mb-5 fw-300'>Work in different <span className="text-primary-dark fw-bold">Industries</span></h1>
          <OwlCarousel className='owl-theme' {...options}>
            <Item image="images/frontend/slider/uxrzaect@2x.png" heading="Hospitality" list={['Serving', 'Catering', 'Housekeeper']} shadow={true} />
            <Item image="images/frontend/slider/yddlwgj1@2x.jpg" heading="Retail" list={['Sales Associates', 'Field Marketing', 'Telemarketing']} shadow={true} />
            <Item image="images/frontend/slider/uxrzaect@2x.png" heading="Logistics" list={['Serving', 'Catering', 'Housekeeper']} shadow={true} />
            <Item image="images/frontend/slider/uxrzaect@2x.png" heading="Construction" list={['Warehouse Workers', 'Movers', 'Delivery']} shadow={true} />
            <Item image="images/frontend/slider/uxrzaect@2x.png" heading="Hospitality" list={['Construction Worker', ' Wood Worker', 'Painter']} shadow={true} />
            <Item image="images/frontend/slider/uxrzaect@2x.png" heading="Hospitality" list={['Serving', 'Catering', 'Housekeeper']} shadow={true} />
          </OwlCarousel>
        </div>
        <Center position="mt-5">
          <div className="d-block">
            <button className="px-6 px-md-8 py-2_5 btn btn-primary d-block rounded-1 mb-2 ffp fsp-13">Find your gig</button>
            <Link to="/" className="ps-lg-3 fw-700 fsp-13 ffp">For companies: find the best talent<Icon position="ms-1">chevron-right</Icon></Link>
          </div>
        </Center>
      </section>
      <section className='mt-0 sectionBg' style={{ backgroundImage: 'url(assets/images/frontend/Mask_Group.png)' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-5 py-5'>
              <div className="pt-0 pt-lg-5 px-2 mt-5 ms-n4">
                <h1 className='fw-300 fs-re-55'>Looking for the gig <span className="text-primary-dark fw-bold">Sign Up</span></h1>
                <p className='fsp-18 pe-lg-5 my-4'>
                  Do you want to work where and when it suits you? Determine your own hourly rate? Welcome to flexworq. The platform where independent professionals are hired by top companies and getting paid accordingly and do you see the possibilities? You are in control.
                </p>
                <button className="btn btn-primary fsp-13 px-8 py-2_5 rounded-1 ffp">Sign Up</button>
              </div>
            </div>
            <div className='col-12 col-lg-7 pe-4 pe-lg-4 d-flex justify-content-center align-items-center'>
              <img src="assets/images/frontend/Group.png" className="w-100 mt-3 mt-lg-5 ms-2 ms-lg-4" alt='...' />
            </div>
          </div>
        </div>
      </section>
      <section className='mt-5 pt-4' style={{ background: '#F1F4F6' }}>
        <div className='container'>
          <h1 className='text-center mt-3 pt-3 fs-re-55 fw-300'>Start <span className="text-primary-dark fw-bold">Very Simple</span></h1>
          <div className='row'>
            <div className='col-12 col-md-4 py-3 px-4 px-lg-2 px-xl-5'>
              <div className='pt-8' style={{ backgroundImage: 'url(assets/images/frontend/background/1@2x.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height: '190px' }}>
                <h4 className="fw-bold fsp-25">Create Your Profile</h4>
                <p className='fsp-15'>Let companies know that you are in the market. Show what you have to offer.</p>
              </div>
            </div>
            <div className='col-12 col-md-4 px-4 px-lg-2 px-xl-5'>
              <div className='pt-8' style={{ backgroundImage: 'url(assets/images/frontend/background/2@2x.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height: '190px' }}>
                <h4 className="fw-bold fsp-25">Claim a shift</h4>
                <p className='fsp-15'>Search in the largest offer of jobs. Weekly some 20,000. Choose the one that suits you best.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 px-4 px-lg-2 px-xl-5">
              <div className='pt-8' style={{ backgroundImage: 'url(assets/images/frontend/background/3@2x.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height: '190px' }}>
                <h4 className="fw-bold fsp-25">Ready? Set? Go!</h4>
                <p className='fsp-15'>Selected by the company? Well done! Good luck with the job.</p>
              </div>
            </div>
          </div>
          <Center position="pb-5">
            <div className="d-block">
              <button className="btn btn-primary px-9 mt-3 py-2_5 rounded-1 ffp mb-3 fsp-13">Sign Up</button><br />
              <Link to="/" className="ps-1 fw-700 fsp-13 ffp">For companies: find the best candidate <i className="bi bi-chevron-right"></i></Link>
            </div>
          </Center>
        </div>
      </section>
      <section className='mt-0 shadow py-5'>
        <div className='container'>
          <h1 className="text-center mb-5 fw-300 fs-re-55">Explore Your<span className="text-success-dark-1 fw-bold"> Earning</span></h1>
          <div className='row'>
            <div className='col-12 col-md-6 pe-lg-5'>
              <ul className="list-unstyled">
                <li className="border-top border-bottom p-3 fsp-20 fw-900"><img src='assets/images/icons/889376_barista_coffee_doppio_espresso_icon.svg' className='me-3' alt='Barista' />Barista<span className="float-end fw-400">€ 20.25</span></li>
                <li className="border-bottom p-3 fw-900 fsp-20"><img src='assets/images/icons/cook.svg' className='me-3' alt='cook' />Cook<span className="float-end fw-400">€ 28.10</span></li>
                <li className="border-bottom p-3 fw-900 fsp-20"><img src='assets/images/icons/cloakroom.svg' className='me-4' alt='Cloakroom' />Cloakroom<span className="float-end fw-400">€ 18.00</span></li>
                <li className="border-bottom p-3 fw-900 fsp-20"><img src='assets/images/icons/serving.svg' className='me-3' alt='Serving' />Serving<span className="float-end fw-400">€ 21.00</span></li>
                <li className="border-bottom p-3 fw-900 fsp-20"><img src='assets/images/icons/309042_group_users_people_icon.svg' className='me-3' alt='Sitescrew' />Sitecrew<span className="float-end fw-400">€ 18.50</span></li>
                <div id="collapseOne" className="accordion-collapse collapse m-0 p-0" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <li className="border-top border-bottom p-3 fw-bold fsp-20"><img src='assets/images/icons/housekeeper.svg' className='me-3' alt='Housekeeper' />Housekeeper <span className="float-end fw-400">€ 19.50</span></li>
                  <li className="border-bottom p-3 fw-bold fsp-20"><img src='assets/images/icons/bartending.svg' className='me-3' alt='Bartending' />Bartending <span className="float-end fw-400">€ 20.00</span></li>
                  <li className="border-bottom p-3 fw-bold fsp-20"><img src='assets/images/icons/salesassociate.svg' className='me-3' alt='Sales-Associate' />Sales Associate <span className="float-end fw-400">€ 15.50</span></li>
                  <li className="border-bottom p-3 fw-bold fsp-20"><img src='assets/images/icons/cleaning.svg' className='me-3' alt='Cleaning' />Cleaning <span className="float-end fw-400">€ 18.00</span></li>
                  <li className="border-bottom p-3 fw-bold fsp-20"><img src='assets/images/icons/catering.svg' className='me-3' alt='Catering' />Catering <span className="float-end fw-400">€ 20.50</span></li>
                </div>
                <li className="border-bottom p-3 fw-900 fsp-20 d-block d-md-none">
                  <button onClick={() => showMoreEarning ? setShowMoreEarning(false) : setShowMoreEarning(true)} className="accordion-button collapsed fsp-15 fw-500 position-relative" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    {showMoreEarning ? 'Show Less' : 'More'} <Icon position="position-absolute end-0">{showMoreEarning ? 'chevron-up' : 'chevron-down'}</Icon>
                  </button>
                </li>
              </ul>
            </div>
            <div className='col-12 col-md-6 ps-lg-5 d-none d-md-block'>
              <ul className="list-unstyled">
                <li className="border-top border-bottom p-3 fw-bold fsp-20"><img src='assets/images/icons/housekeeper.svg' className='me-3' alt='Housekeeper' />Housekeeper <span className="float-end fw-400">€ 19.50</span></li>
                <li className="border-bottom p-3 fw-bold fsp-20"><img src='assets/images/icons/bartending.svg' className='me-3' alt='Bartending' />Bartending <span className="float-end fw-400">€ 20.00</span></li>
                <li className="border-bottom p-3 fw-bold fsp-20"><img src='assets/images/icons/salesassociate.svg' className='me-3' alt='Sales-Associate' />Sales Associate <span className="float-end fw-400">€ 15.50</span></li>
                <li className="border-bottom p-3 fw-bold fsp-20"><img src='assets/images/icons/cleaning.svg' className='me-3' alt='Cleaning' />Cleaning <span className="float-end fw-400">€ 18.00</span></li>
                <li className="border-bottom p-3 fw-bold fsp-20"><img src='assets/images/icons/catering.svg' className='me-3' alt='Catering' />Catering <span className="float-end fw-400">€ 20.50</span></li>
              </ul>
            </div>
          </div>
          <Center position="mt-4"><button className="btn btn-primary py-2_5 px-5 fsp-13 rounded-1 ffp">Sign Up to Flexworq</button></Center>
        </div>
      </section>
      <section>
        <div className='container'>
          <h1 className="text-center mb-4 fs-re-55 fw-300">These companies are <span className="text-success-dark fw-bold">looking for talent</span></h1>
          <OwlCarousel className='owl-theme' {...companieoptions}>
            <Item image="images/companies/goibibo.png" title="Goibibo" shadow={false} />
            <Item image="images/companies/intel.png" title="Intel Corp." shadow={false} />
            <Item image="images/companies/makemytrip.png" title="Make My Trip" shadow={false} />
            <Item image="images/companies/br.png" title="Baskin Robins" shadow={false} />
            <Item image="images/companies/food_court.png" title="Food Court" shadow={false} />
            <Item image="images/companies/pizaa_hut.png" title="Pizza Hut" shadow={false} />
            <Item image="images/companies/goibibo.png" title="Goibibo" shadow={false} />
            <Item image="images/companies/intel.png" title="Intel Corp." shadow={false} />
          </OwlCarousel>
          <Center position="mt-4">
            <div className="d-block">
              <button className="px-6 btn btn-primary fsp-13 d-block rounded-1 mb-2 py-2_5">More oprtunities</button>
              <Link to="/" className="text-primary fsp-13 text-decoration-none ms-4 mt-5 fw-bold">For companies: find talent <i className="bi bi-chevron-right ms-2"></i></Link>
            </div>
          </Center>
        </div>
      </section>
      <section className='py-5 pb-5' style={{ background: '#F6F8F9' }}>
        <div className='container'>
          <h1 className="mt-5 fs-re-55 text-center fw-300">Ready for your next GIG? <span className="text-primary-dark fw-bold">Sign Up Now</span></h1>
          <div className="d-flex">
            <p className="m-auto px-3 px-lg-5 text-center fw-bold my-5 lh-lg text-black">Earn an average early rate of €17 <br />Decide where and when you will work<br /> Pick up your favorite industries</p>
          </div>
          <Center><button className="px-7 btn btn-primary rounded-1 py-2_5">Sign Up</button></Center>
        </div>
      </section>
    </>
  )
}
export default Index