import { foot, footerItems } from '@/data/data'
import { Mail, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import logoimg from "@/assets/Capture Projects Logo Design - (05-10-2023)-01-01 2.svg"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#ccc7bf]  min-h-80 text-black flex justify-center flex-col md:items-center'>
      <div className='flex md:flex-row gap-8 flex-col p-4 sm:p-8 md:p-12 '>

        <div className='w-64'>
          <Image src={logoimg} alt='logo' width={200} height={150} className='object-contain' />
          <p className=' text-lg sm:text-xl font-medium'>Lets work together. <br /> Get in touch.</p>
        </div>
        <div className='flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {
            footerItems.map((item, i: number) => (
              <div key={i}>
                <h4 className='text-lg font-bold' >
                  {item.title}
                </h4>
                <ul className='space-y-2'>
                  {
                    item.links.map((link, i: number) => (
                      <li key={i} className='text-sm md:text-base hover:underline transition-all'>
                        <Link  href={`${link.url}`}>
                        {link.name}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
          <div className='space-y-3'>
            <a className='flex items-center gap-3' href="mailto:Info@capturegroup.com.au">
              <Mail size={18} />
              Info@capturegroup.com.au
            </a>

            <p className='text-lg font-bold' >            
              Stay connected</p>
            <div className='flex gap-2 items-center '>
              {/* {
                foot.map((item, i) => (
                  <div key={i} className='bg-white p-1 rounded-md cursor-pointer transition-all hover:scale-95'>
                    {item.name}
                  </div>
                ))
              } */}
            </div>
          </div>
        </div>

      </div>
      <hr />
      <div className='border-t border-black w-full py-4'>
        <p className='text-center text-sm'>
          &copy; Capture.Com Copyright 2024.
        </p>
      </div>
    </div>
  )
}

export default Footer