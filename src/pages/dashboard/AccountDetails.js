import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import './personaldetails.css'

function AccountDetails() {
  return (
    <div className="main">
    <section className="signup">
      <img src="images/signup-bg.jpg" alt=""/> 
      <div className="form-container">
      <div className="signup-content">
          <form method="POST" id="signup-form" className="signup-form">
              <h2 className="form-title">Account Details</h2>
              <div className="form-group">
                  <input type="email" className="form-input" name="email" id="email" placeholder="Enter Email"/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-input" name="password" id="password" placeholder="Enter Password"/>
                  <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
              </div>
              <div className="form-group">
                  <input type="password" class="form-input" name="re_password" id="re_password" placeholder="Confirm password"/>
              </div>
              <div className="form-group">
                  <input type="submit" name="submit" id="submit" class="form-submit" value="Sign up"/>
              </div>
           </form>
       </div>
       </div>
    </section>
  
 </div> 
  )
}

export default AccountDetails