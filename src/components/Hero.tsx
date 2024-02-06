import React from 'react'

import imagehero from "@/assets/Welcome.svg"
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className='min-h-[80vh] md:min-h-screen h-full relative hero w-full flex justify-center flex-col items-center'>
      <div className='flex h-full w-full justify-center items-center max-w-6xl mx-auto p-4'>
        <div className='flex h-full w-full flex-col'>
          <h4 className='text-3xl md:text-4xl lg:text-7xl text-[#001233] font-bold'>
            Design <br />
            Construct <br />
            Capture
            </h4>
            <p className='text-base sm:text-2xl md:text-3xl text-[#001233] '>Elevating Interiors With Precision</p>
            <br />
            <Button className='bg-white text-black w-fit uppercase rounded-md hover:bg-white/45'>
              Get In Touch
            </Button>
        </div>

      </div>
        {/* <Image src={imagehero} alt='hero' className='object-contain w-full h-full' fill  /> */}
    </div>
  )
}

export default Hero