import { Link } from 'react-router-dom';
import './Signup.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
const Signup = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);



    const handleSignUp = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.ConfPassword.value;
setError('');
        if (password !== confirmPassword) {
            setError('Password did not match!')
            return;
        } else if (password.length < 6) {
            setError('Password must be 6 character or longer');
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error);
            })

    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp} >
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder='enter your email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='enter your password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name='ConfPassword' placeholder='enter your password' required />
                </div>
                <input className='submit-btn' type="submit" value='Sign up' />
            </form>
            <p className='createnewact-btn'>Already have Have Account? <Link to='/login'> <span className='crtbtn' >Login</span></Link></p>
            <p className='error-msg'>{error}</p>
        </div>
    );
};

export default Signup;