import React from 'react';
import styled from 'styled-components';

export const StyledExperiment = styled.div`
    border: 2px solid hotpink;
`;


const Experiment = (props) => {
    return (
        <StyledExperiment>
            IM AN EXPERIMENT!!
            <br/>
            {props.children}
        </StyledExperiment>

    );

}

export default Experiment;
