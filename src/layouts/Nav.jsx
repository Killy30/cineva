import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import '../styles/nav.css'
import { useApiData } from "../context/ApiData";

function Nav() {
    const [searchData, setSearchData] = useState({name: ''})
    const [showNavbg, setShowNavbg] = useState(false)

    const { getApiTMDBSearch } = useApiData()

    const navigate = useNavigate()

    const handleSearch = (e) =>{
        e.preventDefault()
        setSearchData({name:'e.target.name.value'})
        const movieTv = e.target.name.value;

        if(movieTv === '') return false
        
        navigate(`/buscar/${movieTv}`)
        e.target.name.value = ''
    }

    window.addEventListener('scroll', ()=> {
        if(window.scrollY > 10){
            setShowNavbg(true)
        }else{
            setShowNavbg(false)
        }
    })
    
    useEffect(()=>{
        if(showNavbg){
            document.querySelector('.nav_header').classList.add('nav_bg')
        }else{
            document.querySelector('.nav_header').classList.remove('nav_bg')
        }
    },[showNavbg])

    return (
        <>
            <nav className="nav_header" data-bs-theme="dark">
                <div className="nav_content">
                    <div className="logo">
                        <strong>CINEVA</strong>
                    </div>
                    <div className="">
                        <ul className="">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/movies/page/1'}>Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/series/page/1'}>TV Show</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form onSubmit={handleSearch} className="d-flex" role="search">
                            <input 
                                className="form-control me-2 desg" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search" 
                                name="name"
                            />
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Nav;
