"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import urlFor from '../../../../../sanity/lib/urlFor'
import { useRouter } from 'next/navigation'

const Card = ({item}: any) => {
    const [isLoading, setLoading] = useState(true);
    const router = useRouter();
  return (
    <div className='w-full md:w-96 '>

        <div 
            onClick={() => router.push(`/projects/${item.slug.current}`)}
            className='aspect-square w-full h-80 relative cursor-pointer overflow-hidden'>
            <Image   
                src={
                urlFor(item?.mainImage).url()
              }
              alt={item.title} fill  
                className={`object-cover w-full h-full hover:scale-105 hover:opacity-90  transition rounded-t-md
                    duration-300 ease-in-out group-hover:opacity-75
                    ${
                    isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                    })`}
                    onLoad={() => setLoading(false)}
                    loading='lazy'
             />
            <div className='absolute bg-black/70 hover:bg-black/40 text-white w-full h-full top-0 left-0 flex items-center flex-col justify-center'>
                <h4 className='text-lg sm:text-xl font-semibold'>{item?.title || "Name withheld"}</h4>
                <p className='uppercase text-sm'>{item?.location || "Australia"}</p>
            </div>

           
        </div>
    </div>
  )
}

export default Card