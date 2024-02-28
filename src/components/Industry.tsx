"use client"
import Image from 'next/image'
import React from 'react'


import Link from 'next/link'


 
import { motion } from "framer-motion";



const Industry = ({data}: any) => {
  return (
    <div
        className='bg-[#b8b4ae] p-4 sm:p-6 md:p-8 py-16'>
       <motion.div 
                initial={{opacity: 0, transform: 'translateX(100%)'}}
                whileInView={{opacity: 1, transform: 'translateX(0%)'}}
                transition={{duration: 0.3}}
                viewport={{ once: true }} className='max-w-7xl mx-auto'>
        <h1 className=' text-2xl sm:text-3xl text-white lg:text-5xl capitalize'>
            Industries
            </h1>  
            <div className='mt-4'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4 font-medium'> 
                    {
                        data.map((item: any) => (
                            <Link href={`/category/${item.slug.current}`} className='relative h-96  md:h-[450px] overflow-hidden group transition-all w-full' key={item._id}>
                            <Image src={item.mainImage} alt='office'fill className='w-full h-full group-hover:scale-110 object-cover transition-all' />
                            <div className=' bg-black/50 hover:bg-black/20 transition-all cursor-pointer absolute top-0 w-full h-full justify-center items-center flex text-white text-sm md:text-lg uppercase'>
                                <h4>
                                    {item.title}
                                </h4>
                            </div>
                        </Link>
                        ))
                    }
        

                    
                </div>
            </div>
        </motion.div>  
    </div>
  )
}

export default Industry