'use client'

import { useAppSelector } from '@/hooks/redux'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const dataNav = [
    {
        title: 'All',
        title_vi: 'Tất cả',
        href: '/',
    },
    {
        title: 'About',
        title_vi: 'Giới thiệu',
        href: '/about',
    },
    {
        title: 'Projects',
        title_vi: 'Dự án',
        href: '/projects',
    },
    {
        title: 'Media',
        title_vi: 'Media',
        href: '/media',
    },
]

export default function NavLink() {

    const router = usePathname()
    const language = useAppSelector(state => state.language.changeLanguage)

    return (
        <nav className='md:absolute md:left-1/2 md:translate-x-[-50%]'>
            <div className='w-full flex items-center bg-[#EDE9E9] p-1 rounded-full shadow-sm'>
                {
                    dataNav.map((item, index) => {

                        const isActive = router === item.href ? index : null

                        return (
                            <Link href={item.href} key={index} className='text-[0.9rem] font-medium py-[0.4rem] px-5 rounded-full relative'>
                                <span className='hover:text-[#7e7e7e] relative z-50'>{
                                    language === 'en' ? item.title : item.title_vi
                                }</span>
                                {isActive === index && (
                                    <motion.span className='absolute left-0 top-0 z-0 block h-full bg-white rounded-full liner w-full' layoutId='underline' >
                                    </motion.span>
                                )}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}
