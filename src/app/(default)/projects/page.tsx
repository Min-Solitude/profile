import Item from '@/components/customs/Item'
import Section from '@/components/motion/Section'
import React from 'react'
import FilterProject from './components/FilterProject'

const dataProject = [
    {
        id: 1,
        name: 'Project 1',
        thumbnail: 'https://picsum.photos/1980/1440',
    },
    {
        id: 2,
        name: 'Project 2',
        thumbnail: 'https://picsum.photos/1980/1440',
    },
    {
        id: 3,
        name: 'Project 3',
        thumbnail: 'https://picsum.photos/1980/1440',
    },
    {
        id: 4,
        name: 'Project 4',
        thumbnail: 'https://picsum.photos/1980/1440',
    },
    {
        id: 5,
        name: 'Project 5',
        thumbnail: 'https://picsum.photos/1980/1440',
    },
    {
        id: 6,
        name: 'Project 6',
        thumbnail: 'https://picsum.photos/1980/1440',
    }
]

export default function ProjectsPage() {
    return (
        <Section className="flex  flex-col items-center">
            <div className="w-full min-h-screen duration-150 md:w-[90%] lg:w-[80%] p-3 lg:p-0 xl:w-[70%] 2xl:w-[60%]  flex justify-start   items-start">
                <div className=' mt-[20vh] bg-white px-3 md:px-12 rounded-2xl shadow-secondary py-12 md:mt-[10vh] w-full flex flex-col gap-8'>
                    <FilterProject projects={dataProject} />
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-[2vw] xl:gap-[1vw] lg:grid-cols-3'>
                        {
                            dataProject.map((project, index) => (
                                <Item key={index} name={project.name} thumbnail={project.thumbnail} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Section>
    )
}
