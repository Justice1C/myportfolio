// import React from 'react'
import './Hero.css'
import passport from '../../assets/passport.jpg.jpeg'


const Hero = () => {
  return (
    <div className='hero'>
<img src={passport} alt="" />
<h1><span>Im Justice Chima,</span> Junior Frontend Developer based in Nigeria.</h1>
<p>I am a frontend developer from Jos Plateau State, Nigeria with 1year of expirience</p>
<div className="hero-action">
    <div className="hero-connect">Connect with me</div>
    <div className="hero-resume">My resume</div>
</div>
    </div>
  )
}

export default Hero