import React from 'react';
import Nav from './common/Nav.jsx';
import NavItem from './common/NavItem.jsx';

const Header = (props) => {

    return (
        <Nav>
            <NavItem title="Home" />
            <NavItem title="Experiments" />
        </Nav>
    )
}

export default Header;
