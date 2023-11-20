import IonIcon from '@reacticons/ionicons'
import Link from 'next/link'
import React from 'react'

type BackProps = {
    className?: string;
}

export default function Back({ className }: BackProps) {
    return (
        <Link href={`/`} className={`flex justify-center w-[3rem] h-[3rem] border-2 border-transparent hover:shadow-secondary duration-150  rounded-full bg-[#d6d6d6] items-center ${className}`}>
            <IonIcon name="close-outline" className=" font-bold text-2xl" />
        </Link>
    )
}
