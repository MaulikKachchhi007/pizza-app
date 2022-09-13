import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/UserAction';
import { Link } from "react-router-dom";
import Loader from '../components/messages/Loader';
import Success from '../components/messages/Success';
import Error from '../components/messages/Error';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const registerState = useSelector(state => state.registerUsersReducers);
    const { error, loading, success } = registerState;

    function register() {
        if (password !== confirmPassword) {
            alert('Password and Confirm Password does not match')
        } else {
            const user = {
                name,
                email,
                password,
            }
            console.log(user);
            dispatch(registerUser(user));
        }
    }
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 bg-white rounded">
                    {loading && <Loader />}
                    {success && <Success success='User Registered Successfully.' />}
                    {error && <Error error='{error}' />}
                    <h2 style={{ fontSize: '35px' }}>Register</h2>
                    <div className="mb-3">
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='form-control form-control-sm' />
                    </div>
                    <div className="mb-3">
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control form-control-sm' />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control form-control-sm' />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='form-control form-control-sm' />
                    </div>
                    <div className="mb-3 d-flex justify-content-start">
                        <input type="button" className='btn btn-danger btn-sm mt-3' onClick={register} name='Register' value='Register' />
                    </div>
                    <Link to="/login" className='text-decoration-none' >Click here to Login</Link>
                </div>
            </div>
        </div>
    )
}
