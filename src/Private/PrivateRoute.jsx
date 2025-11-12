import React,{ use }  from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    
    const {user, loading} = use(AuthContext)
    console.log(location);
    if(loading){
        return <p>loading</p>
    }
    if(!user){
        return <Navigate state={location.pathname} to={"/login"} />
    }
    return children
};

export default PrivateRoute;