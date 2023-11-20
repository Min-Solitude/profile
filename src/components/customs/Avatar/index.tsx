'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Button from '../Button'
import IonIcon from '@reacticons/ionicons'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { ChangeLanguage } from '@/store/reducer/languages/language.reducer'
import { IMAGES } from '@/assets'
import ZoomArt from '../ZoomArt'

type AvatarProps = {
    className?: string
    image: any
}

export default function Avatar({ image, className }: AvatarProps) {

    const dispatch = useAppDispatch()
    const language = useAppSelector(state => state.language.changeLanguage)
    const [isZoomArt, setIsZoomArt] = React.useState<boolean>(false)

    const handleChangeLanguage = () => {
        if (language === 'en') dispatch(ChangeLanguage('vi'))
        else dispatch(ChangeLanguage('en'))
    }


    return (
        <div className=' w-full flex justify-between items-center duration-150'>
            {
                language === 'en' ? (
                    <motion.div className={`h-[5rem] w-[5rem] border-2 border-[#ececec] shadow-primary rounded-full ${className}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.35 }}
                        onClick={() => setIsZoomArt(!isZoomArt)}
                    >
                        <Image src={image} alt="avatar" width={500} height={500} className={`rounded-full w-full h-full`} />
                    </motion.div>
                ) : (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.35 }}
                        className='h-[5rem] w-[5rem] relative flex justify-center items-center'
                    >
                        <Image src={IMAGES.memoji} alt="avatar" width={70} className='absolute' />
                    </motion.span>
                )
            }
            <Button kind='primary' className='gap-4'
                onClick={() => handleChangeLanguage()}
            >
                <IonIcon name='sync-outline' className='text-[#313131] text-xl' />
                <span className='font-medium'>
                    {
                        language === 'en' ? 'Switch' : 'Chuyển đổi'
                    }
                </span>
            </Button>
            {
                isZoomArt && <ZoomArt images={image} close={() => setIsZoomArt(false)} />
            }
        </div>
    )
}
