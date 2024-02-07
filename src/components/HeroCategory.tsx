import Book from '@/components/Book'
import React from 'react'

const HeroCategory = ({title, description}: {title: string, description: string}) => {
  return (
    <div className=' h-full relative footer w-full flex justify-center flex-col items-center'>
        <div className='w-full grid min-h-[700px] grid-cols-1 md:grid-cols-2 gap-8  text-white pt-28 md:pt-14'>
            <div className='h-full  space-y-4 p-4 md:p-8 lg:p-16 justify-center flex flex-col gap-8'>
            <h4 className='my-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-[#fff] font-bold'>
                  {title}
                </h4>

                <p className='mt-8'>
                    {description}
                </p>
                
            </div>
            <Book />
        </div>
    </div>  
    )
}

export default HeroCategory