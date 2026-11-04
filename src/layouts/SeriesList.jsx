import React from 'react'
import SeriesCard from '../components/SeriesCard'
import MovieTvCard from '../components/MovieTvCard'
import { useApiData } from '../context/ApiData'


function SeriesList({ series }) {

    return (
        <section className='list_movies_section'>
            <div className='list_movies_content'>
                {
                    series?.map((item, i) => {
                        return <MovieTvCard
                            id={item.id}
                            datex={item.first_air_date?.split('-')[0]}
                            title={item.original_name}  
                            poster={item.poster_path}  
                            vote_average={Math.floor(item.vote_average)}
                            media_type={'tv'}
                        />
                    })
                }
            </div>
        </section>
    )
}

export default SeriesList