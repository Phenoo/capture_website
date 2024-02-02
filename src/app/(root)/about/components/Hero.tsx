import { Button } from '@/components/ui/button'
import React from 'react'

import ourproject from "@/assets/Our Projects.png"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='min-h-screen h-full relative max-w-6xl mx-auto flex justify-center flex-col items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-4 justify-center flex flex-col gap-4 md:gap-8 p-4 md:pt-0 pt-28 md:p-0'>
            <h4 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#001233] tracking-wider font-'>
                    Experience the difference <br /> build with <br />
                </h4>
                <span className='my-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-[#001233] font-bold'>
                        Capture
                    </span>
                <p className='mt-8'>
                Transform your Sydney office, fitness, beauty, retail or hospitality space with our expert design and construct fitout services
                </p>
                <Button className='bg-[#011E30] w-fit rounded-3xl'>
                    Learn More
                </Button>
            </div>
            <div>
                <Image 
                    src={ourproject}
                    alt='Oheroabout'
                    width={500}
                    height={600}
                />
            </div>
        </div>
    </div>
  )
}

export default Hero