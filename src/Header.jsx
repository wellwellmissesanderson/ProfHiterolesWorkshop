import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const splitPosition = '49%';
const splitThickness = '4px';
const splitColor = '#FF2C75';

const StyledHeader = styled.header`
    .nav-wrapper {
        border: 2px solid teal;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;

        li {
            color: white;
        }
    }

    .item {
        font-size: 20px;
        display: block;
        position: absolute;
        overflow: hidden;
        color: ${splitColor};
        top: 0;
        height: ${splitPosition};
        transition: all .8s cubic-bezier(.16,1.08,.38,.98);

        &::before {
            content: '';
            display: block;
            position: absolute;
            top: $split-position;
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
        color: $split-color;
        top: 0;
        height: $split-position;
        transition: all .8s cubic-bezier(.16,1.08,.38,.98);
        
        span { display: block; }
        }

    // bottom mask only
    .mask + .mask {
    top: $split-position - 0.1;
    height: 100 - $split-position + 0.1;
    
    span { transform: translateY(-$split-position); }
    }

    .item:hover,
    .item:active {
        .mask {
            color: black; transform: skewX(12deg) translateX(5px);
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
        <ul className="nav-wrapper">
            <li className="item">
                Home
                <NavLink className="mask" to='/'>Home</NavLink>
                <NavLink className="mask" to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/experiments'>Experiments</NavLink>
            </li>
        </ul>
    </StyledHeader>

)}


export default Header;
