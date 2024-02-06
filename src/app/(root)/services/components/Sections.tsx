import { industries } from '@/data/data'
import Image from 'next/image'
import React from 'react'


import Link from 'next/link'

const Sections = ({data}: any) => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='p-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 font-bold'>
                    {
                        data.map((item: any) => (
                            <Link href={`/category/${item.slug.current}`} key={item._id} className='relative h-72 w-full  rounded-md'>
                            <Image src={item.mainImage} alt='office'fill className='w-full h-full object-cover rounded-md' />
                            <div className='rounded-md bg-black/50 hover:bg-black/20 transition-all cursor-pointer absolute top-0 w-full h-full justify-center items-center flex text-white text-sm md:text-lg uppercase'>
                                <h4>
                                    {item.title}
                                </h4>
                            </div>
                        </Link>
                        ))
                    }

                    
                </div>
            </div>
    </div>
  )
}

export default Sections