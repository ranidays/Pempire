import './App.css';
import HomeScreen from "./components/HomeScreen/HomeScreen";
import {GlobalStyle} from "./components/GlobalStylings";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import SignUpScreen from "./components/SignUpScreen/SignUpScreen";
import UserHomeScreen from "./components/UserHomeScreen/UserHomeScreen";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import StoryScreen from "./components/StoryScreen/StoryScreen";
import ShopScreen from "./components/ShopScreen/ShopScreen"

function App() {
  return (
    <ShopScreen/>
  );
}

export default App;
