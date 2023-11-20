'use client'

import React from 'react'
import { motion } from 'framer-motion'

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    kind?: 'primary' | 'secondary' | 'default';
}

export default function Button({ children, className, onClick, kind = 'default' }: ButtonProps) {

    if (kind === 'secondary') return (
        <motion.button className={`flex justify-center bg-white p-2 border-2 text-[#5a5a5a] rounded-full hover:shadow-secondary duration-150 active:shadow-secondary items-center ${className}`}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            onClick={onClick}
        >
            {children}
        </motion.button>
    )

    if (kind === 'primary') return (
        <motion.button className={`flex justify-center bg-transparent outline-none py-0 h-[36px] px-[12px] rounded-full border-2 hover:shadow-secondary duration-150 active:shadow-secondary cursor-pointer items-center ${className}`}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            onClick={onClick}
        >
            {children}
        </motion.button>
    )

    return (
        <motion.button className={`flex justify-center items-center ${className}`}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            onClick={onClick}
        >
            <p className='font-medium'>{children}</p>
        </motion.button>
    )
}
