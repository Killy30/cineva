
import React, { useEffect } from 'react'
import MoviesList from '../layouts/MoviesList'
import { useApiData } from '../context/ApiData'
import Paginations from '../layouts/Paginations'

import '../styles/moviesPage.css'
import { useParams } from 'react-router-dom'
import FooterPages from '../layouts/FooterPages'

function MoviesPage() {
    const { getApiTMDBMovies, moviesData } = useApiData()
    const { page } = useParams()

    return (
        <>
            <div className='content_page'>
                <div className="title_page">
                    <h4>Peliculas Online</h4>
                </div>
                <MoviesList
                    movies={moviesData?.results}
                />
                <Paginations
                    total_pages={500}
                    media_type={'movies'}
                    getData={getApiTMDBMovies}
                />
            </div>
            <FooterPages />
        </>
    )
}

export default MoviesPage