"use client"

import Image from 'next/image'
import React from 'react'

import office from "@/assets/7.svg"
import retail from "@/assets/10.svg"
import beauty from "@/assets/15.svg"
import hospitality from "@/assets/9.svg"
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const Recents = () => {
  const router = useRouter()
  return (
    <div className='bg-white p-2 sm:p-6 md:p-8 py-12'>
    <div className='max-w-7xl mx-auto'>
     <h4 className='font-black text-xl sm:text-3xl lg:text-4xl capitalize'>
         Our Recent Projects
         </h4>  
         <div className='mt-4 space-y-4'>
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                 <div className='relative h-72 md:h-96 w-full '>
                     <Image src={office} alt='office'fill className='w-full h-full object-cover' />
                     <div className='bg-black/50 absolute top-0 w-full h-full justify-center items-end py-4 flex text-white text-sm md:text-lg'>
                         <h4>
                           Customs & Classics Fitout
                         </h4>
                     </div>
                 </div>
                 <div className='relative h-72 md:h-96 w-full'>
                     <Image src={retail} alt='office'fill className='w-full h-full object-cover' />
                     <div className='bg-black/50 absolute top-0 w-full h-full justify-center py-4 items-end flex text-white text-sm md:text-lg '>
                         <h4>
                         45 Clarence St, Lobby Upgrade
                         </h4>
                     </div>
                 </div>
                 <div className='relative h-72 md:h-96 w-full'>
                     <Image src={hospitality} alt='office'fill className='w-full h-full object-cover' />
                     <div className='bg-black/50 absolute top-0 w-full h-full justify-center py-4 items-end flex text-white text-sm md:text-lg '>
                         <h4>
                         200 Pitt St, Spec Suite
                         </h4>
                     </div>
                 </div>
                 <div className='relative h-72 md:h-96 w-full'>
                     <Image src={retail} alt='office'fill className='w-full h-full object-cover' />
                     <div className='bg-black/50 absolute top-0 w-full h-full justify-center py-4 items-end flex text-white text-sm md:text-lg '>
                         <h4>
                          Daily Bean Cafe, Fitout
                         </h4>
                     </div>
                 </div>
                 <div className='relative h-72 md:h-96 w-full'>
                     <Image src={hospitality} alt='office'fill className='w-full h-full object-cover' />
                     <div className='bg-black/50 absolute top-0 w-full h-full justify-center py-4 items-end flex text-white text-sm md:text-lg '>
                         <h4>
                         Deloitte Level 4 Refurbishment
                         </h4>
                     </div>
                 </div>
                 <div className='relative h-72 md:h-96 w-full'>
                     <Image src={beauty} alt='office'fill className='w-full h-full object-cover' />
                     <div className='bg-black/50 absolute top-0 w-full h-full justify-center items-end py-4 flex text-white text-sm md:text-lg '>
                         <h4>
                         314 Elizabeth St, Lobby Ugrade
                         </h4>
                     </div>
                 </div>
             </div>
             <div className='mx-auto max-w-7xl flex justify-center items-center'>
              <Button className='border-4 border-[#24246B]' variant={"outline"} onClick={() => router.push("/projects")}>
                All Projects
              </Button>
             </div>
         </div>
     </div>  
 </div>  )
}

export default Recents