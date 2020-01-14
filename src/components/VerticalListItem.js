import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

import Button from './Button'

const ItemWrapper = styled.div`
    display: inline-block;
    width: 50%;
`

const StyledVerticalListItem = styled.div`
    display: flex;
    padding: 10px;
    width: 100%;

    .title {
        align-items: flex-start;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: auto;
        padding: 10px;

        div {
            flex: 1;
        }
    }


`

const VerticalListItem = ({ imdbID, Poster, Title, Year }) => (
    <Link to={`/details/${imdbID}`}>
        <ItemWrapper>
            <StyledVerticalListItem>
                    <div className="poster">
                        <img alt='' src={Poster} width="110"/>
                    </div>
                    <div className="title">
                        <div>
                            {Title} ({Year})
                        </div>
                        <div>
                            <Button>Ver detalhes</Button>
                        </div>
                    </div>
            </StyledVerticalListItem>
        </ItemWrapper>
    </Link>
)

export default VerticalListItem