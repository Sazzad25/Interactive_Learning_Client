import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const CheckOut = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>Checkout Page</h2>
            <li className="nav-link items  ms-3 text-info fw-bolder">
                User Name:      {user?.displayName}
            </li>
            <li className="nav-link items  ms-3 text-info fw-bolder">
                Email:      {user?.email}
            </li>
            <li className="nav-link items  ms-3 text-info fw-bolder">
                photoURL:      {user?.photoURL}
            </li>

        </div>
    );
};

export default CheckOut;