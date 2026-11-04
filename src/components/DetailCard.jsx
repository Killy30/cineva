import React from 'react'

function DetailCard({key_detail, value}) {
    return (
        <div className='detail_card'>
            <div>
                <strong>{key_detail}</strong>
            </div>
            <div>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default DetailCard