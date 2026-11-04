import { useContext, createContext, useState, useEffect, useLayoutEffect } from "react";

const ApiRequestContext = createContext()

export const useApiData = () => {
    const context = useContext(ApiRequestContext)
    if (!context) throw new Error('El context no se ha creado')
    return context
}

export function ApiRequestProvider({ children }) {
    const [moviesData, setMoviesData] = useState({})
    const [movieTVData, setMovieTV] = useState({})
    const [dataSearch, setDataSearch] = useState({})
    const [seriesData, setSeriesData] = useState({})
    const [seasonTv, setSeason] = useState({})
    const [backdropsSlider, setBackdropsSlider] = useState({})
    const [trending, setTrending] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingProfile, setLoadingProfile] = useState(false)
    const [loadingGetSeason, setLoadingGetSeason] = useState(false)
    const [loadingPagination, setLoadingPagination] = useState(false)
    const [similarMoviesSeries, setSimilarMoviesSeries] = useState([])


    const options_header = {
        method: "GET",
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.VITE_ACCESS_TOKEN
        }
    }

    const getBackdropsSlider = async () => {
        try {
            // setLoading(true)
            // const req = await fetch('../../data/movies_data.json')
        } catch (error) {
            console.error(error)
        }
    }

    const getApiTMDBMovies = async (page) => {
        try {
            setLoadingPagination(true)
            const req = await fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}`, options_header)
            const res = await req.json()
            setMoviesData(res)
            setLoadingPagination(false)
        } catch (error) {
            console.error(error)
        }
    }

    const getApiTMDBTVshow = async (page) => {
        try {
            setLoadingPagination(true)
            const req = await fetch(`https://api.themoviedb.org/3/discover/tv?language=en-US&page=${page}`, options_header)
            const res = await req.json()
            setSeriesData(res)
            setLoadingPagination(false)
        } catch (error) {
            console.error(error)
        }
    }

    const getAllTrending = async () => {
        try {
            setLoading(true)
            const req = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options_header)
            const res = await req.json()
            setTrending(res?.results.slice(0, 6))
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const getApiTMDBSearch = async (name) => {
        try {
            // setLoading(true)
            const req = await fetch(`https://api.themoviedb.org/3/search/multi?query=${name}`, options_header)
            const res = await req.json()
            setDataSearch(res)
            // setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const findMovieTv = async ({ id, media_type }) => {
        try {
            setLoadingProfile(true)
            const req = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}?language=es-ES`, options_header)
            const res = await req.json()
            setMovieTV(res)
            setLoadingProfile(false)
        } catch (error) {
            console.error(error)
        }
    }

    const getSeasonTv = async ({tv_id, season_number}) => {
        try {
            setLoadingGetSeason(true)
            const req = await fetch(`https://api.themoviedb.org/3/tv/${tv_id}/season/${season_number}?language=es-ES`, options_header)
            const res = await req.json()
            
            setSeason(res)
            setLoadingGetSeason(false)
        } catch (error) {
            console.error(error)
        }
    }

    const getSimilarMoviesSeriesAPI = async ({ id, media_type }) => {
        try {
            // setLoadingProfile(true)
            const req = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}/recommendations?language=es-ES`, options_header)
            const res = await req.json()
            setSimilarMoviesSeries(res?.results.slice(0, 10))
            // setLoadingProfile(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAllTrending()
    }, [])

    return (<ApiRequestContext.Provider value={{
        backdropsSlider,
        moviesData,
        seriesData,
        dataSearch,
        trending,
        movieTVData,
        seasonTv,
        loading,
        loadingProfile,
        loadingGetSeason,
        similarMoviesSeries,
        getApiTMDBMovies,
        getApiTMDBSearch,
        findMovieTv,
        getSeasonTv,
        getApiTMDBTVshow,
        getSimilarMoviesSeriesAPI
        
    }} >
        {children}
    </ApiRequestContext.Provider>)

}