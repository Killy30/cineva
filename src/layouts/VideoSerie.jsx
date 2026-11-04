
import React, { useEffect, useState } from 'react'
import { useApiData } from '../context/ApiData'
import EpisodeCard from '../components/EpisodeCard'
import { Loader } from './Loaders'

function VideoSerie({ seasons = [], tv_id }) {
    const [seasonNumber, setSeasonNumber] = useState(1)

    const { getSeasonTv, seasonTv, loadingGetSeason } = useApiData()

    const handleSelectSeason = (e) => {
        const season_number = e.target.value;
        setSeasonNumber(season_number)
        getSeasonTv({ tv_id, season_number })
    }

    useEffect(()=>{
        getSeasonTv({ tv_id, season_number: seasonNumber})
    },[])

    return (
        <div className='serie_view'>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                        aria-selected="true"
                    >Episodios</button>
                    <button
                        className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                        aria-selected="false"
                    >Trailer</button>
                    <button
                        className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                        aria-selected="false"
                    >Detalles</button>
                    <button
                        className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-disabled" type="button" role="tab"
                        aria-controls="nav-disabled" aria-selected="false" disabled
                    >Disabled</button>
                </div>
            </nav>
            <div className="tab-content mt-4 mb-5" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <div className='row'>
                        <div className="col-md-3">
                            <select className='form-select' onChange={handleSelectSeason} name="" id="">
                                {
                                    seasons?.map((item, i) => {
                                        return (
                                            <option key={i} value={item.season_number}>Temporada {item.season_number}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className='box_episodes'>
                        {
                            loadingGetSeason
                            ? <Loader/>
                            : seasonTv?.episodes?.map((item, i)=> {
                                return(
                                    <EpisodeCard data={item} key={i}/>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <h1>2</h1>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <h1>3</h1>
                </div>
                <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">

                </div>
            </div>
        </div>
    )
}

export default VideoSerie