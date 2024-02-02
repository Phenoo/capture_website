import { Button } from '@/components/ui/button'
import React from 'react'

import Image from 'next/image'

import image1 from "@/assets/Link → agriwebb-headoffice.jpg.svg"
import image2 from "@/assets/Link → dsc4313_compressed_1500x1000-1024x683-1.jpg.svg"
import image3 from "@/assets/Link → whatsapp-image-2021-12-14-at-8.06.17-pm-1.jpeg.svg"
import { MoveRight } from 'lucide-react'

const Other = () => {
  return (
    <div className='max-w-6xl mx-auto py-12 md:px-0 px-2 space-y-4 text-[#06004B'>
      <h4 className='text-lg sm:text-xl text-[#06004B] md:text-2xl lg:text-3xl font-bold'>
        View Other Projects
      </h4>
      <div className='grid grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3'>
        <div className='space-y-2'>
          <Image 
            src={image2}
            width={360}
            height={400}
            alt='project1'
          />
          <div className='flex justify-between px-4'>
          <div>
          <h6 className='text-lg font-bold'>Zambrero </h6>
          <p className='text-xs'>Kogarah</p>
          </div>
          <div>
            <MoveRight />
          </div>

          

          </div>
        
        </div>
        <div className='space-y-2'>
          <Image 
            src={image1}
            width={360}
            height={400}
            alt='project1'
          />
          <div className='flex justify-between px-4'>
            <div>
            <h6 className='text-lg font-bold'>Lobby Upgrade </h6>
            <p className='text-xs'>Sydney CBD</p>
            </div>
            <div>
              <MoveRight />
            </div>
          </div>
        
        </div>

        <div className='space-y-2'>
          <Image 
            src={image3}
            width={360}
            height={400}
            alt='project1'
          />
           <div className='flex justify-between px-4'>
            <div>
            <h6 className='text-lg font-bold'>Office Fitout</h6>
            <p className='text-xs'>Sydney CBD</p>
            </div>
            <div>
              <MoveRight />
            </div>
          </div>
        </div>

        
      </div>
     <div className='flex justify-center'>
     <Button className='bg-[#06004B] rounded-3xl text-white'>
        View Project Portfolio
      </Button>
     </div>
    </div>
  )
}

export default Other