import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from './../Admin/Navbar';
import Orders from './../Orders';
import Pizzas from './../Pizza/Pizzas';
import Users from './../Users';

export default function Index() {
    const currentUser = useSelector(state => state.loginUsersReducers.currentUser)
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentUser.role !== 'admin') {
            window.location.href = '/'
        }
    }, [])

    return (
        <React.Fragment>
            <div className='container justify-content-center'>
             
                <div>
                <div className='mt-5' style={{ fontSize: '35px' }}>AdminScreen</div>
                <hr />
                    <Navbar />
                    <Routes>
                        <Route exact path="/admin/users" element={<Users />} />
                        <Route exact path="/admin/orders" element={<Orders />} />
                        <Route exact path="/admin/pizzas" element={<Pizzas />} />
                    </Routes>
                </div>
            </div>
        </React.Fragment>
    )
}
