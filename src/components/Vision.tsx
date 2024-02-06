"use client"

import Image from 'next/image'
import React from 'react'

import visionimg from "@/assets/1.svg"

import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <div className=' bg-[#979DAC] h-full  p-4 sm:p-6 md:p-8 lg:p-12 '>
      <div
         className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 h-full place-items-center'>
        <motion.div
        initial={{opacity: 0, transform: 'translateX(-100%)'}}
        whileInView={{opacity: 1, transform: 'translateX(0%)'}}
        transition={{duration: 0.3}}
        viewport={{ once: true }}>
          <h4 className='font-black text-2xl md:text-3xl lg:text-5xl uppercase text-white'>building dreams</h4>
          <h4 className='font-black text-2xl md:text-3xl lg:text-5xl uppercase text-[#001233] text-right'>designing reality</h4>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl  text-white font-medium mt-8'>
            Capture Group&apos;s spirit emanates from a culture that cherishes people and relationships.
            As a family, we stand united — from our team to clients and subcontractors.
            Design and construct excellence define our projects, as we infuse each interior fitout 
            and refurbishment with expertise and a personal touch. Striving relentlessly for excellence, 
            we redefine success not just by the outcome but by the collaborative and caring manner in which it&apos;s achieved. 
            Capture Group is more than construction; it&apos;s a journey, a commitment to quality, 
            and atestament to enduring relationships.
          </p>
        </motion.div>

        <motion.div
        initial={{opacity: 0, transform: 'translateX(100%)'}}
        whileInView={{opacity: 1, transform: 'translateX(0%)'}}
        transition={{duration: 0.3}}
        viewport={{ once: true }} className='h-full'>
          <Image src={visionimg} alt='visin' width={600} height={800}  className='transition-opacity h-full w-full'  />
        </motion.div>


      </div>
    </div>
  )
}

export default Vision