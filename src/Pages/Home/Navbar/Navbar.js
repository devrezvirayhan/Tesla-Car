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
  const { user, logout } = useAuth()
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
            <Link to="/">
              <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">Tesla Car</Button>
            </Link>
          </Typography>
          <Link to="/review">
            <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">Review</Button>
          </Link>
          <Link to="/myorder">
            <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">MyOrders</Button>
          </Link>
          <Link to="/product">
            <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">Our Product</Button>
          </Link>

          <Button style={{ textDecoration: 'none', color: "black" }} color="inherit">
            Signed In as: <a style={{ textDecoration: 'none', color: "black"}} href="#login">{user?.displayName} </a>
          </Button>
          {
            user?.email ?

              <Box>
                <Link to="/admin">
                  <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">Dashbord</Button>
                </Link>
                <Button onClick={logout} color="inherit">Logout</Button>
              </Box>
              :
              <Link to="/login">
                <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">Login</Button>
              </Link>
          }


        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;