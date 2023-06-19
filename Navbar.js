import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Pagination, Stack, Tabs } from '@mui/material';
import './Navbar.css';
import styled from '@emotion/styled';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Insta from './tutorial/Insta';
import ReactDOM from 'react-dom/client';
import { Tab } from 'bootstrap';
import { Instagram } from '@mui/icons-material';
import TitlebarImageList from './pages/Instaaa';
import TitlebarBelowImageList from './pages/Instaaa';
import SwipeableEdgeDrawer from './AboutUs';
import SwipeableTextMobileStepper from './Home';
import VideoComponent from './Videos';

const slideImages = [
    'path/to/slide1.jpg',
    'path/to/slide2.jpg',
    'path/to/slide3.jpg'
  ];

  const sampleData = [
    {
      name: "User1",
      avatar:
        "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      image:
        "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      message: "Msg 1",
    },
    {
      name: "User2",
      avatar:
        "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      image:
        "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      message: "Msg 2",
    },
    {
      name: "User3",
      avatar:
        "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=400",
      image:
        "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=400",
      message: "Msg 3",
    },
    {
      name: "User4",
      avatar:
        "https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg?auto=compress&cs=tinysrgb&w=400",
      image:
        "https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg?auto=compress&cs=tinysrgb&w=400",
      message: "Msg 4",
    },
  ];
  

const pages = ['Home', 'Photos', 'Videos','About','Chats','Speak'];
const settings = ['Profile','Update Profile','Logout'];
const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

function ResponsiveAppBar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let n=useNavigate("")
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    
    
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    const selectedSetting = event.target.innerText;

    if (selectedSetting === 'PHOTOS') {
        const root = ReactDOM.createRoot(document.getElementById('box'));
        root.render(
          <React.StrictMode>
           
          <TitlebarBelowImageList/>
            
          </React.StrictMode>
        );
        
    } else if (selectedSetting === 'HOME') {
        const root=ReactDOM.createRoot(document.getElementById("about"));
      root.render(
        <React.StrictMode>
            <SwipeableTextMobileStepper/>
        </React.StrictMode>
      ) 
    } else if (selectedSetting === 'ABOUT') {
      const root=ReactDOM.createRoot(document.getElementById("about"));
      root.render(
        <React.StrictMode>
            <SwipeableEdgeDrawer/>
        </React.StrictMode>
      )
    }else if(selectedSetting==='CHATS'){
      n('/chats')
        
    }else if(selectedSetting==='SPEAK'){
        n('/sound')
    }else if(selectedSetting==='VIDEOS'){
      const root=ReactDOM.createRoot(document.getElementById("videos"));
      root.render(
        <React.StrictMode>
            < VideoComponent/>
        </React.StrictMode>
      )
    }
    
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
    const selectedSetting = event.target.innerText;

  if (selectedSetting === 'Profile') {
    // Perform onClick operation for "Profile" option
    // Add your code here
    n('/nav')
  }
  else if(selectedSetting==='Update Profile'){
    n('/ep')
  }else if(selectedSetting==='Logout'){
    n('/')
  }else if(selectedSetting==='Edit Profile'){
    n('/edit')
  }
  
    
    
  };


  return (
    <div className='box_page'>
    <AppBar style={{top:"0",position:"sticky"}}  >
      <Container  maxWidth="xl">
        <Toolbar  disableGutters>
          <AdbIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography 
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img  style={{height:"50px",width:"50px",borderRadius:"100px",object:"cover"}} src="https://t4.ftcdn.net/jpg/05/27/89/45/360_F_527894502_7CSJviZBt2IrM171in42ui8WItMsJ80n.jpg"/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
            <IconButton
            
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem  key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RSR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
    <div id="box">
    </div>
    <div id="about">
    </div>
    <div id="videos">
      
    </div>
    
    <h1 style={{color:"red",textAlign:"center",border:"solid 6px red",backgroundColor:"yellow",marginLeft:"450px",marginRight:"450px",borderRadius:"20px"}}><u>Welcome to RSR Social Media</u></h1>
    <img className='img' src="https://dcassetcdn.com/design_img/3623199/720653/720653_19914253_3623199_ba706059_image.jpg"/>
    
      
    
<Box  sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
<SpeedDial
  ariaLabel="SpeedDial controlled open example"
  sx={{ position: 'absolute', bottom: 16, right: 16 }}
  icon={<SpeedDialIcon />}
  onClose={handleClose}
  onOpen={handleOpen}
  open={open}
>
  {actions.map((action) => (
    <SpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
      onClick={handleClose}
    />
  ))}
</SpeedDial>
</Box>



</div>
  );
}
export default ResponsiveAppBar;