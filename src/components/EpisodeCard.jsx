
import React from 'react'

function EpisodeCard({data}) {

    return (
        <div className='episode_card'>
            <div className='episode_poster'>
                <img src={data.still_path ? `${import.meta.env.VITE_IMAGE_URL}${data.still_path}` : '../../img/poster-img.jpg'} alt="" />
            </div>
            <div className='episode_fooder'>
                <div>
                    <span>{data.episode_number}. {data.name}</span>
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard