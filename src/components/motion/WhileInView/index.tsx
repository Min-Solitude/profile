'use client'

import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

interface WhileInViewProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    delay?: number;
    style?: React.CSSProperties
}

const WhileInView = ({ children, className, id, delay, style }: WhileInViewProps) => {
    const ref = useRef<any>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            id={id}
            ref={ref}
            className={`w-full ${className}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: delay ? delay : 0 }}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default WhileInView;