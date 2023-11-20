import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type ColumnProps = {
    image: string[],
    y?: any
}

export default function Column({ image, y = 0 }: ColumnProps) {
    return (
        <motion.div style={{ y }} className='column relative w-[25%] gap-[2vw]  lg:gap-[1vw] min-w-[250px] flex flex-col whitespace-nowrap'>
            {
                image.map((src, index) => (
                    <div key={index} className=' rounded-[1vw] overflow-hidden w-full h-full relative'>
                        <Image
                            src={src}
                            alt="Picture of the author"
                            layout='fill'
                            className='object-cover  shadow-sm'
                        />
                    </div>
                ))
            }
        </motion.div>
    )
}
