
import React from 'react'

function VideoMovie({_ID}) {
    return (
        <div className='box_video'>
            <iframe 
                src={`https://vidsrcme.ru/embed/movie/${_ID}`}
                width="100%" 
                height="500" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
    )
}

export default VideoMovie