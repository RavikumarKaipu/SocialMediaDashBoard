import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
//import './Home.css'
import { Mail, Password } from "@mui/icons-material";
function Home1(){
    const[sname,setname]=useState("")
    const[mailid,setmail]=useState("")
    const[password1,setPassword]=useState("")
    const navigate=useNavigate();
    function login(){
        navigate("/")
    }
    const save=async(e)=>{
        if(password1=="")
        alert("enter password")
        else if(sname=="")
        alert("Enter the UserName")
        else if(mailid=="")
        alert("Enter the Mail")
        else {
            let mydata={
                name:sname,
                mail:mailid,
                password:password1
            }
            let result=await axios.post("http://localhost:8080/myproject/savedata",mydata)
            if(result.data=="added"){
                navigate("/Saideep")
            }
            else{
                alert(result.data)
            }
        }

    }
    return(
        <div className="h">
                <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={10}
        minHeight="100vh">
    <div className="Hom1">
      <u style={{color:"pink"}}> <h1 style={{color:"white",marginLeft:"40px"}}>Welcome to Cafe Signup Page </h1></u> <br></br>
        <b><label style={{color:"greenyellow",marginLeft:"95px"}}>UserName:</label></b>
     <input style={{color:"brown",fontSize:"18px"}}  type="text" placeholder="Enter Name" value={sname} onChange={(e) => setname(e.target.value)}/>
     <br/>
     <b><label style={{marginLeft:"170px",color:"red"}}>Mail:</label></b>
     <input style={{color:"brown",fontSize:"18px"}}  type="text" placeholder="Enter Mail" value={mailid} onChange={(e) => setmail(e.target.value)}/>
     <br/>
     <b><label style={{color:"deeppink",marginLeft:"100px"}}>Password:</label></b>
     <input  style={{color:"brown",fontSize:"18px"}}  type="text" placeholder="Enter Password" value={password1} onChange={(e) => setPassword(e.target.value)}/>
     <br/>     
    <button  style={{fontSize:"15px",paddingLeft:"15px",marginLeft:"225px",backgroundColor:"lightgreen"}}  onClick={save}>Signup</button>
    <Typography style={{fontSize:"23px",paddingLeft:"15px",marginLeft:"80px"}}>
        Already have an Account? <a onClick={login}>Login</a>
    </Typography>
    </div>
    </Box>
        </div>
        
    )
}
export default Home1;