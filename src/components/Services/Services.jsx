// import React from 'react'
import './Services.css'
import { Services_Data } from '../../assets/Services_data'


const Services = () => {
  return (
    <div id='services' className="services">
        <div className="services-title">
            <h1>My Sercices</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="services-container">
            {Services_Data.map((Services, index)=> {
                return <div key={index} className='services-format'>
<h3>{Services.s_no}</h3>
<h2>{Services.s_name}</h2>
<p>{Services.s_desc}</p>
<div className="services-readmore">
    <p>Read More</p>
    <h3>---</h3>
    
</div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services