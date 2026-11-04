import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Nav from './layouts/Nav.jsx'
import MainPage from './pages/MainPage'
import LoadingPage from './pages/LoadingPage.jsx'
import SeriesPage from './pages/SeriesPage.jsx'
import MoviesPage from './pages/MoviesPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import MovieTvViewPage from './pages/MovieTvViewPage.jsx'

import { ApiRequestProvider } from './context/ApiData.jsx'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'

function App() {

  return (
    <>
      <ApiRequestProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Nav/>}>
              <Route element={<LoadingPage />} >
                <Route path='/' element={<MainPage />} />
                <Route path='/movies/page/:page' element={<MoviesPage />} />
                <Route path='/series/page/:page' element={<SeriesPage />} />
                <Route path='/buscar/:nombre' element={<SearchPage />} />
                <Route path='/ver/:name' element={<MovieTvViewPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ApiRequestProvider>
    </>
  )
}

export default App
