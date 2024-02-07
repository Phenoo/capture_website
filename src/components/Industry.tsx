import Image from 'next/image'
import React from 'react'


import Link from 'next/link'

const Industry = ({data}: any) => {
  return (
    <div className=' bg-[#979DAC] p-4 sm:p-6 md:p-8 py-16'>
       <div className='max-w-7xl mx-auto'>
        <h4 className='font-black text-2xl sm:text-3xl lg:text-5xl capitalize'>
            Industries
            </h4>  
            <div className='mt-4'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4 font-bold'> 
                    {
                        data.map((item: any) => (
                            <Link href={`/category/${item.slug.current}`} className='relative h-96  md:h-[450px] w-full' key={item._id}>
                            <Image src={item.mainImage} alt='office'fill className='w-full h-full object-cover' />
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
        </div>  
    </div>
  )
}

export default Industry