import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './userdashboard.css'

const drawerWidth = 240;

function UserDashboard(props) {

  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (index) => {
      console.log(index);
      setActiveIndex(index)
  }

  React.useEffect(()=>{
    if(activeIndex===2) document.getElementsByClassName("myclass")[0].classList.remove("hide")
    else document.getElementsByClassName("myclass")[0].classList.add("hide")
  },[activeIndex])


  const drawer = (
    <div>
      <Toolbar className='toolbar'> <img src="assets/img/logo.png" className='logo'></img> <span>MueNot</span></Toolbar>
      <Divider/>
      <List className='sidebar'>
          <ListItem key={"Assigned"} disablePadding onClick={(e) => handleClick(0)} className={`${activeIndex===0 ? "nav-item--active" : ""}`}>
            <ListItemButton className='nav-item--btn'>
              <ListItemIcon>
                  <AssignmentIcon className={`${activeIndex===0 ? "nav-item--active" : ""}`}/>  
              </ListItemIcon>
              <ListItemText primary={"Assigned"} className={`nav-item ${activeIndex===0 ? "nav-item--activetxt" : ""}`}/>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Completed"} disablePadding onClick={(e) => handleClick(1)} className={`${activeIndex===1 ? "nav-item--active" : ""}`}>
            <ListItemButton className='nav-item--btn'>
              <ListItemIcon>
                  <CheckCircleIcon className={`${activeIndex===1 ? "nav-item--active" : ""}`}/>
              </ListItemIcon>
              <ListItemText primary={"Completed"} className={`nav-item ${activeIndex===1 ? "nav-item--activetxt" : ""}`}/>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Upload Answer"} disablePadding onClick={(e) => handleClick(2)} className={`${activeIndex===2 ? "nav-item--active" : ""}`}>
            <ListItemButton className='nav-item--btn'>
              <ListItemIcon>
                  <FileUploadIcon className={`${activeIndex===2 ? "nav-item--active" : ""}`}/>
              </ListItemIcon>
              <ListItemText primary={"Upload Answer"} className={`nav-item ${activeIndex===2 ? "nav-item--activetxt" : ""}`}/>
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("user","null");
    navigate('/')
  }

  React.useEffect(() => {
    let user = localStorage.getItem("user");
    console.log(user)
    if(user==="null") navigate('/authUser')
  },[])

  const [subject, setSubject] = React.useState("physics");

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  React.useEffect(() => {
    document.getElementsByClassName("myclass")[0].classList.add("hide")
  },[])
 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` },}}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
  
          <div className="dropdown profile-option" style={{margin:"0 20px"}}>
              <button className="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <AccountCircleIcon/>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Profile</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" onClick={logout}>Logout</a>
              </div>
          </div>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {activeIndex === 0 ?  <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
              <Toolbar />
              <Typography paragraph>
                 Assigned Tasks
              </Typography>
           </Box>  : <></> }


       {activeIndex === 1 ? <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
              <Toolbar />
              <Typography paragraph>
                  Completed Tasks
              </Typography>
           </Box> : <></> }
        
        {activeIndex === 2 ? <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                 <Toolbar />
                 <div className='upload-wrapper'>
                   <h3>Select Subject</h3>
                 <FormControl sx={{ m: 1, minWidth: 150 }} variant='filled'>
                    <Select value={subject} onChange={handleChange}>
                        <MenuItem value={"physics"}>Physics</MenuItem>
                        <MenuItem value={"chemsitry"}>Chemistry</MenuItem>
                        <MenuItem value={"maths"}>Maths</MenuItem>
                        <MenuItem value={"biology"}>Biology</MenuItem>
                    </Select>
                 </FormControl>
                 </div>
        </Box> : <></> }

       
    </Box>
  );
}


export default UserDashboard;
