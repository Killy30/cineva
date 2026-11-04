
import React from 'react'
import { useState, useEffect } from 'react'
import { Loader } from './Loaders'
import EpisodeCard from '../components/EpisodeCard'

import { useApiData } from '../context/ApiData'

function EpisodesList({ seasons = [], tv_id }) {
    const [seasonNumber, setSeasonNumber] = useState(1)

    const { getSeasonTv, seasonTv, loadingGetSeason } = useApiData()

    const handleSelectSeason = (e) => {
        // console.log(e.target.value);
        const season_number = e.target.value;
        setSeasonNumber(season_number)
        getSeasonTv({ tv_id, season_number })
    }

    useEffect(() => {
        getSeasonTv({ tv_id, season_number: seasonNumber })
    }, [])

    return (
        <div>
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
            <div className=''>
                {
                    loadingGetSeason
                        ? <div className='mt-5 mb-5'>
                            { <Loader /> }
                        </div> 
                        : <div className='box_episodes'>
                            {
                                seasonTv?.episodes?.map((item, i) => {
                                    return (
                                        <EpisodeCard data={item} key={i} />
                                    )
                                })
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default EpisodesList