import { useEffect, useEffectEvent, useState } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useApiData } from "../context/ApiData";

import { LoaderXXL } from "../layouts/Loaders";

function LoadingPage() {
    const [isLoadingPage, setIsLoadingPage] = useState(false);

    const { loading, loadingProfile } = useApiData()
    const location = useLocation()

    useEffect(() => {
        if(location.hash === ""){
            setIsLoadingPage(true);
            const timer = setTimeout(() => setIsLoadingPage(false), 700);
            
            return () => clearTimeout(timer);
        }
    }, [location])

    return (
        <>
            {isLoadingPage || loading ? <LoaderXXL/> : <Outlet />}
        </>
    )
}

export default LoadingPage