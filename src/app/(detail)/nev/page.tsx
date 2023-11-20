import { IMAGES } from '@/assets'
import Back from '@/components/customs/Back'
import BoxDrag from '@/components/customs/BoxDrag'
import Content from '@/components/customs/Content'
import Section from '@/components/motion/Section'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NevPage() {
    return (
        <Section className="flex  flex-col items-center pb-16">
            <div className="w-full min-h-screen duration-150 md:w-[70%] lg:w-[60%] p-3 lg:p-0 xl:w-[50%] 2xl:w-[40%] flex justify-start flex-col items-center">
                <Back className='my-[8vh]' />
                <div className='w-full flex flex-col gap-8 items-start'>
                    <Content
                        text={'A series of projects called Nevsolit.'}
                        vn_text={'Chuỗi dự án mang tên Nevsolit.'}
                        className='font-bold text-3xl' />
                    <div className='py-2 text-sm font-semibold text-[#383838] shadow-primary px-5 rounded-full bg-[#dddddd]'>
                        Oct 18, 2023
                    </div>
                    <Content
                        text={'I personally want to create some brands for myself. So I started creating a series of projects named after Nev.'}
                        vn_text={'Bản thân tôi muốn tạo ra một số thương hiệu cho bản  thân mình. Nên tôi đã bắt đầu tạo ra một chuỗi dự án mang tiên Nev.'}
                        className='text-base'
                    />
                    <Content
                        text={'What does Nevolit mean? Then I translate this word based on Russian. It means "Add some salt". Why add a little salt? Because I am a rather quiet and bland person, I wanted to build it partly to change myself and especially the language to translate it as the name of the person I love.'}
                        vn_text={'Nevolit có ý nghĩa là? Thì từ này tôi dịch nó dựa trên tiếng Nga. Nó có nghĩa là "Thêm chút muối". Tại sao lại là thêm chút muối? Bởi vì tôi là một người khá là trầm tính và nhạt nhẽo, nên tôi muốn xây dựng nó một phần là muốn thay đổi bản thân mình và đặc biệt là ngôn ngữ để dịch nó là tên của người tôi yêu.'}
                        className='text-base'
                    />
                    <Content
                        vn_text={`Khởi đầu cho chuỗi website này là một website mang tên ${<Link href={'https://www.nevsolit.website/'} className='text-blue-500 underline'>Nevsolit</Link>} đây là trang mở đầu để quảng bá và giới thiệu các dịch vụ của tôi.`}
                        text={`The starting point for this series of websites is a website called ${<Link href={'https://www.nevsolit.website/'} className='text-blue-500 underline'>Nevsolit</Link>} , which is the opening page to promote and introduce my services.`}
                        className='text-base' />

                    <BoxDrag className='h-[30vh] md:h-[40vh] overflow-hidden rounded-2xl bg-white'>
                        <Image src={IMAGES.nevsolit} alt='' className='w-full shadow-primary h-full object-cover' />
                    </BoxDrag>
                    <Content
                        vn_text={`Tiếp đó là các webiste nhằm mục đích phục vụ trong lĩnh vực giải trí, như xem phim, nghe nhạc,... . Và nổi bật nhất trong những website thuộc lĩnh vực giải trí của tôi là ${<Link href={'https://www.nefy.website/'} className='underline text-blue-500'>Nefy</Link>}. Đây là một website phục vụ việc học bằng việc lắng nghe những đoạn nhạc lofi.`}
                        text={`Next are websites aimed at serving the entertainment field, such as watching movies, listening to music,... . And the most prominent among my entertainment websites is ${<Link href={'https://www.nefy.website/'} className='underline text-blue-500'>Nefy</Link>} . This is a website that serves learning by listening to lofi music.`}
                        className='text-base' />

                    <BoxDrag className='h-[30vh] md:h-[40vh] overflow-hidden rounded-2xl bg-white'>
                        <Image src={IMAGES.nefy} alt='' className='w-full shadow-primary h-full object-cover' />
                    </BoxDrag>
                    <Content
                        vn_text={`Và ngoài ra tôi còn hỗ trợ một vài website trong việc sử dụng các dịch vụ hỗ trợ tiện ích. Tiêu biểu là ${<Link href={'https://nevnfc.vercel.app/'} className='underline text-blue-500'>Nenfc</Link>} , đây là website được sử dụng như một chiếc ví điện tử hoạt động với chiếc thẻ vật lí.`}
                        text={`And in addition, I also support a few websites in using utility support services. Typically ${<Link href={'https://nevnfc.vercel.app/'} className='underline text-blue-500'>Nenfc</Link>} , this is a website used as an electronic wallet that works in parallel with a physical card.`}
                        className='text-base' />

                    <BoxDrag className='h-[30vh] md:h-[40vh] overflow-hidden rounded-2xl bg-white'>
                        <Image src={IMAGES.neNFC} alt='' className='w-full shadow-primary h-full object-cover' />
                    </BoxDrag>
                    <Content
                        vn_text='Và đó là một vài website tiêu biểu nằm trong chuỗi dự án của tôi. Ngoài ra tôi còn rất nhiều dự án khác, các bạn có thể tìm hiểu thêm trong Github được đặt trong phần giới thiệu của tôi. Tôi mong bạn có thể thích chuỗi dự án của tôi. Trân trọng cảm ơn!'
                        text='And those are some typical websites in my project series. In addition, I have many other projects, you can learn more in Github located in my introduction section. I hope you can enjoy my project series. Sincerely thank you!'
                        className='text-base' />
                </div>
            </div >
        </Section >
    )
}
