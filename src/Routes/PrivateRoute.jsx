import React, { useContext } from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <progress className="progress w-full"></progress>
    }
    if(user){
        return children 
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;