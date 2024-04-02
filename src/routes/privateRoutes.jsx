import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (loading) {
        return <div>Loading...</div>
    }
    if (user) {
        return children;
    } else {
        return (
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        );
    };
};

export default PrivateRoutes;