import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { login } from '../api/api';
import LoginVideoBackground from './LoginVideoBackground';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await onLogin(name, email);
      navigate('/search');
    } catch (error) {
      console.error('Error authenticating user:', error);
    }
  };

  const textFieldSx = {
    '& label': { color: 'rgba(255, 255, 255, 0.8)' },
    '& .MuiInputBase-input': { color: 'rgba(255, 255, 255, 0.8)' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.8)' },
      '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.8)' },
      '&.Mui-focused fieldset': { borderColor: 'rgba(255, 255, 255, 0.8)' },
    },
    '& .Mui-focused .MuiInputBase-input': { color: 'rgba(255, 255, 255, 0.8)' },
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <LoginVideoBackground />
      <Container maxWidth="sm" className="login-container">
        <Typography variant="h4" align="center" />
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
            margin="normal"
            required
            sx={textFieldSx}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
            margin="normal"
            required
            type="email"
            sx={textFieldSx}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
