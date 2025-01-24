// import React from 'react'
import './Contact.css'
import mail from '../../assets/mail-pencil-svgrepo-com.svg'
import call from '../../assets/call-medicine-svgrepo-com.svg'
import location from '../../assets/location-pin-svgrepo-com.svg'


const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>i am currently available to take new projects, so feel free to send me a message about anything you want me to work on. You can contact anytime.  </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} className='svg' alt="" />
              <p>justicec566@gmail.com</p>
            </div>
            <div className="contact-detail">
      <img src={call} className='svg' alt="" />
              <p>+2348139204859</p>
            </div>
            <div className="contact-detail">
      <img src={location} className='svg' alt="" />
              <p>Jos, Plateau State Nigeria</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact