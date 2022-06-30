import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Toolbar from '@mui/material/Toolbar';
import PersonalDetails from './PersonalDetails';
import AccountDetails from './AccountDetails';
import { Button } from '@mui/material';

const drawerWidth = 240;

function AddUser() {

    const steps = ['Basic Details','Account Details']

    const [step, setStep] = React.useState(0);

    const forms = [ <PersonalDetails/>, <AccountDetails/>];

    const [formData, setFormData] = useState({
        
    })

      const onPrevClick = () => {
        setStep(step-1)
    }
      const onNextClick = () => {
          setStep(step+1)
      }


  React.useEffect(() => {
    document.getElementsByClassName("myclass")[0].classList.add("hide")
  },[])

  return (
         <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
              <Toolbar />
              <Box className='stepper'>
              <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
               {forms[step]}
               <div style={{textAlign:"center"}}>
                  {step !== 0 ? (
                    <Button style={{ marginRight: "16px" }} onClick={onPrevClick}> Previous </Button>
                   ) : undefined}
                  <Button themeColor={"primary"} disabled={step===1 ? true : false} onClick={onNextClick}>Next</Button>
                </div>
    </Box> 
  )
}

export default AddUser