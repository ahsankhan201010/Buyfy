import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <h1>logo</h1>
            </div>
            <div className="shop flex">
                <h3>shop</h3>
            </div>
            <div className="cart flex">
                <h3>cart</h3>
            </div>
            <div className="user flex">
                <h3>user</h3>
            </div>
        </div>
    )
}

export default Navbar
