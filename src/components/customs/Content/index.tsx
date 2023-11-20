'use client'

import { useAppSelector } from '@/hooks/redux'
import React from 'react'

type ContentProps = {
    children: React.ReactNode
    className?: string
    contentChange: React.ReactNode
}

export default function Content({ children, className, contentChange }: ContentProps) {

    const language = useAppSelector(state => state.language.changeLanguage)

    return (
        <div className={`${className}`}>
            {
                language === 'en' ? (
                    <>
                        {children}
                    </>
                ) : (
                    <>
                        {contentChange}
                    </>
                )
            }
        </div>
    )
}
