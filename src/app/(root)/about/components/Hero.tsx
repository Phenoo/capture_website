"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

import ourproject from "@/assets/Picture1.png"
import logo from "@/assets/Capture Projects Logo Design - (05-10-2023)-01-01 2.svg"
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { motion } from 'framer-motion'


const Hero = () => {
    const router = useRouter()
  return (
    <div className='h-[90vh] about-hero  bg-[#111] w-full   flex justify-center flex-col items-center relative'>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xjl mx-auto w-full'> 
        <div className='hidden md:block'>

        </div>
            <motion.div 
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, easing: 'ease'}}
                className='relative w-full h-full flex  flex-col items-center md:items-start justify-center md:justify-start gap-12 p-4'>
              <h1 className='font-medium text-center md:text-left text-3xl md:text-4xl leading-none text-[#fff] '>
                    We transform spaces with unique design and comprehensive construction knowledge
                </h1>
                <p className='text-lg md:text-xl lg:text-2xl text-white'>
                Our mission is to be your partner in capturing inspiring spaces brought to life to suit your business
                </p>

                <Link href={"/projects"} className='w-fit flex md:justify-start justify-center' id='bottone1'>
                    Discover  Our Projects
                </Link>
                {/* <Image 
                    src={ourproject}
                    alt='Oheroabout'
                    width={700}
                    height={700}
                    className='w-[700px] '
                /> */}
            </motion.div>

        </div>
       
    </div>
  )
}

export default Hero