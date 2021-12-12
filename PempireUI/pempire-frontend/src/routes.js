import React from 'react';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import SignUpScreen from './components/SignUpScreen/SignUpScreen';
import StoryScreen from './components/StoryScreen/StoryScreen';
import ShopScreen from './components/ShopScreen/ShopScreen';
import CombatScreen from "./components/CombatScreen/CombatScreen";

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
            <Route path='/Story' element={<StoryScreen />} />
            <Route path='/Shop' element={<ShopScreen/>}/>
            <Route path="/Combat" element={<CombatScreen />} />
            <Route path="/SignUp" element={<SignUpScreen />} />
          </Routes>
        </div>
      );
};