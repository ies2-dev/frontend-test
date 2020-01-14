import axios from 'axios'

const API_URL = 'http://www.omdbapi.com/?apikey=49cd487a'

export const searchFilms = ({s, page = 1}) => axios.get(API_URL, {
    params: {
        s,
        page,
    }
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.error(error);
    })

export const getFilmById = (i) => axios.get(API_URL, {
    params: {
        i,
    }
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.error(error);
    })
