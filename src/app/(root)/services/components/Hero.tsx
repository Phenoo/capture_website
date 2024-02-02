import Book from '@/components/Book'
import React from 'react'

const Hero = () => {
  return (
    <div className=' h-full relative footer flex justify-center flex-col items-center'>
        <div className='grid min-h-[700px] grid-cols-1 md:grid-cols-2 gap-8  text-white pt-28 md:pt-14'>
            <div className='h-full  space-y-4 p-4 md:p-8 lg:p-16 justify-center flex flex-col gap-8'>
            <h4 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#fff] tracking-wider font- '>
                    Experience the difference <br /> build with <br />
                </h4>
                <span className='my-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-[#fff] font-bold'>
                        Capture
                    </span>
                <p className='mt-8'>
                Transform your Sydney office, fitness, beauty, retail or hospitality space with our expert design and construct fitout services
                </p>
                
            </div>
            <Book />
        </div>
    </div>  
    )
}

export default Hero