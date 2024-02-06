"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import urlFor from '../../../../../sanity/lib/urlFor';
import PersonalStats from './PersonalStats';
import Plans from './Plans';

const SlugComponent = ({data}: any) => {
    const [isLoading, setLoading] = useState(true);
    const router = useRouter();
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-4 text-[#24246B] px-4 md:px-16 py-10'>
                <h4 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
                    {data.title}
                </h4>
                <p>
                    {data.description}
                </p>
            </div>
            <div>
            <Image   
                src={(data?.mainImage)}
                alt={data.title} 
                width={600}
                height={700}  
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
        <PersonalStats size={data.size} duration={data.duration} location={data.location} />
        <Plans data={data} />
    </div>
  )
}

export default SlugComponent