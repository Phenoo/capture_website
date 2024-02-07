import { Button } from '@/components/ui/button'
import React from 'react'

import Image from 'next/image'

import image1 from "@/assets/Link → agriwebb-headoffice.jpg.svg"
import image2 from "@/assets/Link → dsc4313_compressed_1500x1000-1024x683-1.jpg.svg"
import image3 from "@/assets/Link → whatsapp-image-2021-12-14-at-8.06.17-pm-1.jpeg.svg"
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

const Other = ({data}: any) => {
  return (
    <div className='max-w-6xl mx-auto py-12 md:px-0 px-2 space-y-4 text-[#06004B'>
      <h4 className='text-lg sm:text-xl text-[#06004B] md:text-2xl lg:text-3xl font-bold'>
        View Other Projects
      </h4>
      <div className='grid grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3'>
        {
          data.map((item: any) => (
            <Link href={`/projects/${item.slug.current}`} className='space-y-2 transition-all hover:scale-95' key={item.slug.current}>
           <div className='w-full md:w80 h-96'>
           <Image 
              src={item.mainImage}
              width={360}
              height={400}
              alt='project1'
              className='h-full w-full'
            />
           </div>
            <div className='flex justify-between px-4'>
            <div>
            <h6 className='text-lg font-bold'>{item.title} </h6>
            <p className='text-base'>{item.location}</p>
            </div>
            <div>
              <MoveRight />
            </div>
  
            
  
            </div>
          
          </Link>
          ))
        }
   

        
      </div>
     <div className='flex justify-center'>
     <Link href="/projects" className='bg-[#06004B] rounded-3xl p-2 transition-opacity text-white'>
        View Project Portfolio
      </Link>
     </div>
    </div>
  )
}

export default Other