// import React from 'react'
import './About.css'
import myshirt from '../../assets/myshirt.jpg.jpeg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
        <h1>About me</h1>
        </div>
<div className="about-sections">
    <div className="about-left">
        <img src={myshirt} alt="" />
    </div>
    <div className="about-right">
      <div className="about-para">
        <p>I am an experienced Frontend Developer with over one year of professional expertise in the field. Throughout my career, i have had previlege of collaborating with prestigious organisations, contributing to their success and growth. </p>
        <p>My passion for frontend developement is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project.</p>
      </div>
      <div className="about-skills">
<div className="about-skill">
  <p>HTML</p><hr style={{width: "80%"}}/>
</div>
<div className="about-skill">
  <p>CSS</p><hr style={{width: "70%"}}/>
</div>
<div className="about-skill">
  <p>React JS</p><hr style={{width: "70%"}}/>
</div>
<div className="about-skill">
  <p>JavaScript</p><hr style={{width: "60%"}}/>
</div>
<div className="about-skill">
  <p>Next Js</p><hr style={{width: "40%"}}/>
</div>
      </div>
    </div>
</div>
<div className="about-achievements">
  <div className="about-achievement">
    <h1>1+</h1>
    <p>YEARS OF EXPERIENCE</p>
  </div>
  <hr />
  <div className="about-achievement">
    <h1>4+</h1>
    <p>PROJECT PARTICIPATED</p>
  </div>
  <hr />
  <div className="about-achievement">
    <h1>3+</h1>
    <p>HAPPY CLIENTS</p>
  </div>
</div>
    </div>
  )
}

export default About