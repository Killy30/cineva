
import React from 'react'
import MovieTvCard from '../components/MovieTvCard'

import { useApiData } from '../context/ApiData';

import '../styles/moviesList.css'

function MoviesList({ movies }) {
    
    return (
        <section className='list_movies_section'>
            <div className='list_movies_content'>
                {
                    movies?.map((item, i) => {
                        return <MovieTvCard
                            id={item.id}
                            title={item.title}
                            poster={item.poster_path}
                            datex={item.release_date?.split('-')[0]}
                            vote_average={Math.floor(item.vote_average)}
                            media_type={'movie'}
                        />
                    })
                }
            </div>
        </section>
    )
}

export default MoviesList