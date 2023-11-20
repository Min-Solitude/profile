'use client'

import React, { useEffect, useRef, useState } from 'react'
import Column from './Column'
import { useScroll, useTransform } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import useDimension from '@/hooks/useDimension'

const Image = [
    'https://i.pinimg.com/564x/95/b4/94/95b494029e85f24666e12c76a436d5ac.jpg',
    'https://i.pinimg.com/564x/f4/20/70/f42070e93fdb3e5b5fea2096ae6e9bc2.jpg',
    'https://i.pinimg.com/564x/63/42/d6/6342d6765ad44ae6772bc6f1d3d8f14a.jpg',
    'https://i.pinimg.com/564x/88/57/dc/8857dcfe3810fb1964cbe4adeef08d65.jpg',
    'https://i.pinimg.com/564x/5b/fb/58/5bfb585abb724df3da1a9d05de5fac74.jpg',
    'https://i.pinimg.com/564x/89/cc/d2/89ccd246582201b22bacd1d60fd9d063.jpg',
    'https://i.pinimg.com/564x/b8/2b/60/b82b6060391e9b619e2c2979a3572f37.jpg',
    'https://i.pinimg.com/564x/f8/ce/6b/f8ce6bd9f0774cb539a9c5f7a5cf5e00.jpg',
    'https://i.pinimg.com/564x/ab/da/da/abdada78048e58dae5f4068f5d9ba724.jpg',
    'https://i.pinimg.com/564x/aa/b1/ab/aab1ab72d3ad3d141b43c598b090961e.jpg',
    'https://i.pinimg.com/564x/ab/5b/e5/ab5be55d89d08e4230da0ca6d3a77ddd.jpg',
    'https://i.pinimg.com/564x/14/a8/b9/14a8b9fc0dea49293764e4fbd36f8c85.jpg',
    'https://i.pinimg.com/564x/2d/e0/e3/2de0e3ccaa1973d8235e2ec099b5d3f6.jpg',
    'https://i.pinimg.com/564x/fd/27/e4/fd27e45d0e856852e92f9f5a740ca22f.jpg',
    'https://i.pinimg.com/564x/fa/8d/d4/fa8dd471eecb4bea07d9c1f35ed44847.jpg',
    'https://i.pinimg.com/564x/ca/1e/fb/ca1efbed7b37782391dd857eb2748199.jpg',
    'https://i.pinimg.com/564x/5b/95/8d/5b958d23a53103fd39a24b64ebd5d3e5.jpg',
    'https://i.pinimg.com/564x/d5/dc/f1/d5dcf1aa842f0ef97163e072999a4441.jpg',
    'https://i.pinimg.com/736x/71/85/3b/71853b886e1c76fb6f2f1c205d8fcb31.jpg',
]

export default function ScrollImage() {

    const gallery = useRef<HTMLDivElement>(null)
    const { height } = useDimension()
    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect(() => {
        const lenis = new Lenis()
        const raf = (time: number) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])

    return (
        <>
            <div ref={gallery} className='overflow-hidden rounded-2xl w-full h-[160vh] bg-[#ffffff] shadow-secondary flex flex-row gap-[2vw]  lg:gap-[1vw] lg:p-[1vw] p-[2vw] box-border'>
                <Column image={[Image[0], Image[1], Image[2], Image[3], Image[4]]} y={y} />
                <Column image={[Image[6], Image[6], Image[5], Image[7], Image[8]]} y={y2} />
                <Column image={[Image[9], Image[10], Image[11], Image[12], Image[13]]} y={y3} />
                <Column image={[Image[14], Image[15], Image[16], Image[17], Image[18]]} y={y4} />
            </div>
        </>
    )
}
