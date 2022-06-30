
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {

    const [user,loading]=useAuthState(auth)

    const location = useLocation()


    if(loading){
        return <Loading></Loading>
    }
    if(!user){
          
        // redirecting the location 
        return <Navigate to='/sign-in' state={{from:location}} replace ></Navigate>

    } 


    return children
};

export default RequireAuth;
