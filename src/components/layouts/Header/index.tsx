'use client'

import Logo from '@/components/customs/Logo';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './components/NavLink';
import { useAppSelector } from '@/hooks/redux';

type HeaderProps = {
    className?: string;
}

export default function Header({ className }: HeaderProps) {

    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const language = useAppSelector(state => state.language.changeLanguage)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()

        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }

    })

    return (
        <motion.header className={`z-50 bg-[#F7F2F2] ${className}`}
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' }
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'linear' }}
        >
            <motion.div className=' w-full m-auto lg:p-0 lg:py-6 md:w-[90%] lg:w-[80%] relative xl:w-[70%] 2xl:w-[60%] duration-150 flex flex-col items-center py-8 gap-8 md:flex-row md:justify-between md:px-8'>
                <Logo />
                <NavLink />
                <Link href='/contact' className={`text-[0.9rem] font-medium hidden md:block `}>
                    {
                        language === 'en' ? 'Contact' : 'Liên hệ'
                    }
                </Link>
            </motion.div>
        </motion.header>
    )
}
