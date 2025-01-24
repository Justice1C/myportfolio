// import React from 'react'
import './Hero.css'
import passport from '../../assets/passport.jpg.jpeg'
import  AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
<img src={passport} alt="" />
<h1><span>Im Justice Chima,</span> Junior Frontend Developer based in Nigeria.</h1>
<p>I am a frontend developer from Jos Plateau State, Nigeria with 1year of expirience</p>
<div className="hero-action">
    <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    <div className="hero-resume">My resume</div>
</div>
    </div>
  )
}

export default Hero