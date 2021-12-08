import React from 'react';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import SignUpScreen from './components/SignUpScreen/SignUpScreen';
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
  
export const Routing = () => {
    return (
        <div>
          <Routes>
            <Route index element={<HomeScreen />} />
            <Route path='/Login' element={<LoginScreen />} />
          </Routes>
        </div>
      );
};