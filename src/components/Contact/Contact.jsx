// import React from 'react'
import './Contact.css'
import mail from '../../assets/mail-pencil-svgrepo-com.svg'
import call from '../../assets/call-medicine-svgrepo-com.svg'
import location from '../../assets/location-pin-svgrepo-com.svg'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>i am currently available to take new projects, so feel free to send me a message about anything you want me to work on. You can contact anytime.  </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>justicec566@gmail.com</p>
            </div>
            <div className="contact-detail">
      <img src={call} alt="" />
              <p>+2348139204859</p>
            </div>
            <div className="contact-detail">
      <img src={location} alt="" />
              <p>Jos, Plateau State Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact