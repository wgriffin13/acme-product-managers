import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({mCount}) => {

    return (
        <ul className="nav nav-pills" style={{marginBottom: '10px'}}>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/managers">Managers ({mCount})</NavLink>
            </li>
        </ul>
    )
}

export default Nav
