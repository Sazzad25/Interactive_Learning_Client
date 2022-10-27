import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'



export default function PrivateRoutes({user, setUser}) {
    const location = useLocation();

    // let  userid = localStorage.getItem("token") == null ? false : true;
    // return (
    //     <>
    //         {userid ? <Outlet/> : <Navigate to="/login" state={{from: location}} replace />};
    //     </>

    // )

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return setUser;

}