import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/UserAction';
import { Link } from "react-router-dom";
import Loader from '../components/messages/Loader';
import Error from '../components/messages/Error';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.loginUsersReducers);
  const { error, loading } = loginState;

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }
  }, [])


  function login() {
    const user = {
      email,
      password,
    }
    dispatch(loginUser(user));
  }
  return (
    <div>
      {loading && <Loader />}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 bg-white rounded">
          {error && <Error error='Invalid Email and Password' />}
          <h2 style={{ fontSize: '35px' }}>Login</h2>
          <div className="mb-3">
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control form-control-sm' />
          </div>
          <div className="mb-3">
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control form-control-sm' />
          </div>
          <div className="mb-3 d-flex justify-content-start">
            <input type="button" className='btn btn-danger btn-sm mt-3' onClick={login} name='login' value='Login' />
          </div>
          <Link to="/register" className='text-decoration-none' >Click here to Register</Link>
        </div>
      </div>
    </div>
  )
}
