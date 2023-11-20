import Item from '@/components/customs/Item'
import Section from '@/components/motion/Section'
import React from 'react'
import FilterProject from './components/FilterProject'
import Content from '@/components/customs/Content'
import Image from 'next/image'
import { IMAGES } from '@/assets'

export default function ProjectsPage() {
    return (
        <Section className="flex  flex-col items-center">
            <div className="w-full  min-h-[86vh] duration-150 md:w-[90%] lg:w-[80%] p-3 lg:p-0 xl:w-[70%] 2xl:w-[60%]  flex justify-center md:items-center items-start">
                <div className='w-full h-full md:bg-[#ffffff] md:shadow-tertiary rounded-2xl flex flex-col p-4 md:p-8 gap-8 items-center relative  md:h-[70vh]'>
                    <Content text={'My Projects'} vn_text={'Các dự án của tôi'} className='font-extrabold md:py-8 text-transparent text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' />
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>


                        <Item thumbnail={IMAGES.nevent} name='Nevent' href='https://nevent.io.vn/' />
                        <Item thumbnail={IMAGES.nefy} name='Nefy' href='https://www.nefy.website/' />

                    </div>
                </div>
            </div>
        </Section>
    )
}
