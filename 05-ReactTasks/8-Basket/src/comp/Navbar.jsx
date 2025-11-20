import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <Link to='/'>Logo</Link>
            </div>
            <div>
                <ul>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/service'>Service</NavLink></li>
                    <li><NavLink to='/users'>Users</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar