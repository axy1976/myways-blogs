import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Registeration = () => {
    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    let navigate = useNavigate();
    const User = {
        fullname:fullname,
        email:email,
        phoneno:phoneno,
        password:password,
        cpassword:cpassword
    }
    const register = async (e) => {
        e.preventDefault();
        let x = await axios.post('/register',User);
        if (x.data.data === "Registered Successfully !") {
            document.querySelector('#closeregister').click();
            document.querySelector('#openlogin').click();
        }
        alert(x.data.data);
        setfullname("");
        setemail("");
        setphoneno("");
        setpassword("");
        setcpassword("");
        navigate("/");
    }
    return (
        <>
            <button className='btn btn-outline-dark btn-sm' id='openregister' data-bs-toggle="modal" data-bs-target="#register">Register</button>
            <div className="modal fade" id="register" data-bs-backdrop="register" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="register" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Register</h5>
                            <button type="button" className="btn-close" id='closeregister' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='p-5'>
                        <form method='post' onSubmit={register}>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="fullname" name='fullname' placeholder='Full Name' value={fullname} onChange={(e)=> (setfullname(e.target.value))}/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" name='email' placeholder='Email' value={email} onChange={(e)=> (setemail(e.target.value))}/>
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control" id="phoneno" name='phoneno' placeholder='Phone Number' value={phoneno} onChange={(e)=> (setphoneno(e.target.value))}/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" name='password' placeholder='Password' value={password} onChange={(e)=> (setpassword(e.target.value))}/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="cpassword" name='cpassword' placeholder='Confirm Password' value={cpassword} onChange={(e)=> (setcpassword(e.target.value))}/>
                            </div>
                            <button type="submit" className="form-control btn btn-primary">Register as Candidate</button>
                        </form>
                        <h6 className='mt-4 text-center'>Already have an account ? <button className="btn" data-bs-target="#login" data-bs-toggle="modal" data-bs-dismiss="modal">Login</button></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registeration;