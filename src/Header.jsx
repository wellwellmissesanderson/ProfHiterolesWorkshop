import React from 'react';
import { NavLink } from "react-router-dom";

const Header = (props) => {

return (
    <header>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/experiments'>Experiments</NavLink>
            </li>
        </ul>
    </header>

)}


export default Header;
