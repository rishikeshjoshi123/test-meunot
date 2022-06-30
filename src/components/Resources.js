import React from 'react'
import './resources.css'

function Resources() {
  return (
    
        <main>
        <ul className="cards-container" data-aos="zoom-in"  data-aos-duration="1000">
            <li className="cyan-feature-card">
            <img src="assets/img/sme.png" 
                alt="SMEs icon" />
                 <h2>SMEs</h2>
              <p>
                Highly skilled Subject Matter Experts ensuring the best e-learning services
              </p>
            </li>

            <li className="red-feature-card">
            <img src="assets/img/designer.png"
                alt="Instructional Designers icon" />
                 <h2>Instructional Designers</h2>
            <p>
            Designers who create effective training & learning modules.
            </p>
            </li>

            <li className="orange-feature-card">
            <img src="assets/img/tutor.png"
                alt="Online Tutorsicon" />
                 <h2>Online Tutors</h2>
            <p>
                Proficient and professional tutors with efficient delivery of enhanced learning experiences
            </p>
            </li>
    
            <li className="blue-feature-card">
            <img src="assets/img/doubt.png" 
                alt="Doubt Experts icon" />
                 <h2>Doubt Experts</h2>
            <p>
             Providing the best doubt resolution experience for the users.
            </p>
            </li>
        </ul>
        </main>

  )
}

export default Resources