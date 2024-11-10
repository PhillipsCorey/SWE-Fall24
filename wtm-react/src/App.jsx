import React from 'react';
import HomeView from './pages/homeview';
import EventCreator from './pages/eventcreator';
import EventDetails from './pages/eventdetails';
import Login from './pages/login';
import Profile from './pages/profile';
import Schedule from './pages/schedule';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import ContextProvider from './context/ContextProvider'
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const gatorTheme = createTheme({
  palette: {
    primary: {
      main: '#FA4616',
    },
    secondary: {
      main: '#0021A5',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          maxHeight: '100%',
          minHeight: '100%',
          backgroundColor: 'rgb(193, 226, 227)', // Background color
          color: 'black', // Text color
          // Add any other default styles you want here
          '&:hover': {
            backgroundColor: 'rgb(170, 200, 202)', // Optional hover effect
          },
        },
      },
    },
  },
});

const hasToken = () => {
  const token = sessionStorage.getItem('token');
  return !!token;
}

const ProtectedRoute = ({ children }) => {
  const isAuth = hasToken();
  return isAuth ? children : <Navigate to="/login" />;
};

const LoginOnlyRoute = ({ children }) => {
  const isAuth = hasToken();
  return isAuth ? <Navigate to="/home" /> : children;
};

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={gatorTheme}>
        <div> 
          <Navbar />
          <Routes>
            <Route path="/home" element={<ProtectedRoute><HomeView /></ProtectedRoute>} />
            <Route path="/" element={<ProtectedRoute><HomeView /></ProtectedRoute>} />
            <Route path="/login" element={<LoginOnlyRoute><Login /></LoginOnlyRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/schedule" element={<ProtectedRoute><Schedule /></ProtectedRoute>} />
            <Route path="/create" element={<ProtectedRoute><EventCreator/></ProtectedRoute>} />
            <Route path="/event/:id" element={<ProtectedRoute><EventDetails /></ProtectedRoute>} /> {/* Dynamic route for event details */}
          </Routes>
        </div>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
