import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { HomePage } from './components/HomePage/HomePage';
import { Frame } from './components/Frame/Frame'; {/* Add Transaction Page */}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import statements
import { Login } from './components/LoginPage/Login';
import { Signin } from './components/SigninPage/Signin';

export const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<HomePage /> } />
        </Routes>
      </>
    </Router>
  );
};
