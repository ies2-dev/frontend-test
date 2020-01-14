import React, { useEffect, useState } from 'react'

import FilmList from './FilmList'

import { searchFilms } from '../../api'

const FilmListContainer  = () => {
    const [ recomendedList, changeRecomendedList ] = useState([])
    const [ searchList, changeSearchList ] = useState([])

    const getFilms = async  () => {
        // a api não possui nada documentado sobre como trazer um top 10
        // ou algo do tipo, coloqueiu um termo qualquer simulando que foram
        // buscado os 10 melhores
        const list = await searchFilms({ s: 'school' })
        list.Search && changeRecomendedList(list.Search)
    }

    const search = async (s) => {
        const list = await searchFilms({ s })
        list.Search && changeSearchList(list.Search)
    }

    useEffect(() => {
        getFilms()
    },[])

    return <FilmList recomendedList={recomendedList} search={search} searchList={searchList} />
}

export default FilmListContainer
