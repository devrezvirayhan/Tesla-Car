import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Navbar = () => {
  const {user,logout} = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tesla Car
            </Typography>
            <Link to="/products">
            <Button style={{textDecoration:'none', color:"white"}} color="inherit">More Products</Button>
            </Link>
            <Link to="/myorder">
            <Button style={{textDecoration:'none', color:"white"}} color="inherit">MyOrders</Button>
            </Link>
            {
              user?.email ? 
              <Button onClick={logout} color="inherit">Logout</Button>
              :
            <Link to="/login">
            <Button style={{textDecoration:'none', color:"white"}} color="inherit">Login</Button>
            </Link>
            }


          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navbar;