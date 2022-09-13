import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logOutUser } from '../actions/UserAction';

function Navbar() {
    const cartState = useSelector(state => state.cartReducers)
    const currentUserState = useSelector(state => state.loginUsersReducers.currentUser)
    const dispatch = useDispatch();
    return (
        <>  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg bg-dark rounded">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Pizza Wood Fire</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link">About</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link">Cart {cartState.cartItems.length}</Link>
                            </li>
                            {
                                Object.keys(currentUserState).length !== 0  ?
                                    (
                                        <div className="dropdown mt-2">
                                            <a className="dropdown-toggle text-white text-decoration-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {currentUserState.name}
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <a className="dropdown-item" href="/orders">Orders</a>
                                                <a href='#' className="dropdown-item" onClick={() => dispatch(logOutUser())}>Logout</a>
                                            </div>
                                        </div>
                                    ) :
                                    (
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link" >Login</Link>
                                        </li>
                                    )}
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar;