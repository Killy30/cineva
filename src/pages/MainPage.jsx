
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../layouts/Slider'
import MoviesList from '../layouts/MoviesList'
import SeriesList from '../layouts/SeriesList'
import { useApiData } from '../context/ApiData'
import FooterPages from '../layouts/FooterPages'

function MainPage() {
    const { moviesData, seriesData, getApiTMDBTVshow, getApiTMDBMovies } = useApiData()

    useEffect(()=>{
        getApiTMDBMovies(1)
        getApiTMDBTVshow(1)
    },[])

    return (
        <main>
            <Slider />
            <div className='content_page'>
                <div className="title_page">
                    <h4>Últimas películas agregadas</h4>
                </div>
                <MoviesList movies={moviesData?.results} />
                <div className='card_btn_see_more'>
                    <Link to={'/movies/page/1'}>Ver Mas Peliculas</Link>
                </div>
                <div className="title_page mt-5">
                    <h4>Últimas series agregadas</h4>
                </div>
                <SeriesList series={seriesData?.results} />
                <div className='card_btn_see_more'>
                    <Link to={`/series/page/1`}>Ver mas Series</Link>
                </div>
            </div>
            <FooterPages/>
        </main>
    )
}

export default MainPage