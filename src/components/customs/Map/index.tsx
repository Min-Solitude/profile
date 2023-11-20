
import React from 'react'

type MapProps = {
    address: string
}

export default function Map({ address }: MapProps) {

    return (
        <div className='w-full h-full absolute top-0 left-0 overflow-hidden'>
            <iframe src={address} width="600" height="450" loading="lazy" className='w-full h-full object-cover'></iframe>
        </div>
    )
}
