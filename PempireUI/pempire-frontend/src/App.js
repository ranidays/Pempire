import './App.css';
import HomeScreen from "./components/HomeScreen/HomeScreen"
import {GlobalStyle} from "./components/GlobalStylings"
import LoginScreen from "./components/LoginScreen/LoginScreen"
import SignUpScreen from "./components/SignUpScreen/SignUpScreen"
import UserHomeScreen from "./components/UserHomeScreen/UserHomeScreen"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StoryScreen from "./components/StoryScreen/StoryScreen"
import ShopScreen from "./components/ShopScreen/ShopScreen"
import CombatScreen from "./components/CombatScreen/CombatScreen"
import React from "react"

const App = () => 
  <Router>
    <Routes>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route path="/SignUp">
        <SignUpScreen />
      </Route>
      <Route path="/Login">
        <LoginScreen />
      </Route>
      <Route path="/Story">
        <StoryScreen />
      </Route>
      <Route path="/UserHome">
        <UserHomeScreen />
      </Route>
      <Route path="/Shop">
        <ShopScreen />
      </Route>
      <Route path="/Combat">
        <CombatScreen />
      </Route>
    </Routes>
  </Router>

export default App;