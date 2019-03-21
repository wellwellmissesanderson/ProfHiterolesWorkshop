import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colours } from '../CONSTANTS';

const splitPosition = '40%';
const splitThickness = '4px';
const splitColor = 'yellow';

const StyledNavItem = styled.li`
    position: relative;
    color: transparent;
    cursor: pointer;
    
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: ${splitPosition};
        left: -10%;
        right: -10%;
        height: ${splitThickness};
        border-radius: ${splitThickness};
        margin-top: -(${splitThickness} / 2);
        background: ${splitColor};
        transform: scale(0);
        transition: transform .8s cubic-bezier(.16,1.08,.38,.98);
        z-index: 1;
    }

    .mask {
        display: block;
        position: absolute;
        overflow: hidden;
        color: white;
        top: 0;
        height: ${splitPosition};
        transition: all .8s cubic-bezier(.16,1.08,.38,.98);
        
        span { display: block; }
    }

    // bottom mask only
    .mask + .mask {
        top: ${splitPosition};
        height: ${splitPosition};
        
        span {
            color: white;
            transform: translateY(-${splitPosition});
        }
    }

    &:hover,
    &:active {
        .mask {
            color: ${colours.nav.accentColor};
            transform: skewX(12deg) translateX(5px);
        }
        
        .mask + .mask {
            transform: skewX(12deg) translateX(-5px);
        }
        
        &::before { transform: scale(1); }
    }
`;

const NavItem = props => {
    const { title } = props;

    return (
        <StyledNavItem>
            {title}
            <NavLink className="mask" to='/'><span>{title}</span></NavLink>
            <NavLink className="mask bottom" to='/'><span>{title}</span></NavLink>
        </StyledNavItem>
    )
}

NavItem.propTypes = {
    title: PropTypes.string
};

export default NavItem;
