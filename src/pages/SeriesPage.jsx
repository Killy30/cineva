
import React, { useEffect } from 'react'
import SeriesList from '../layouts/SeriesList'
import Paginations from '../layouts/Paginations'
import { useApiData } from '../context/ApiData'
import { useParams } from 'react-router-dom'
import FooterPages from '../layouts/FooterPages'

function SeriesPage() {
    const { seriesData, getApiTMDBTVshow } = useApiData()
    const { page } = useParams()

    return (
        <>
            <div className='content_page'>
                <div className="title_page">
                    <h4>Series online</h4>
                </div>
                <SeriesList series={seriesData?.results} />
                <Paginations
                    total_pages={500}
                    media_type={'series'}
                    getData={getApiTMDBTVshow}
                />
            </div>
            <FooterPages />
        </>
    )
}

export default SeriesPage