
import React, { useEffect } from 'react'
import DetailCard from '../components/DetailCard'

function Details({ data, media_type }) {
    useEffect(()=>{
        console.log(data);
        
    })
    return (
        <div className='details_box'>
            <DetailCard key_detail={"Nombre original:"} value={data?.original_name || data?.original_title}/>
            <DetailCard key_detail={"Eslogan:"} value={data?.tagline}/>
            <DetailCard key_detail={"Descripción general:"} value={data?.overview}/>
            <DetailCard 
                key_detail={"Fecha:"} 
                value={(data?.release_date == undefined) ? `${data?.first_air_date} / ${data?.last_air_date}` : data?.release_date}
            />
            {
                media_type == 'tv'
                ? <div>
                    <DetailCard key_detail={"Temporadas:"} value={data?.number_of_seasons}/>
                    <DetailCard key_detail={"Episodios:"} value={data?.number_of_episodes}/>
                </div>
                : <div></div>
            }
            <DetailCard key_detail={"Pais:"} value={data?.origin_country}/>
            <DetailCard key_detail={"Director:"} value={data?.created_by?.map(item => item.name)}/>
        </div>
    )
}

export default Details