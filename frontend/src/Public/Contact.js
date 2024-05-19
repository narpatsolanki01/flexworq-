import React from 'react'
import {Link} from 'react-router-dom';
function Contact() {
  return (
    <section className='mt-0 p-3 p-lg-5' style={{ background: '#F3F5F7' }}>
      <div className='container bg-white p-3 p-lg-5'>
        <h2 className='fw-n mb-4 fsp-33'>How to contact Flexworq?</h2>
        <div className='d-flex mb-3'>
          <img src='https://picsum.photos/200/200' className='wp-50 rounded-circle' alt='...' />
          <div className='d-block ps-2 mt-2'>
            <p className='lh-1 m-0 p-0 fsp-13 text-secondary'>Written by Jip Rezelman | Temper</p>
            <span className='fsp-13 text-secondary'>Updated over a week ago</span>
          </div>
        </div>
        <span className='fsp-17' style={{ color: '#565867' }}>Do you have a question or want to get more information?</span>
        <ul className='mt-3' style={{ color: '#565867' }}>
          <li className='mt-2'>First check if you can find the answer to your question in our <Link className='text-dark' to="/">FAQ</Link>. Here you'll find answers on basically all your questions.</li>
          <li className='mt-2'>
            Can't find an answer to your question? Send us a message in the chat. Our support team is here 7 days a week to answer your question. We're rather busy, so a response could take a bit.
            <br /> <br />
            Open a conversation by clicking on the <span className='fw-bold'>green chat button</span> at the bottom right. You can do this via the app by clicking 'Ask a question' on your profile.
            <br /> <br />
            You can also send an email to <span className='fw-normal text-dark'>support@temper.works</span>
            <br /> <br />
          </li>
          <li className='mt-2'>
            There is no service desk at our office. So please ask your questions via chat or email. In case you're dealing with an urgent situation, check out this article.
          </li>
        </ul>
        <span className='fsp-17' style={{ color: '#565867' }}>Temper is available on chat and email from 9:00 AM to 7:00 PM on weekdays and from 10:00 AM to 4:00 PM on weekends to help you with your questions.</span>
      </div>
      <div className='container bg-white p-3 p-lg-5'>
        <div style={{ background: '#F0F3F5' }} className="rounded-3 p-2 py-4 text-center">
          <span style={{color:'#777'}}>Did this answer your question?</span>
          <div className='position-relative'>
            <div className='position-absolute start-50' style={{top:'30%',transform:'translate(-50%)'}}>
              <span className='fs-2 mx-1'>😞</span>
              <span className='fs-2 mx-1'>😐</span>
              <span className='fs-2 mx-1'>😃</span>
            </div>
            <br/><br/>
            <br/><br/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact