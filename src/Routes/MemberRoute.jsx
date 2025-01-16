
import React from 'react';
import useAuth from '../Hooks/useAuth';

import { Navigate, useLocation } from 'react-router-dom';
import useMember from '../Hooks/useMember';

const MemberRoute = ({children}) => {
    const {user , loading} = useAuth();
    const [isMember , isMemberLoading] = useMember();
    const location = useLocation();
    if(loading || isMemberLoading){
        return <div className="loading"></div>
    }
    if(user && isMember){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default MemberRoute;