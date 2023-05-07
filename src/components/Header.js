import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import logo from '../assets/logo.svg';

const Header = ({ loggedIn, logoutUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#77A1D9' }}>
      <Toolbar>

        <img src={logo} alt="Logo" style={{ marginRight: '8px', width: '80px', height: 'auto' }} />

        <Typography
          variant="h6"
          component="div"
          marginLeft='20px'
          sx={{
            flexGrow: 1,
            color: 'white',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          Fetch Your Doggo
        </Typography>
        
        {loggedIn && (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
