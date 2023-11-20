import { IMAGES } from '@/assets'
import Avatar from '@/components/customs/Avatar'
import Button from '@/components/customs/Button'
import Content from '@/components/customs/Content'
import Section from '@/components/motion/Section'
import IonIcon from '@reacticons/ionicons'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <Section className="flex  flex-col items-center">
            <div className="w-full h-[86vh] duration-150 md:w-[90%] lg:w-[80%] p-3 lg:p-0 xl:w-[70%] 2xl:w-[60%]  flex justify-center md:items-center items-start">
                <div className=' bg-white rounded-2xl w-full h-full items-center relative shadow-secondary overflow-hidden  md:h-[70vh]'>
                    <Image src={IMAGES.background} alt="" className="w-full h-full object-cover" />
                    <div className='absolute top-0 gap-4 left-0 w-full h-full flex flex-col items-center justify-center'>
                        <div className='w-[8rem] h-[8rem] rounded-full bg-white shadow-primary overflow-hidden border-4 border-white'>
                            <Image src={IMAGES.about} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className='text-center'>
                            <Content className='font-bold text-white text-2xl' text='Vo Ngoc Min Kien' vn_text={'Võ Ngọc Min Kiên'} />
                            <Content className=' text-white text-base' text='Web developer' vn_text={'Nhà phát triển web'} />
                        </div>
                        <div className='w-full flex mt-6 flex-col items-center gap-4'>
                            <Link href={'https://github.com/Min-Solitude'} className='w-full max-w-[20rem]'>
                                <Button kind='primary' className='w-full text-[#ffffff] py-5 gap-2 '>
                                    <IonIcon name='logo-github' className='text-2xl' />
                                    <span className='font-medium'>Github</span>
                                </Button>
                            </Link>
                            <Link href={'https://www.facebook.com/kien.mon.33/'} className='w-full max-w-[20rem]'>
                                <Button kind='primary' className='w-full text-[#ffffff] py-5 gap-2 '>
                                    <IonIcon name='logo-facebook' className='text-2xl' />
                                    <span className='font-medium'>Facebook</span>
                                </Button>
                            </Link>
                            <Link href={'https://www.instagram.com/ktys4tt/'} className='w-full max-w-[20rem]'>
                                <Button kind='primary' className='w-full text-[#ffffff] py-5 gap-2 '>
                                    <IonIcon name='logo-instagram' className='text-2xl' />
                                    <span className='font-medium'>Instagram</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
