import React from 'react'
import styled from 'styled-components'


const InfoBox = styled.div`
    background-color: white;
    border: 1px solid rgba(0,0,0,.1);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 10px;
    width: 100%;

    .sub-info {
        margin: 8px 5px;
        width: 33%
    }

    .long-info {
        margin: 8px 5px;
        width: 80%;
    }
`

const StyledFilmDetails = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    width: 100%;
`
const InfoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    width: 70%;

    .poster {
        display: inline-block;
        height: auto;
        width: auto;
    }
`

const FilmDetails = ({ film }) => (
    <StyledFilmDetails>
        <InfoWrapper>
            <div className="poster">
                <img alt='' src={film && film.Poster} width="220"/>
            </div>
            <InfoBox>
                <h1>{film && film.Title} ({film && film.Year})</h1>
                <span className="sub-info">
                    <i className="fas fa-star" /> {film.imdbRating} / 10
                </span>
                <span className="sub-info">
                    <b>Duração: </b>{film.Runtime}
                </span>
                <span className="sub-info">
                    <b>Lançamento: </b>{film.Released}
                </span>
                <div className="long-info "><b>Diretor: </b>{film.Director}</div>
                <div className="long-info "><b>Escritor(es): </b>{film.Writer}</div>
                <div className="long-info "><b>Gênero: </b>{film.Genre}</div>
                <div className="long-info "><b>Elenco: </b>{film.Actors}</div>
                <div className="long-info "><b>Sinopse: </b> {film.Plot}</div>
            </InfoBox>
        </InfoWrapper>
    </StyledFilmDetails>
)

export default FilmDetails
