import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div>Loading...</div>
    }
    if (user) {
        return children;
    } else {
        return (
            <Navigate to='/login'></Navigate>
        );
    };
};

export default PrivateRoutes;