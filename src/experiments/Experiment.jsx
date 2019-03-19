import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledExperiment = styled.div`
    border: 1px solid hotpink;
    height: 100vh;
    width: 100vw;
    background-image: url(${props => props.bgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

`;

const Experiment = (props) => {
    console.log('experiment props > ', props);
    return (
        <StyledExperiment bgImg={props.bgImg}>
            {props.children}
        </StyledExperiment>

    );

}

Experiment.propTypes = {
    bgImg: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(null)
    ])
};

export default Experiment;
