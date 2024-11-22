import React from 'react'
import "./navbar.css"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <span className="logo">LogoNav</span>
                <div className="navItems">
                    <button className="navbtn">Register</button>
                    <button className="navbtn">Log-In</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
