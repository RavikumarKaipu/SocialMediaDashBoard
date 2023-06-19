import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpForm() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [firstName,setName]=useState('')
    const [lastName,setLname]=useState('')

    async function submit(e){
        e.preventDefault();
        history('/Das')

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
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




    return (
        <div className="container text-center">
            <div>
                <h1>User Registration - Sign Up</h1>
            </div>
            <form action="/process_register" method="post" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="m-3">
                    <div className="form-group row">
                        <label className="col-4 col-form-label">E-mail: </label>
                        <div className="col-8">
                            <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control" required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-4 col-form-label">Password: </label>
                        <div className="col-8">
                            <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control" required minLength="6" maxLength="10" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-4 col-form-label">First Name: </label>
                        <div className="col-8">
                            <input type="text" name="firstName" className="form-control" required minLength="2" maxLength="20" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-4 col-form-label">Last Name: </label>
                        <div className="col-8">
                            <input type="text" name="lastName" className="form-control" required minLength="2" maxLength="20" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" onClick={submit} className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;
