import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

import fitout from "@/assets/fitout.svg"
import ssyny from "@/assets/syndy.svg"

import Img1 from  '@/assets/undraw_qa_engineers_dg-5-p.svg'


const Smart = () => {
  return (
    <div className='bg-[#979DAC] text-[#001233] py-12 relative'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 p-2'>
        <div className='flex gap-4'>
         <div>
          <Image 
              src={fitout}
              alt='fitout'
              width={250}
              height={250}
              className=''
            />
            <p className='text-base'>
            Sydney Office Fit out
            </p>
         </div>

         <div>
          <Image 
              src={ssyny}
              alt='fitout'
              width={250}
              height={500}
              className=''
            />
            <p className='text-base'>
            Cafe and Woekspace Refurbishment
            </p>
         </div>
        </div>
        <div className='space-y-4'>
          <h4 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
          Why we are the smart choice
          </h4>
          <p className='md:w-96 text-base'>
          What sets us apart is not just our expertise in office, fitness, shop, beauty, and commercial fitouts, but our unwavering commitment to understanding your unique vision. We believe that every space tells a story, and through our meticulous process, we ensure that your narrative unfolds seamlessly.
          </p>
          <Button className='bg-white text-[#001233] hover:text-white rounded-3xl'>
            Contact Us 
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 right-4 w-28">
        <Image src={Img1} alt='engine' className='animate-pulse' />
      </div>
    </div>
  )
}

export default Smart