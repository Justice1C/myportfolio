// import React from 'react'
import './Footer.css';
import call from '../../assets/call-medicine-svgrepo-com.svg'

const Footer = () => {  
  return (
    <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <h3 className="footer-logo">
                Chima
            </h3>
            <p>i am a frontend developer from, Nigeria willing to learn and ever eager to work.</p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
<img src={call} className='svg' alt='' />
<input type="email" placeholder='Enter your mail'/>
            </div>
            <div className="footer-subscribe">
              Subscribe
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">
             Justice Chima Obianuka.
          </p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  )
}

export default Footer