'use client'

import React from 'react'
import { motion } from 'framer-motion'

type PageWrapperProp = {
    children: React.ReactNode
    className?: string
}

const PageWrapper = ({ children, className }: PageWrapperProp) => {
    return (
        <motion.div className={` ${className}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper