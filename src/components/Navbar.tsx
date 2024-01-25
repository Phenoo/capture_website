"use client"
import { navLinks } from '@/data/data';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname()

    const changeBackground = () => {
      
      if (window.scrollY >= 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    useEffect(() => {
      window.addEventListener("scroll", changeBackground)
      changeBackground()
    })


  return (
    <nav className={`flex  items-center fixed top-0 w-full z-20 ${scrolled ? 'bg-[#ffffff] text-black shadow-md' : 'text-white'} transition-all`} aria-label='navigation'>
    <header className=' w-[95%] lg:w-[85%] mx-auto py-4'>
        <div className='flex justify-between items-center w-full'>
          <Logo />
          <div >
            <ul className='hidden md:flex gap-6'>
              {
                navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className={cn('capitalize  font-normal text-xl',
                        pathname === link.url ? 'text-orange-500 font-bold' : 'text-[#24246B]'
                    )}>
                        {link.name}
                    </Link>
                  </li>
                ))
              }
              <li>
                <Link href={"/contact"} className='bg-[#24246B] text-white rounded-md p-2'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            {/* <NavMenu scrolled={scrolled} /> */}
          </div>
        </div>

    </header>
    <hr />
  </nav>
  )
}

export default Navbar