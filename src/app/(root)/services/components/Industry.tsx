import Image from 'next/image'
import React from 'react'

import Envison from "@/assets/icon _bulb lighting light_.svg"
import Design from "@/assets/icon _designtools_.svg"
import Craft from "@/assets/icon _building_.svg"
import Support from "@/assets/icon _People Carry_.svg"

const Industry = () => {
  return (
    <div className='flex flex-col sm:gap-12 justify-center items-center gap-8 text-center py-12'>
        <h4 className='text-2xl lg:text-4xl font-bold text-[#24246B]'>
            Industries
        </h4>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            
            <div className='space-y-4 w-52 flex justify-center flex-col text-center items-center'>
                <Image src={Envison} alt='envison' className='' width={40} height={40} />
                <h4 className='text-xl font-medium text-[#979DAC]'>Envision</h4>
            </div>
            <div className='space-y-4 w-52 flex justify-center flex-col text-center items-center'>
                <Image src={Design} alt='design' className='' width={40} height={40} />
                <h4 className='text-xl font-medium text-[#979DAC]'>Design</h4>
            </div>
            <div className='space-y-4 w-52 flex justify-center flex-col text-center items-center'>
                <Image src={Craft} alt='envison' className='' width={40} height={40} />
                <h4 className='text-xl font-medium text-[#979DAC]'>Craft</h4>
            </div>
            <div className='space-y-4 w-52 flex justify-center flex-col text-center items-center'>
                <Image src={Support} alt='envison' className='' width={40} height={40} />
                <h4 className='text-xl font-medium text-[#979DAC]'>Support</h4>
            </div>
        </div>
    </div>
  )
}

export default Industry