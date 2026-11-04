
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function MovieTvCard({ title, poster, datex, vote_average, id, media_type }) {

    return (
        <Link className='ancho_movie' to={`/ver/${media_type}-${id}-${title?.replaceAll(' ', '-')}`}>
            <div className='card_movie'>
                <div className="card_movie_poster">
                    <img src={poster ? `${import.meta.env.VITE_IMAGE_URL}${poster}` : '../../img/poster-img.jpg'} alt="" />
                </div>
                <div className='card_movie_footer'>
                    <div className='title_text_card'>
                        <p className='name_x'>{title}</p>
                    </div>
                    <div className="year_star_card">
                        <div>
                            <span className='year_x'>{datex}</span>
                        </div>
                        <div className='vote_star_box'>
                            <span class="material-symbols-outlined star_vote">star</span>
                            <span className='vote'>{vote_average}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieTvCard