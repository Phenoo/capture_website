import Image from 'next/image'
import React from 'react'

import office from "@/assets/7.svg"
import retail from "@/assets/10.svg"
import beauty from "@/assets/15.svg"
import hospitality from "@/assets/9.svg"

const Industry = () => {
  return (
    <div className=' bg-[#979DAC] p-4 sm:p-6 md:p-8 py-12'>
       <div className='max-w-7xl mx-auto'>
        <h4 className='font-black text-xl sm:text-3xl lg:text-5xl capitalize'>
            Industries
            </h4>  
            <div className='mt-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 font-bold'>
                    <div className='relative h-96  md:h-[450px] w-full '>
                        <Image src={office} alt='office'fill className='w-full h-full object-cover' />
                        <div className='bg-black/50 absolute top-0 w-full h-full justify-center items-center flex text-white text-sm md:text-lg uppercase'>
                            <h4>
                                office
                            </h4>
                        </div>
                    </div>
                    <div className='relative h-96  md:h-[450px] w-full'>
                        <Image src={retail} alt='office'fill className='w-full h-full object-cover' />
                        <div className='bg-black/50 absolute top-0 w-full h-full justify-center items-center flex text-white text-sm md:text-lg uppercase'>
                            <h4>
                                Retail
                            </h4>
                        </div>
                    </div>
                    <div className='relative h-96  md:h-[450px] w-full'>
                        <Image src={hospitality} alt='office'fill className='w-full h-full object-cover' />
                        <div className='bg-black/50 absolute top-0 w-full h-full justify-center items-center flex text-white text-sm md:text-lg uppercase'>
                            <h4>
                                hospitality
                            </h4>
                        </div>
                    </div>
                    <div className='relative h-96  md:h-[450px] w-full'>
                        <Image src={beauty} alt='office'fill className='w-full h-full object-cover' />
                        <div className='bg-black/50 absolute top-0 w-full h-full justify-center items-center flex text-white text-sm md:text-lg uppercase'>
                            <h4>
                                beauty
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Industry