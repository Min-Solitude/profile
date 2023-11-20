import Section from '@/components/motion/Section'
import React from 'react'
import ScrollImage from './components/ScrollImage'
import AnimateText from '@/components/customs/AnimateText'
import Content from '@/components/customs/Content'
import Item from '@/components/customs/Item'

export default function MediaPage() {
    return (
        <Section className="flex  flex-col items-center">
            <div className="w-full min-h-screen duration-150 md:w-[90%] lg:w-[80%] p-3 lg:p-0 xl:w-[70%] 2xl:w-[60%]  flex flex-col items-center">
                <div className='h-screen flex justify-center items-center'>
                    <AnimateText text='Media' once className='Patua-One text-6xl uppercase translate-y-[-8rem] text-[#505050] lg:text-9xl' />
                </div>
                <ScrollImage />
                <div className='h-screen flex flex-col items-start w-full gap-8 justify-start py-16'>
                    <Content
                        text={`Story about me`}
                        vn_text={`Câu chuyện về tôi`}
                        className='font-bold text-2xl text-center text-[#505050] lg:text-6xl' />

                    <Item
                        kind='blog'
                        thumbnail='https://i.pinimg.com/736x/23/b0/d1/23b0d1befaa8eea4eee0b2ee084cbd1e.jpg'
                        vn_name='Điều tôi thấy tuyệt vời nhất là gì?'
                        name='What is the best thing I see?'
                        description='What makes me feel passionate about working in this industry? I personally find it quite humorous because it does not come from passion, skill, talent, etc. But simply from my'
                        vn_description='Điều gì khiến tôi cảm thấy có đam mê khi làm việc trong ngành này. Bản thân tôi thấy nó khá là hài hước bởi vì nó không xuất phát từ đam mê, kỹ năng, tài năng, ... Mà đơn giản chỉ xuất phát từ việc tôi'
                    />
                </div>
            </div>
        </Section >
    )
}
