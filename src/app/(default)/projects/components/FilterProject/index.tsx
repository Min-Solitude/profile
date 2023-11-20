import Button from '@/components/customs/Button'
import React from 'react'

type FilterProjectProps = {
    setActive?: any
    active?: any
    setFilter?: any
    projects?: any
}

export default function FilterProject({ setActive, active, setFilter, projects }: FilterProjectProps) {
    return (
        <div className='flex flex-wrap gap-2 items-center'>
            <Button kind='secondary' className='text-sm font-semibold px-6'>
                All
            </Button>
            <Button kind='secondary' className='text-sm font-semibold px-6'>
                Entertainment
            </Button>
            <Button kind='secondary' className='text-sm font-semibold px-6'>
                Service
            </Button>
        </div>
    )
}
