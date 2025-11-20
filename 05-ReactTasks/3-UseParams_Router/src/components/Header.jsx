import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <Link to="/">Logo</Link>
            <menu>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/products"
                >
                    <li>Products</li>
                </Link>
            </menu>
        </nav>
    </header>
  )
}

export default Header