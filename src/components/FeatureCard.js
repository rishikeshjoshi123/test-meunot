import React from 'react'
import './featurecard.css'

function FeatureCard({color,image,title,desc}) {
  return (
    <div className="wrapper d-flex align-items-stretch">
        <div className="clash-card barbarian" style={{borderTopColor:`${color}`}}>
            <div className="clash-card__image clash-card__image--barbarian">
                <img src={image} alt="barbarian" />
            </div>
            <div className="clash-card__unit-name" style={{color:`${color}`}}>{title}</div>
            <div className="clash-card__unit-description">
                {desc}
            </div>

           
        </div> 
  </div> 
  )
}

export default FeatureCard