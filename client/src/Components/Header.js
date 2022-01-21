import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from "./Login";
import Registeration from './Registeration';

export const Header = () => {
    let navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("loggedin");
        navigate('/');
    }
    return (
        <>
            <div className='p-4 border-bottom shadow'>
            <div className='container'>
                <div className='row col-md-10 mx-auto'>
                    <div className='col-md-3'>
                        <h5>My Ways</h5>
                    </div>
                    <div className="col-md-9">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <Link className="btn btn-sm" to="/">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-sm" to="/About">About</Link>
                            </li>
                            {localStorage.getItem("loggedin") === null?
                            <li className="nav-item">
                                <Login />
                            </li>:
                            <li className="nav-item">
                                <button className="btn btn-outline-dark btn-sm" type="button" onClick={logout}>Logout</button>
                            </li>
                            }&nbsp;
                            {localStorage.getItem("loggedin") === null?
                            <li className="nav-item">
                                <Registeration />
                            </li>:""
                            }
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Header;