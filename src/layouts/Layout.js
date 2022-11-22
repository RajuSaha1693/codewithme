import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AppBar  from '@mui/material/AppBar';
import Container  from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Attractions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton  from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
function Layout() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleAnchor=(e)=>{
    e.preventDefault();
    setAnchorElNav(e.currentTarget);
  }
  const handleNavClose=()=>{
    setAnchorElNav(null)
  }
  return (
    <div>
      <AppBar position="static" style={{backgroundColor:'#1d1b1b'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{display:{xs:'none',md:'flex'},mr:1}}/>
            <Typography
            variant='h6'
            noWrap
            component="a"
            href="/"
            sx={{mr:2,
            display:{xs:'none',md:'flex'},
            fontFamily:'monospace',
            letterSpacing:'.3rem',
            color:'inherit',
            textDecoration:'none'}}>
             LOGO
              
            </Typography>
            <Box sx={{flexGrow:1,display:{xs:'flex',md:'none'}}}>
              <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              color='inherit'
              onClick={handleAnchor}
              >
                <MenuIcon/>
              </IconButton>
              <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical:'bottom',
                horizontal:'left',
              }}
              keepMounted
              transformOrigin={{
                vertical:'top',
                horizontal:'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleNavClose}
              sx={{
                display:{xs:'block',md:'none'}
              }}>
                <MenuItem>
                  <Link to="/" style={{textDecoration:'none',color:'inherit'}}>Home</Link>
                </MenuItem>
                <MenuItem>
                <Link to="/other" style={{textDecoration:'none',color:'inherit'}}>Other</Link>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{display:{xs:'flex',md:'none'},mr:1}}/>
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link to="/" style={{textDecoration:'none',color:'inherit'}}>Home</Link>
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} >
              <Link to="/other" style={{textDecoration:'none',color:'inherit'}}>Other</Link>
            </Button>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
       
       <Outlet/>
    </div>
  )
}

export default Layout