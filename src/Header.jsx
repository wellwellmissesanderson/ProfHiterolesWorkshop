import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const splitPosition = '40%';
const splitThickness = '4px';
const splitColor = 'white';
const fontSize = '50px';

const StyledHeader = styled.header`

    .menu-list {
        font-size: ${fontSize};
        line-height: 1.2;
        transform: rotateX(-10deg) rotateY(20deg);
        text-transform: uppercase;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .menu-list-item {
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
    }

    .mask {
        display: block;
        position: absolute;
        overflow: hidden;
        color: ${splitColor};
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

    .menu-list-item:hover,
    .menu-list-item:active {
        .mask {
            color: tomato;
            transform: skewX(12deg) translateX(5px);
        }
        .mask + .mask {
            transform: skewX(12deg) translateX(-5px);
        }
        &::before { transform: scale(1); }
    }
`;

const Header = (props) => {

return (
    <StyledHeader>
        <ul className="menu-list">
            <li className="menu-list-item">
                Home
                <NavLink className="mask" to='/'><span>Home</span></NavLink>
                <NavLink className="mask bottom" to='/'><span>Home</span></NavLink>
            </li>
            <li className="menu-list-item">
                Experiments
                <NavLink className="mask" to='/'><span>Experiments</span></NavLink>
                <NavLink className="mask bottom" to='/'><span>Experiments</span></NavLink>
            </li>
            {/* <li>
                <NavLink to='/experiments'>Experiments</NavLink>
            </li> */}
        </ul>
    </StyledHeader>

)}


export default Header;
