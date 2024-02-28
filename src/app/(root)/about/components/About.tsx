"use client"
import Image from 'next/image'
import React from 'react'

import story from "@/assets/aboutmain.webp"

import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div 
      initial={{opacity: 0, transform: 'translateX(100%)'}}
      whileInView={{opacity: 1, transform: 'translateX(0%)'}}
      transition={{duration: 0.5, easing: 'ease'}}
      viewport={{ once: true}}
      className='grid grid-cols-1 md:grid-cols-2 gap-6 py-16  p-2 max-w-7xl mx-auto relative'>
        <div className='space-y-4'>
            <h4 className='text-xl md:text-2xl lg:text-3xl font-medium'>Our Story</h4>
            <p className='w-full text-base md:text-lg'>
            At Capture Group, our journey began with a shared passion for transforming spaces into exceptional environments. Founded in 2021, we set out to redefine the fitout and refurbishment experience in Sydney, Australia.
            <br />
            <br />
            Driven by a commitment to excellence and innovation, our mission is simple: to bring visions to life. From the initial spark of an idea to the final flourish of construction, we&apos;ve dedicated ourselves to mastering the art of design and construct.

            </p>
        </div>
        <div className='space-y-4'>
          <div className='w-full'>
            <Image
              src={story}
              alt='story'
              className='w-full h-full'
              width={700}
              height={600}
            />
          </div>
            <p className='text-base md:text-lg'>
            </p>
        </div>

       
    </motion.div>
  )
}

export default About