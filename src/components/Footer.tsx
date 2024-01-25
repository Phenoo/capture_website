import { foot, footerItems } from '@/data/data'
import { Mail, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import logoimg from "@/assets/Screenshot 2024-01-24 182714 1.png"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer p-4 sm:p-8 md:p-12 min-h-80 text-white flex justify-center flex-col md:items-center'>
      <div className='flex md:flex-row gap-8 flex-col '>

        <div className='w-64'>
          <Image src={logoimg} alt='logo' width={200} height={150} className='object-contain' />
          <p className='text-[#06004B] text-lg sm:text-xl font-bold'>Lets work together. <br /> Get in touch.</p>
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
                      <li key={i} className='text-sm hover:underline transition-all'>
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
            <a className='flex items-center gap-3' href=""> <PhoneCall size={18} /> 1300 657 444</a>
            <a className='flex items-center gap-3' href="mailto:Info@capturegroup.com.au">
              <Mail size={18} />
              Info@capturegroup.com.au
            </a>

            <p className='text-lg font-bold' >            
              Stay connected</p>
            <div className='flex gap-2 items-center '>
              {
                foot.map((item, i) => (
                  <div key={i} className='bg-white p-1 rounded-md cursor-pointer transition-all hover:scale-95'>
                    {item.name}
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </div>
      <div className='mt-8'>
        <p className='text-center text-xs md:text-sm'>
          &copy; Capture.Com Copyright 2024.
        </p>
      </div>
    </div>
  )
}

export default Footer