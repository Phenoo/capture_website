import Image from 'next/image'
import React from 'react'

import story from "@/assets/Our Story.svg"
import Img1 from  '@/assets/undraw_under_construction_-46-pa.svg'

const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-16  p-2 max-w-6xl mx-auto relative'>
        <div>
            <h4 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Our Story</h4>
            <br />
            <p className='w-full md:w-96'>
            At Capture Group, our journey began with a shared passion for transforming spaces into exceptional environments. Founded in 2021, we set out to redefine the fitout and refurbishment experience in Sydney, Australia.
            </p>

        </div>
        <div className='space-y-4'>
          <div className='w-full'>
            <Image
              src={story}
              alt='story'
              className='w-full'
              width={500}
              height={400}
            />
          </div>
            <p className='text-base'>
            Driven by a commitment to excellence and innovation, our mission is simple: to bring visions to life. From the initial spark of an idea to the final flourish of construction, we&apos;ve dedicated ourselves to mastering the art of design and construct.
            </p>
        </div>

        <div className="absolute bottom-8 left-4 md:-left-4 w-32 md:w-40">
        <Image src={Img1} alt='engine' className='animate-pulse' />
      </div>
    </div>
  )
}

export default About