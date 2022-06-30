import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import './admindashboard.css'
import './userdashboard.css'
import AddUser from './AddUser';

const drawerWidth = 240;

function AdminDashboard(props) {

  const [activeIndex, setActiveIndex] = React.useState(0);
  const sections = [<AddUser/>]
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (index) => {
      console.log(index);
      setActiveIndex(index)
  }

  const drawer = (
    <div>
      <Toolbar className='toolbar'> <img src="assets/img/logo.png" className='logo'></img> <span>MueNot</span></Toolbar>
      <Divider/>
      <List className='sidebar'>
          <ListItem key={"Add User"} disablePadding onClick={(e) => handleClick(0)} className={`${activeIndex===0 ? "nav-item--active" : ""}`}>
            <ListItemButton className='nav-item--btn'>
              <ListItemIcon>
                  <PersonAddAltIcon className={`${activeIndex===0 ? "nav-item--active" : ""}`}/>  
              </ListItemIcon>
              <ListItemText primary={"Add User"} className={`nav-item ${activeIndex===0 ? "nav-item--activetxt" : ""}`}/>
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
    document.getElementsByClassName("myclass")[0].classList.add("hide")
  },[])

  return (
    <Box sx={{ display: 'flex' }} className="admin-wrapper">
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
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
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
        {sections[activeIndex]}
    </Box>
  );
}


export default AdminDashboard;
