import { industries } from '@/data/data'
import React from 'react'

const Sections = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 ">
            {
                industries.map((item, i) => (
                    <div className='w-40 md:w-64 aspect-square rounded-lg justify-center items-center flex bg-black/20' key={i}>
                        <h4>{item.name}</h4>
                    </div>
                ) )
            }
        </div>
    </div>
  )
}

export default Sections