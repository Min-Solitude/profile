'use client'

import { useAppSelector } from '@/hooks/redux'
import React from 'react'

export default function Info() {

    const language = useAppSelector(state => state.language.changeLanguage)


    if (language === 'en') return (
        <p className='text-base 2xl:text-lg text-[#313131]'>
            I&#39;m <span className="Patua-One text-black text-3xl">Min</span>, a developer and illustrator from Vietnam. I&#39;m interested in React, Node, Product Design, Jamstack, Startups, Cryptocurrency and Music.
        </p>
    )

    return (
        <p className='text-base 2xl:text-lg text-[#313131]'>
            Tôi là <span className="Patua-One text-black text-3xl">Min</span>, một nhà phát triển và người vẽ tranh đến từ Việt Nam. Tôi quan tâm đến React, Node, Thiết kế sản phẩm, Jamstack, Khởi nghiệp, Tiền điện tử và Âm nhạc.
        </p>
    )
}
