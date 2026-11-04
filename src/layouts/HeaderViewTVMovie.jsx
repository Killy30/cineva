
import React from 'react'

function HeaderViewTVMovie({ backdrop, title, poster, overview, date, runtime, vote, genres, media_type }) {
    return (
        <div className='box_header_movie_tv_view'>
            <div className="shodow_bg"></div>
            <div className="card_backdrop">
                <img src={`${import.meta.env.VITE_IMAGE_URL_BACKDROP}/${backdrop}`} alt="" />
            </div>
            <div className="card_poster_info">
                <div className='poster'>
                    <img src={`${import.meta.env.VITE_IMAGE_URL}/${poster}`} alt="" />
                </div>
                <div className='info'>
                    <div>
                        <div>
                            <h2>{title}</h2>
                        </div>
                        <div className='category'>
                            {
                                genres?.map((item, i) => {
                                    return (
                                        <span key={item.id}>{item.name}</span>
                                    )
                                })
                            }
                        </div>
                        <div className='star_vote_card'>
                            <span class="material-symbols-outlined star_vote">star</span>
                            <span className='vote'>{vote}</span>
                        </div>
                        <div>
                            <p>{overview}</p>
                        </div>
                        <div className='date_year'>
                            {
                                media_type != 'tv'
                                ? <span>{Math.floor(runtime / 60)}h {runtime % 60}m -</span>
                                : <span></span>
                            }
                            <span> {date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderViewTVMovie