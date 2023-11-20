import Image from 'next/image'
import React from 'react'
import Content from '../Content'
import Link from 'next/link'

type ItemProps = {
    kind?: 'project' | 'blog' | 'skill'
    className?: string
    id?: number
    name: string
    thumbnail: any
    vn_name?: string
    description?: string
    vn_description?: string
    href?: string
}

export default function Item({ kind = 'project', href, description, vn_description, vn_name, className, id, name, thumbnail }: ItemProps) {

    if (kind === 'blog') return (
        <div className={`w-full bg-white group pb-4 rounded-xl overflow-hidden flex flex-col gap-4 shadow-tertiary ${className}`}>
            <div className='h-[24vh] 2xl:h-[30vh] rounded-xl overflow-hidden'>
                <Image src={thumbnail} alt={name} width={1980} height={1440} className='w-full h-full group-hover:scale-110 duration-300 group-hover:brightness-75 object-cover' />
            </div>
            <div className='px-4 2xl:px-8 2xl:py-4 flex flex-col gap-2'>
                <Content
                    text={name}
                    vn_text={vn_name}
                    className='font-semibold text-lg' />

                <Content
                    text={description}
                    vn_text={vn_description}
                    className='text-sm text-[#949494] line-clamp-3' />
            </div>
        </div>
    )

    return (
        <Link href={`${href}`} className=' h-[12rem] cursor-pointer active:scale-90 group duration-150 relative overflow-hidden shadow-tertiary rounded-xl bg-white'>
            <Image src={thumbnail} alt="" className="w-full group-hover:scale-110 duration-300 h-full object-cover" />
            <div className='top-0 left-0 w-full h-full bg-transparent absolute duration-300 group-hover:bg-[#00000073] flex justify-center items-center'>
                <Content text={name} vn_text={vn_name} className='text-white opacity-0  group-hover:opacity-100 duration-300 delay-150 text-xl font-semibold text-center' />
            </div>
        </Link>
    )
}
