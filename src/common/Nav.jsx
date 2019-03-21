import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fonts } from '../CONSTANTS';

const StyledNav = styled.ul`
    ${fonts.nav};
    line-height: 1.2;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Nav = (props) => {

    return (
        <StyledNav>
            {props.children}
        </StyledNav>

    )
}

Nav.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

export default Nav;