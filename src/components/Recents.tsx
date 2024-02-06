"use client"

import Image from 'next/image'
import React from 'react'

import office from "@/assets/7.svg"
import retail from "@/assets/10.svg"
import beauty from "@/assets/15.svg"
import hospitality from "@/assets/9.svg"
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import Card from '@/app/(root)/projects/components/Card'

const Recents = ({data}:any) => {
  const router = useRouter()
  return (
    <div className='bg-white p-4 sm:p-6 md:p-8 py-12'>
    <div className='max-w-6xl mx-auto'>
     <h4 className='font-black text-xl sm:text-3xl lg:text-4xl capitalize'>
         Our Recent Projects
         </h4>  
         <div className='mt-4 space-y-4'>
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map((item: any) => (
                        <Card key={item.slug.current} item={item} />
                    ))
                }
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