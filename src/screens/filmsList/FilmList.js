import React from 'react'
import styled from 'styled-components'

import HorizontalListItem from '../../components/HorizontalListItem'
import HorizontalScrollList from '../../components/HorizontalScrollList'
import If from '../../components/If'
import SearchForm from '../../components/SearchForm'
import VerticaListItem from '../../components/VerticalListItem'
import VerticalScrollList from '../../components/VerticalScrollList'

const StyledFilmList =  styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 30px;
`

const FilmList = ({ recomendedList, search, searchList }) => (
    <StyledFilmList>
        <SearchForm onClick={search}/>
        <If condition={searchList && searchList.length > 0}>
            <VerticalScrollList>
                {
                    searchList.map(film => <VerticaListItem {...film} key={film.imdbID} />)
                }
            </VerticalScrollList>
        </If>
        <HorizontalScrollList>
                {
                    recomendedList.map(film => <HorizontalListItem {...film} key={film.imdbID} />)
                }
        </HorizontalScrollList>
    </StyledFilmList>
)

export default FilmList
