import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    let navigate = useNavigate();
    const User = {
        email:email,
        password:password
    }
    const login = async (e) => {
        e.preventDefault();
        let x = await axios.post('/login',User);
        if (x.data.data === "Login Successfully !") {
            document.querySelector('#closelogin').click();
            localStorage.setItem("loggedin",x.data.session);
        }
        alert(x.data.data);
        navigate("/");
    }
    return (
        <>
            <a className='btn btn-outline-dark btn-sm' id="openlogin" data-bs-toggle="modal" data-bs-target="#login">Login</a>
            <div className="modal fade" id="login" data-bs-backdrop="login" data-bs-keyboard="false" tabindex="-1" aria-labelledby="login" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="staticBackdropLabel">Login</h5>
                            <button type="button" id="closelogin" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='p-5'>
                        <form method='post' onSubmit={login}>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" name='email' placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" name='password' placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                            </div>
                            <button type="submit" className="form-control btn btn-primary">Login</button>
                        </form>
                        <h6 className='mt-4 text-center'>Don't have an account yet ? <a class="" data-bs-target="#register" data-bs-toggle="modal" data-bs-dismiss="modal">Register</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;