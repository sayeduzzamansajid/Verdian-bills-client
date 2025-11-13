import React, { useContext }  from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    
    const {user, loading} = useContext(AuthContext)
    console.log(location);

    if(loading){
        return <p>loading...</p>
    }
    if(!user){
        return <Navigate state={location.pathname} to={"/auth/login"} />
    }
    return children
};

export default PrivateRoute;