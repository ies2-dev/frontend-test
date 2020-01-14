import React, { useEffect, useState } from 'react'
import  { useParams } from "react-router-dom";

import FilmDetails from './FilmDetails'
import { getFilmById } from '../../api'

const FilmDetailsContainer = () => {
    const [film, changeFilm] = useState({})
    const { id } = useParams()

    const getFilmDetails = async  () => {
        const filmDetails = await getFilmById(id)
        changeFilm(filmDetails)
    }

    useEffect(() => {
        getFilmDetails()
    }, [])

    return <FilmDetails film={film} />
}

export default FilmDetailsContainer
