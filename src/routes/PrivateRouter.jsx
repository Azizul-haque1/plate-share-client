import React from 'react';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader/Loader';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user, loading, } = useAuth()
    const location = useLocation()

    if (loading) {
        return <Loader />
    }

    if (user && user.email) {
        return children
    }

    else {
        return <Navigate state={location?.pathname} replace to='/auth/login'></Navigate>
    }

};

export default PrivateRouter;