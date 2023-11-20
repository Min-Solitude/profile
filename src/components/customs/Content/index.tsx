'use client'

import { useAppSelector } from '@/hooks/redux'
import React from 'react'

type ContentProps = {
    text: any
    className?: string
    vn_text: any
}

export default function Content({ text, className, vn_text }: ContentProps) {

    const language = useAppSelector(state => state.language.changeLanguage)

    return (
        <>
            {
                language === 'en' ? (
                    <p className={className}>
                        {text}
                    </p>
                ) : (
                    <p className={className}>
                        {vn_text}
                    </p>
                )
            }
        </>
    )
}
