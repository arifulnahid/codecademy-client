import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../ContextAPI/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    if (user?.uid) {
        return children
    }
    if (!user) {
        return <Navigate to="/login" />
    }

};

export default PrivateRoute;