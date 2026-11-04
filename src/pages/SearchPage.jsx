import React, { useEffect } from 'react'
import MovieTvCard from '../components/MovieTvCard'
import MoviesList from '../layouts/MoviesList'

import { useApiData } from '../context/ApiData'
import { useParams } from 'react-router-dom'
import FooterPages from '../layouts/FooterPages'

function SearchPage() {
    const { dataSearch, getApiTMDBSearch } = useApiData()
    const { nombre } = useParams()

    useEffect(() => {
        getApiTMDBSearch(nombre)
    }, [])

    return (
        <>
            <div className='content_page'>
                <div className='title_page'>
                    <h4>Buscar: {nombre}</h4>
                </div>
                <section className="list_movies_section">
                    <div className="list_movies_content">
                        {
                            dataSearch?.results?.map((item, i) => {
                                return <MovieTvCard
                                    id={item.id}
                                    title={item.title ?? item.original_name}
                                    poster={item.poster_path}
                                    datex={item.release_date?.split('-')[0]}
                                    vote_average={Math.floor(item.vote_average)}
                                    media_type={item.media_type}
                                />
                            })
                        }
                    </div>
                </section>
            </div>
            <FooterPages />
        </>
    )
}

export default SearchPage