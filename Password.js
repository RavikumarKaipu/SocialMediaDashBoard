import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import './forgot.css';
import { useNavigate } from "react-router-dom";

var Pass=()=>{
    let save=document.getElementById("save");
    let n=useNavigate("")
    function Save(){
        n('/Pass')
        alert("successfully changed")
        
        
    }
    var OTp=()=>{
        let otp=document.getElementById("Otp");
        <input type="text"/>
    }
    return(
        <div className="container">
            <div className="row">
                <div>
                
        <div className="main_page1">
            <form>
                <center>
               <label className="label1"> Enter Email: </label> <input className="input_1" type="text" placeholder="Enter your Email"/><br/>
               <button  id="Otp" onClick={OTp} className="btn btn-danger otp">Send OTP</button><br/>
               <label className="label2">New Password: </label> <input className="input_2" type="password" placeholder="Enter your new passWord"/><br/>
               <label className="label3">Re-enter Password: </label> <input className="input_3" type="password" placeholder="Re-enter passWord"/><br/>
               <button onClick={Save} id="save" class="btn btn-secondary save_button">Save</button>
                </center>
            </form>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Pass;
