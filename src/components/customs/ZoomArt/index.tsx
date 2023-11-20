import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import BoxDrag from '../BoxDrag'

type ZoomArtProps = {
    images: string
    close: () => void
}

export default function ZoomArt({ images, close }: ZoomArtProps) {
    return (
        <motion.div className='fixed top-0 left-0 bottom-0 right-0 bg-[#ffffff] z-50 flex justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            onClick={() => close()}
        >
            <BoxDrag className='w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] lg:w-[30vw] lg:h-[30vw] rounded-3xl overflow-hidden shadow-primary duration-150 bg-yellow-300'>
                <Image src={images} alt="" className='w-full h-full object-cover' />
            </BoxDrag>
        </motion.div>
    )
}
