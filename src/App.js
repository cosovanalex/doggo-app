import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/main.css';
import Header from './components/Header';
import Login from './components/Login';
import Search from './components/Search';
import MatchResult from './components/MatchResult';
import { login, logout } from './api/api';
import Footer from './components/Footer';

const LoginContainer = ({ children }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    {children}
  </Box>
);

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (storedLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const authenticateUser = async (name, email) => {
    try {
      await login(name, email);
      setLoggedIn(true);
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
    } catch (error) {
      console.error('Error authenticating user:', error);
    }
  };

  const logoutUser = async () => {
    try {
      await logout();
      setLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
    } catch (error) {
      console.error('Error logging out:', error);
      setLoggedIn(true);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Header loggedIn={loggedIn} logoutUser={logoutUser} />
        <div className="app-content">
          {!loggedIn ? (
            <LoginContainer>
              <Login onLogin={authenticateUser} />
            </LoginContainer>
          ) : (
            <Routes>
              <Route path="/search" element={<Search />} />
              <Route path="/match" element={<MatchResult />} />
            </Routes>
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
