import React from 'react'
import { useState } from 'react';
import Register from './Register';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert } from '@mui/material'
import { useRef } from 'react';
import DataService from '../../fire/firebaseOperations'
import { auth } from '../../fire/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import SvgLoader from '../../components/SvgLoader';
import { useEffect } from 'react';

import './auth.css'
import { useNavigate } from 'react-router-dom';

function Auth({admin}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false)

    const navigate = useNavigate();

    function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
              MueNot
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

      const removeAlert =  () => {
        let alerttag = document.getElementsByClassName('alert1')[0];
        alerttag.classList.add('alert-hidden')
      }

    const handleLogin = async () => {
       document.getElementsByClassName('alert1')[0].classList.add('alert-hidden');
        setLoader(true)
         if(admin)
         {
            const data = await DataService.getData("admins",email);
            if(data?._document){
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        //const user = userCredential.user;
                        setLoader(false)
                        document.getElementsByClassName('alert2')[0].classList.remove('alert-hidden')
                        //console.log(user);
                        setTimeout(()=>{
                            navigate('/adminDashboard')
                        },2000)
                        

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage)
                    });
            }
            else{
                setLoader(false)
                let alerttag = document.getElementsByClassName('alert1')[0];
                alerttag.classList.remove('alert-hidden')
            }
         }
         else{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem("user",user.email)
                setLoader(false)
                document.getElementsByClassName('alert2')[0].classList.remove('alert-hidden')
                //console.log(user);
                setTimeout(()=>{
                    navigate('/userDashboard')
                },2000)
                

            })
            .catch((error) => {
                setLoader(false)
                document.getElementsByClassName('alert1')[0].classList.remove('alert-hidden')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
         }
    }


  useEffect(() => {
    document.getElementsByClassName("myclass")[0].classList.add("hide")
  })

  return (
    <div className='auth-wrapper'>
     <div>
     <Container component="main" maxWidth="xs" className='login-wrapper'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <div className='welcome-back'>Hi, Welcome Back</div>
          <div className='welcome-back-2'>Enter your credentials to continue</div>

          <Avatar sx={{ m: 1, bgcolor: 'rgb(103, 58, 183)' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h6" variant="h6">
            {admin ? "Admin " : "User "}Log in
          </Typography>

          <Alert severity="error" className='alert1 alert-hidden'>{admin ? "Admin" : "User"} Not Found !! Try Again</Alert>
          <Alert severity="success" className='alert2 alert-hidden'>Sucessfully Logged in </Alert>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onFocus={removeAlert}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
   
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:"rgb(103, 58, 183)"}}
              onClick={handleLogin}
            >
             {loader ? <SvgLoader/> : <>Login</>}
              
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
     </div>
 </div>
  )
}

export default Auth