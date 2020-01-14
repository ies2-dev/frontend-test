import React from 'react'
import styled from 'styled-components'

const JustifyContent = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100;
`

const StyledHorizontalScrollList = styled.div`
    background-color: white;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    overflow: scroll;
    padding: 10px;
    width: 90%;
`

const HorizontalScrollList = ({ children }) => (
    <JustifyContent>
        <StyledHorizontalScrollList>
            {children}
        </StyledHorizontalScrollList>
    </JustifyContent>
)

export default HorizontalScrollList