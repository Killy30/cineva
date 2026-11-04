
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BTNwatch from './BTNwatch';

function SliderInfo({ data }) {

    const title_url = data?.original_title ?? data?.original_name;
    const date = data?.first_air_date ?? data?.release_date;

    return (
        <div className="box_title">
            <h2>{data?.original_title ?? data?.original_name}</h2>
            <div className='range_card'>
                <span>{data?.vote_average}  .</span>
                <span>{date?.split('-')[0]}  .</span>
                <span>16+  .</span>
                <span>{Math.floor(112 / 60)}h {112 % 60}m  .</span>
                <span>Sci-Fi / Drama</span>
            </div>
            <p>{data?.overview}</p>
            <div className='btns'>
                <BTNwatch url={`/ver/${data?.media_type == 'tv' ? 'tv' : 'movie'}-${data?.id}-${title_url?.replaceAll(' ', '-')}`}/>
                {/* <Link 
                    to={`/ver/${data?.media_type == 'tv' ? 'tv' : 'movie'}-${data?.id}-${title_url?.replaceAll(' ', '-')}`}
                    class="btn btn-primary"
                >Watch Now</Link>
                <Link
                    to={`/ver/${data?.media_type == 'tv' ? 'tv' : 'movie'}-${data?.id}-${title_url?.replaceAll(' ', '-')}`}
                    className="btn btn-secondary"
                >More Details</Link> */}
            </div>
        </div>
    )
}

export default SliderInfo