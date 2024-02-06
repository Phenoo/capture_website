import { serviceItems, serviceItems2 } from '@/data/data'
import Image from 'next/image'
import React from 'react'

import Img1 from  '@/assets/star.png'
import Img2 from  '@/assets/scuba.png'


const Offers = () => {
  return (
    <div className='max-w-7xl mx-auto p-4 text-center py-12 relative'>
        <h4 className='font-semibold text-xl sm:text-3xl lg:text-4xl text-[#24246B] capitalize'>
            Working with us
        </h4>
        <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12'>
            {
                serviceItems2.map((item, i: number) => (
                    <div key={i} className='space-y-4'>
                        <div className='mx-auto w-full flex flex-col justify-center items-center h-22'>
                            <Image src={item.image} alt='icon' width={100} height={100} className='' />
                        </div>
                        <h4 className='text-center font-semibold text-lg sm:text-xl lg:text-2xl text-[#24246B]'>
                            {item.Service}
                        </h4>
                        <p className='text-base text-[#001233] font-light text-center'>
                            {item.Description}
                        </p>
                    </div>
                ))
            }
        </div>

        <div className="absolute bottom-8 left-4 md:-left-6 w-[20px] md:w-[40px]">
        <Image src={Img1} alt='engine' className='animate-spin' />
      </div>

      <div className="absolute top-8 right-4 w-[30px] ">
        <Image src={Img2} alt='engine'  />
      </div>
    </div>
  )
}

export default Offers