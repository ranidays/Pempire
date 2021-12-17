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
    Navigate,
    Redirect
  } from "react-router-dom";
import BattleActionSelectionScreen from "./components/BattleActionSelectionScreen/BattleActionSelectionScreen";
  
export const Routing = () => {
    return (
        <div>
          <Routes>
            <Route index element={<HomeScreen />} />
            <Route path='/Login' element={<LoginScreen />} />
            <Route path='/SignUp' element={<SignUpScreen />} />
            <Route path='/Story' element={<StoryScreen />} />
            <Route path='/Shop' element={<ShopScreen/>}/>
            <Route path="/Combat/:selectedMove1/:selectedMove2/:selectedMove3/:selectedMove4" element={<CombatScreen />} />
            <Route path="/SignUp" element={<SignUpScreen />} />
            <Route path="/BattleActionSelection" element={<BattleActionSelectionScreen />} />
          </Routes>
        </div>
      );
};