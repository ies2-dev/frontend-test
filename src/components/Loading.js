import React from 'react'
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`

const StyledLoading = styled.div`
    align-items: center;
    display: flex;
    justify-content: 0;
    left: 0;
    position: absolute;
    top: 0;
`

const Loading = () => (
    <StyledLoading>
        <Spinner/>
    </StyledLoading>
)

export default Loading;