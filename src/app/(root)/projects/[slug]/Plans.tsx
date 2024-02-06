"use client"
import { MoveDown } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Plans = ({data}:any) => {
    const [isLoading, setLoading] = useState(true);

  return (
    <div className='flex flex-col gap-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center py-12'>
            <div className='space-y-4 text-[#24246B] px-4 md:px-16'>
                <h4 className='text-2xl md:text-4xl'>
                    <span className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl mr-2'>1</span> 
                    Planning
                </h4>
                <p>
                    {data.planning}
                </p>
                <div className="my-4">
                    <MoveDown size={40} />
                </div>
            </div>
            <div>
            <Image   
                src={(data?.mainImage)}
                alt={data.title} 
                width={500}
                height={500}  
                className={`object-cover w-full h-full hover:opacity-90  transition
                    duration-300 ease-in-out group-hover:opacity-75
                    ${
                    isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                    })`}
                    onLoadingComplete={() => setLoading(false)}
                    loading='lazy'
             />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
            <div className='space-y-4 text-[#24246B] px-4 md:px-16'>
                <h4 className='text-2xl md:text-4xl'>
                    <span className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl mr-2'>2</span> 
                    Design
                </h4>
                <p>
                    {data.design}
                </p>
                <div className="my-4">
                    <MoveDown size={40} />
                </div>
            </div>
            <div>
            <Image   
                src={(data?.mainImage)}
                alt={data.title} 
                width={500}
                height={500}  
                className={`object-cover w-full h-full hover:opacity-90  transition
                    duration-300 ease-in-out group-hover:opacity-75
                    ${
                    isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                    })`}
                    onLoadingComplete={() => setLoading(false)}
                    loading='lazy'
             />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
            <div className='space-y-4 text-[#24246B] px-4 md:px-16'>
                <h4 className='text-2xl md:text-4xl'>
                    <span className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl mr-2'>3</span> 
                    Construction
                </h4>
                <p>
                    {data.construction}
                </p>
                <div className="my-4">
                    <MoveDown size={40} />
                </div>
            </div>
            <div>
            <Image   
                src={(data?.mainImage)}
                alt={data.title} 
                width={500}
                height={500}  
                className={`object-cover w-full h-full hover:opacity-90  transition
                    duration-300 ease-in-out group-hover:opacity-75
                    ${
                    isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                    })`}
                    onLoadingComplete={() => setLoading(false)}
                    loading='lazy'
             />
            </div>
        </div>
    </div>
  )
}

export default Plans