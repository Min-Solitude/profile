'use client'

import React from "react";
import { motion } from "framer-motion";

interface sectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    delay?: number;
    style?: React.CSSProperties
}

const Section = ({ children, className, id, delay, style }: sectionProps) => {

    return (
        <motion.section
            id={id}
            className={`w-full ${className}`}
            style={style}
        >
            {children}
        </motion.section>
    );
};

export default Section;