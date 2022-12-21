import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';

const Main = ({user, setUser}) => {
    return (
        <div>
            <Header user={user} setUser={setUser}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;