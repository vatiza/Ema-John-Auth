import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form >
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