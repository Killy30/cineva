
import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useApiData } from '../context/ApiData'
import HeaderViewTVMovie from '../layouts/HeaderViewTVMovie'
import VideoMovie from '../layouts/VideoMovie'
import VideoSerie from '../layouts/VideoSerie'
import TabNav from '../layouts/TabNav'
import MoviesList from '../layouts/MoviesList'
import SeriesList from '../layouts/SeriesList'

import '../styles/movie_page.css'
import FooterPages from '../layouts/FooterPages'

function MovieTvViewPage() {
    const { findMovieTv, movieTVData, getSimilarMoviesSeriesAPI, similarMoviesSeries } = useApiData()
    const { name } = useParams()
    const MEDIA_TYPE = name.split('-')[0]
    const _ID = name.split('-')[1]

    const location = useLocation()

    useEffect(() => {
        findMovieTv({ id: _ID, media_type: MEDIA_TYPE })
        getSimilarMoviesSeriesAPI({ id: _ID, media_type: MEDIA_TYPE })
    }, [name])


    return (
        <div className=''>
            <HeaderViewTVMovie
                backdrop={movieTVData?.backdrop_path}
                title={movieTVData?.title ?? movieTVData.original_title ?? movieTVData.original_name}
                poster={movieTVData?.poster_path}
                overview={movieTVData?.overview}
                date={movieTVData?.release_date?.split('-')[0] ?? movieTVData?.first_air_date?.split('-')[0]}
                runtime={movieTVData?.runtime}
                vote={movieTVData?.vote_average}
                genres={movieTVData.genres}
                media_type={MEDIA_TYPE}
            />
            <TabNav
                media_type={MEDIA_TYPE}
                movie_imdb_id={movieTVData?.imdb_id}
                seasons={movieTVData?.seasons}
                movie_tv_id={_ID}
                data={movieTVData}
            />
            <div className='similar_box'>
                <div className='mb-4'>
                    <h3 className='text-white'>Sugerencias</h3>
                </div>
                {
                    (MEDIA_TYPE == 'movie')
                        ? <MoviesList movies={similarMoviesSeries} />
                        : <SeriesList series={similarMoviesSeries} />
                }
            </div>
            <FooterPages/>
        </div>
    )
}

export default MovieTvViewPage