import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const StyledHorizontalListItem = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const HorizontalListItem = ({ imdbID, Poster, Title, Year }) => (
    <StyledHorizontalListItem>
        <Link to={`/details/${imdbID}`}>
            <img alt='' src={Poster} width="110"/>
            <div>
                {Title} ({Year})
            </div>
        </Link>
    </StyledHorizontalListItem>

)

export default HorizontalListItem