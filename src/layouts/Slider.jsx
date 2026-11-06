
import React, { useEffect, useState, useLayoutEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import SliderInfo from '../components/SliderInfo';

import { useApiData } from '../context/ApiData';

import "../styles/slider.css"

function Slider() {
    const { backdropsSlider, trending = [] } = useApiData();

    return (
        <div className='slider'>
            <div className="shodow_bg"></div>
            <Carousel data-bs-theme="dark" className='h-100'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${import.meta.env.VITE_IMAGE_URL_BACKDROP}${trending[0]?.backdrop_path}`}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <strong>CINEVA ORIGINAL · NOW STREAMING</strong> */}
                        <SliderInfo data={trending[0]} />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${import.meta.env.VITE_IMAGE_URL_BACKDROP}${trending[1]?.backdrop_path}`}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        {/* <strong>CINEVA ORIGINAL · NOW STREAMING</strong> */}
                        <SliderInfo data={trending[1]} />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${import.meta.env.VITE_IMAGE_URL_BACKDROP}${trending[2]?.backdrop_path}`}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <strong>CINEVA ORIGINAL · NOW STREAMING</strong> */}
                        <SliderInfo data={trending[2]} />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${import.meta.env.VITE_IMAGE_URL_BACKDROP}${trending[3]?.backdrop_path}`}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <strong>CINEVA ORIGINAL · NOW STREAMING</strong> */}
                        <SliderInfo data={trending[3]} />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${import.meta.env.VITE_IMAGE_URL_BACKDROP}${trending[4]?.backdrop_path}`}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <strong>CINEVA ORIGINAL · NOW STREAMING</strong> */}
                        <SliderInfo data={trending[4]} />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${import.meta.env.VITE_IMAGE_URL_BACKDROP}${trending[5]?.backdrop_path}`}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <strong>CINEVA ORIGINAL · NOW STREAMING</strong> */}
                        <SliderInfo data={trending[5]} />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider