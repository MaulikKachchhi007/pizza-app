import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <ul className='admin-navbar'>
                <li><Link to='/admin/users'>Users</Link></li>
                <li><Link to='/admin/orders'>Pizzas</Link></li>
                <li><Link to='/admin/pizzas'>Orders</Link></li>
            </ul>
        </div>
    )
}
