"use client"
import Image from 'next/image'
import React from 'react'


import { useRouter } from 'next/navigation'
import { serviceItems } from '@/data/data'

import { motion } from 'framer-motion'



const Smart = () => {
  const router = useRouter()
  return (
    <div className='bg-[#ccc7bf] text-[#111] py-16 relative'>
      <motion.div 
        initial={{opacity: 0, transform: 'translateY(100%)'}}
        whileInView={{opacity: 1, transform: 'translateY(0%)'}}
        transition={{duration: 0.5, easing: 'ease'}}
        

        className='max-w-6xl mx-auto grid  md:gap-8 gap-4 p-2'>
        <div className='space-y-4'>
          <h4 className='text-2xl md:text-4xl  font-medium leading-7'>
          Why we are the smart choice
          </h4>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4 p-2'>
        {
          serviceItems.map((item, index) => (
            <div key={index} className='border p-4 border-black cursor-pointer hover:scale-95 hover:bg-black/30 hover:text-[#ccc7bf] transition-all space-y-4'>
              <Image src={item.image} width={60} height={60} alt={item.Service} />
              <h4 className='font-medium text-xl md:text-2xl'>
                {item.Service}
              </h4>
              <p>
                {item.Description}
              </p>
            </div>
          ))
        }
       </div>
        </div>
      </motion.div>

     
    </div>
  )
}

export default Smart