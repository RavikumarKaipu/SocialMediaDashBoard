import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './pro.css'
import { useNavigate } from "react-router-dom";
import Pass from "./Password";
import { Link } from "react-router-dom";
import Dash from "./Dashboard";


import axios from "axios";



let Dashb = async () => {
    let n=useNavigate("")
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;

  if (input1 !== "" && input2 !== "") {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: input1,
        password: input2,
      });

      // Handle successful login logic here, e.g., redirect to dashboard
      n("/Dash");
    } catch (error) {
      // Handle login error, e.g., display error message
      const para = document.getElementById("para");
      para.textContent = "Invalid credentials";
      para.classList.add("para");
    }
  } else {
    const para = document.getElementById("para");
    para.textContent = "Please fill in the details";
    para.classList.add("para");
  }
};

var Header=()=>{

  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:8000/",{
              email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  history("/home",{state:{id:email}})
              }
              else if(res.data=="notexist"){
                  alert("User have not sign up")
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }



    let n=useNavigate();
    let Pas=()=>{
        n('/Pass')
    }
    let Pat=()=>{
        n('/path')
    }
    let Dashb=()=>{
        let input1=document.getElementById("input1").value
        let input2=document.getElementById("input2").value
        let  int2=document.getElementById("input2")
        localStorage.setItem("input1",input1);
        localStorage.setItem("input2",input2);
        if(input1!=="" && input2!==""){
        n('/dash')
        }else{
            let para=document.getElementById("para")
            para.textContent="Please fill the details"
            para.classList.add("para")

        }
    }
    return(
        <div class="main_page d-flex flex-column justify-content-center">
           
            <center>
            <div class="container">
            <div class="sub_page ">
               <u class="under"><h1 class="heading">Login Page</h1></u><br/>
               <form>
                <h6>Email:</h6>
              <input id="input1" class="input1" type="Email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your Email" required/><br/>
              <h6>Password:</h6>
              <input id="input2" class="input2" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your Password" required/>
              </form>
               <u><p onClick={Pas}>  forgot Password </p></u>
                <button href='/dash' onClick={Dashb} class="btn btn-success button1">Login</button>
                <h6>or</h6>
                <button onClick={Pat} class="btn btn-primary button2">Sign Up</button><br/>
                <p id="para" className="Para"></p>

               
               </div>
              

            </div>
            </center> 

            
        </div>
    )
}
export default Header;