import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(location);


    const handleSignin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignin}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder='enter your email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='enter your password' required />
                </div>
                <input className='submit-btn' type="submit" value='login' />
            </form>
            <p className='createnewact-btn'>New to Ema-john? <Link to='/signup'> <span className='crtbtn' >Create New Account</span></Link></p>
        </div>
    );
};

export default Login;