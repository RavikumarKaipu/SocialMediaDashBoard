import React from "react";
import Game from "./Path";
import { useNavigate } from "react-router-dom";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Fragment } from "react";
import Pass from "./Password";
import Header from "./pro";
import Sign from "./signup";
import Dash from "./Dashboard";
import Path from "./Path";
import updateProfile from "./UpdateProfile";
import Pv from "./Profileview";
import TutHome from "./tutorial/TutHome";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import ResponsiveAppBar from "./Navbar";
import PersonalProfile from "./Pvs";
import Ep from "./editPro";
import Sound from "./Sound";
import VideoComponent from "./Videos";
import Home1 from "./Link";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import SignUpForm from "./signup";
import RegistrationSuccess from "./components/Rsuccess";
import FixedBottomNavigation from "./chats";

const App = () => {




  return( 
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/signup" element={<SignUpForm/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/Das' element={<RegistrationSuccess/>}/>
          <Route path='/dash' element={<ResponsiveAppBar/>}/>
          <Route path='/Path' element={<SignUpForm/>}/>
          <Route path='/nav' element={<PersonalProfile/>}></Route>
          <Route path='/ep' element={<Pv/>}/>
          <Route path='/photos' element={<TutHome/>}/>
          <Route path='/Path' element={<Ep/>}/>
          <Route path="/Pass" element={<Pass/>}></Route>
          <Route path='/chats' element={<FixedBottomNavigation/>}/>
          <Route path='/sound' element={<Sound/>}/>
        </Routes>
      </BrowserRouter>
    </div>/*

    <BrowserRouter>
    <Routes>
     
    <Route path='/' element={<Header/>}></Route>
            <Route path="/Pass" element={<Pass/>}></Route>
            <Route path='/Dash' element={<ResponsiveAppBar/>}></Route>
            <Route path='/nav' element={<PersonalProfile/>}></Route>
            <Route path='/ep' element={<Pv/>}/>
            <Route path='/Path' element={<Ep/>}/>
            <Route path='/photos' element={<TutHome/>}/>
    </Routes>
    </BrowserRouter>
    */
    
  );
};

export default App;
