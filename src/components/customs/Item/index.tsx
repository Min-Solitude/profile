import Image from 'next/image'
import React from 'react'
import Content from '../Content'

type ItemProps = {
    kind?: 'project' | 'blog' | 'skill'
    className?: string
    id?: number
    name: string
    thumbnail: string
    vn_name?: string
    description?: string
    vn_description?: string
}

export default function Item({ kind = 'project', description, vn_description, vn_name, className, id, name, thumbnail }: ItemProps) {

    if (kind === 'blog') return (
        <div className={`w-full bg-white pb-4 rounded-xl overflow-hidden flex flex-col gap-4 shadow-secondary ${className}`}>
            <div className='h-[24vh] rounded-xl overflow-hidden'>
                <Image src={thumbnail} alt={name} width={1980} height={1440} className='w-full h-full object-cover' />
            </div>
            <div className='px-4 flex flex-col gap-2'>
                <Content contentChange={<h1 className='font-semibold text-lg'>{vn_name}</h1>}>
                    <h1 className='font-semibold text-lg'>{name}</h1>
                </Content>
                <Content contentChange={<h1 className='line-clamp-3 text-[#949494] text-sm'>{vn_description}</h1>}>
                    <h1 className='line-clamp-3 text-[#949494] text-sm'>{description}</h1>
                </Content>
            </div>
        </div>
    )

    return (
        <div>
            {
                <div className='w-full h-[50vw] sm:h-[30vw] md:h-[24vw] shadow-secondary lg:h-[16vw] xl:h-[12vw] rounded-2xl overflow-hidden'>
                    <Image src={thumbnail} alt={name} width={200} height={300} className='w-full h-full object-cover' />
                </div>
            }
        </div>
    )
}
