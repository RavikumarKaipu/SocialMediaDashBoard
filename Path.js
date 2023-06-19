import React from "react";
import {Routes,BrowserRouter,Route} from "react-router-dom";
import Header from "./pro";
import Pass from "./Password";
import Sign from "./signup";
import ResponsiveAppBar from "./Navbar";
import Pv from "./Profileview";
import Ep from "./editPro";
import PersonalProfile from "./Pvs";
import Sound from "./Sound";
import FixedBottomNavigation from "./chats";
import VideoComponent from "./Videos";



var Path=()=>{
    return(
        
        
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Header/>}></Route>
            <Route path="/Pass" element={<Pass/>}></Route>
            <Route path='/Dash' element={<ResponsiveAppBar/>}></Route>
            <Route path='/nav' element={<PersonalProfile/>}></Route>
            <Route path='/ep' element={<Pv/>}></Route>
            <Route path='/Path' element={<Ep/>}></Route>
            <Route path='/sound' element={<Sound/>}/>
            <Route path='/chats' element={<FixedBottomNavigation/>}/>
            <Route path='./videos' element={< VideoComponent/>}/>
            

        </Routes> 
            </BrowserRouter>
            
    )
}
export default Path;