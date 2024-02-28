import Book from '@/components/Book'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const HeroCategory = ({title, description, image}: {title: string, description: string, image: any}) => {
  return (
    <div className=' h-full  w-full flex justify-center flex-col items-center '>
        <div className='w-full grid  min-h-[700px] grid-cols-1 lg:grid-cols-2 text-white '>
        <div className={cn('h-full w-full min-h-[600px] relative')}>

            <Image src={image || "https://res.cloudinary.com/dnir0cslk/image/upload/v1707266612/Welcome_c6i6xj.webp"} 
                alt={title || "services"}
                width={600}
                height={600}
                className='w-full h-full relative object-cover'
            />
                <div className='absolute top-0 bg-black/30 w-full h-full  space-y-4 px-4  md:px-8 lg:px-16 justify-center flex flex-col gap-8'>
                <h4 className='text-3xl md:text-4xl lg:text-6xl text-[#fff] font-medium'>
                  {title}
                </h4>

                <p className='mt-8 text-base md:text-lg '>
                    {description}
                </p>
                </div>
            </div>
            <Book />
        </div>
    </div>  
    )
}

export default HeroCategory