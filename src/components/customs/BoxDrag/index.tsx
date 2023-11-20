'use client'
import { motion } from 'framer-motion'

import React from 'react'

type BoxDragProps = {
    children: React.ReactNode
    className?: string
}

export default function BoxDrag({ children, className }: BoxDragProps) {
    return (
        <motion.div className={`cursor-pointer ${className}`}
            drag
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        >
            {children}
        </motion.div>
    )
}
