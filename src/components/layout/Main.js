import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = ({user, setUser}) => {
    return (
        <div>
            <Header user={user} setUser={setUser}></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;