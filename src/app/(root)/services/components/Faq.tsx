"use client"
import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'

import { motion } from 'framer-motion';
import { faqItems } from '@/data/data';


const Faq = () => {
    const [sindex, setSindex] = useState<any>();

    const handleClick = (index: any)  => {
      setSindex(index);
      if(sindex === index){
        setSindex(null)
      }
    }
  return (
    <div className='bg-[#c4dbf6] relative py-8 flex justify-center flex-col'>
        <h4 className='font-semibold text-xl sm:text-3xl lg:text-4xl text-center text-[#24246B] capitalize'>
        frequently asked questions
        </h4>

      <div className='max-w-6xl mx-auto'>
      {
            faqItems.map((item, index) => (
              <article key={index} className='py-6 overflow-hidden border-b border-b-[#111] cursor-pointer ' onClick={() => handleClick(index)}>
                <div className="flex justify-between items-center"  onClick={() => handleClick(index)}>
                  <h4 className={`text-md md:text-lg capitalize font-[500] ${sindex === index ? ' font-bold' : ''}`} >
                    <span className='font-bold mr-4'>{index < 9 && "0"}{index + 1}</span>{item.Question}
                    </h4>
                  <div>
                    <button onClick={() => handleClick(index)}
                      aria-expanded='true'
                    >
                      {
                      sindex === index ? 
                        <Minus color='#054FB3' />
                      :
                      <Plus />
                      }
                    </button>
                  </div>

                </div>
                
                <div>
                  {
                      sindex === index &&
                      <motion.p
                        initial={{ height: 0 }}
                        animate={{
                          height: 'auto',   
                          transition: { duration: 0.2 }
                        }}
                        exit={{
                          height: 0,
                          transition: {  duration: 0.2, delay: 0.3 }
                        }}
                        className='mt-4 text-lg'
                      >
                        {item.Answer}
                      </motion.p>
                    }
                </div>
              </article>
            ))
          }
      </div>
    </div>
  )
}

export default Faq