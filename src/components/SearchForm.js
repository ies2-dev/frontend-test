import React, { useState } from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import Input from '../components/Input'

const StyledSearchForm = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const SearchBox = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 8px;
    display: flex;
    border: 1px solid rgba(0,0,0,.1);
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    padding: 30px 10px;
    width: 90%;

    .search-group {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
    }
`

const SearchForm = ({onClick}) => {
    const [value, changeValue] = useState('')

    return (
        <StyledSearchForm>
            <SearchBox>
                <h1>Movie List</h1>
                <div className="search-group">
                    <Input
                        onChange={e => changeValue(e.target.value)}
                        placeholder="Digite o filme/série a ser pesquisado"
                        type="text"
                        value={value}
                        />
                    <Button onClick={() => onClick(value)} type="button">
                        Pesquisar
                        <i className="fas fa-search" />
                    </Button>
                </div>
            </SearchBox>
        </StyledSearchForm>
    )
}

export default SearchForm
