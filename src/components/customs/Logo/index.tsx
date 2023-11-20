import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react'

type LogoProps = {
    className?: string;
    onClick?: () => void;
    kind?: 'dark' | 'light';
}

export default function Logo({ className, onClick, kind = 'dark' }: LogoProps) {
    return (
        <div className='md:flex items-center hidden'
            onClick={onClick}
        >
            {
                kind === 'dark' ? <Image src={IMAGES.logo_dark} alt='logo' className={` ${className}`} width={35} height={35} /> : <Image src={IMAGES.logo} alt='logo' className={` ${className}`} width={35} height={35} />
            }
        </div>
    )
}
