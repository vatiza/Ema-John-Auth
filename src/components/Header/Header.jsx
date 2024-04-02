import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const { logOut, user } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => { console.log(error) })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>

                {user ? <span>Welcome {user.email}<button onClick={handleLogout}>Log Out</button> </span> : <span>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </span>
                }

            </div>
        </nav>
    );
};

export default Header;